// src/firebase/chatbot.js
import { httpsCallable } from "firebase/functions";
import { functions } from "./config";

const chatFn = httpsCallable(functions, "chatWithAssistant");

export async function sendMessage(history) {
  // expects history = [{role:'user'|'assistant', content:'...'}, ...]
  const res = await chatFn({ history });
  // res.data should be object { reply: '...' }
  return res.data?.reply ?? "Sorry — I couldn't get a response right now.";
}
