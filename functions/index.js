// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const OpenAI = require("openai");

admin.initializeApp();
const db = admin.firestore();

// Use env var for local dev. In production prefer Firebase Secrets (firebase functions:secrets:set)
const OPENAI_KEY = process.env.OPENAI_API_KEY || "";

if (!OPENAI_KEY) {
  console.warn(
    "Warning: OPENAI_API_KEY is not set. The chatWithAssistant function will return a friendly fallback message."
  );
}

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
});

/* notifyEnquiry: save enquiry and optionally notify */
exports.notifyEnquiry = functions.https.onCall(async (data) => {
  const payload = {
    name: typeof data?.name === "string" ? data.name.trim() : "",
    email: typeof data?.email === "string" ? data.email.trim() : "",
    projectType: typeof data?.projectType === "string" ? data.projectType.trim() : "",
    budget: typeof data?.budget === "string" ? data.budget.trim() : "",
    details: typeof data?.details === "string" ? data.details.trim() : "",
  };

  if (
    !payload.name ||
    payload.name.length > 120 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) ||
    payload.email.length > 254 ||
    !payload.details ||
    payload.details.length > 5000 ||
    payload.projectType.length > 80 ||
    payload.budget.length > 80
  ) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Please provide valid contact details and project information."
    );
  }

  try {
    await db.collection("enquiries").add({
      ...payload,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      source: "website-form",
    });
  } catch (err) {
    console.error("notifyEnquiry save error:", err);
    throw new functions.https.HttpsError(
      "internal",
      "Unable to save the enquiry."
    );
  }
  return { ok: true };
});

/* chatWithAssistant: website AI chatbot */
exports.chatWithAssistant = functions.https.onCall(async (data) => {
  try {
    const history = Array.isArray(data.history) ? data.history : [];
    const trimmed = history.slice(-12);

    if (!OPENAI_KEY) {
      return {
        reply:
          "Chat service is not available right now (server not configured). Please try again later.",
      };
    }

    const messages = [
      {
        role: "system",
        content:
          "You are Kannizcon IT Enabling Services website assistant. Help visitors understand services (web, mobile, cloud, AI, DevOps), rough pricing ranges, and next steps. Be concise and friendly.",
      },
      ...trimmed,
    ];

    // OpenAI client call using the 'openai' package
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // change model if you prefer
      messages,
      max_tokens: 600,
    });

    const reply =
      completion?.choices?.[0]?.message?.content?.trim() ||
      "How can I help you today?";

    return { reply };
  } catch (err) {
    console.error("chatWithAssistant error:", err);
    return {
      reply: "Sorry, I'm having trouble right now. Please try again later.",
    };
  }
});
