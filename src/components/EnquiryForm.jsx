import { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase/config";

export default function EnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      projectType: String(form.get("projectType") || ""),
      budget: String(form.get("budget") || "").trim(),
      details: String(form.get("details") || "").trim(),
    };

    try {
      const submitEnquiry = httpsCallable(functions, "notifyEnquiry");
      await submitEnquiry(payload);
      formElement.reset();
      setStatus({
        type: "success",
        message: "Thanks for reaching out. Your enquiry has been submitted.",
      });
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      setStatus({
        type: "error",
        message: "We couldn’t submit your enquiry. Please try again shortly.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form id="enquiryForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" autoComplete="name" required maxLength={120} />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="projectType">Project type</label>
          <select id="projectType" name="projectType">
            <option>Web app</option>
            <option>Mobile app</option>
            <option>Web + mobile</option>
            <option>AI solution</option>
            <option>SaaS product</option>
            <option>Cloud / database</option>
            <option>eBook / digital publishing</option>
            <option>Data processing / migration</option>
            <option>Custom software</option>
            <option>Maintenance / technical support</option>
            <option>Consulting / other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="budget">Estimated budget (optional)</label>
          <input id="budget" name="budget" type="text" placeholder="e.g. ₹1L – ₹3L" maxLength={80} />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="details">Project details</label>
        <textarea
          id="details"
          name="details"
          placeholder="Tell us about your idea, timeline, and goals."
          required
          maxLength={5000}
        />
      </div>

      <div className="enquiry-actions">
        <button type="submit" disabled={loading}>
          {loading ? "Sending…" : "Send enquiry"}
        </button>
      </div>
      {status && (
        <p className={`enquiry-status ${status.type}`} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
