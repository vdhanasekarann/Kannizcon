// src/components/Chatbot.jsx
import { useEffect, useRef, useState } from "react";
import { sendMessage } from "../firebase/chatbot";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    // scroll to bottom when messages change
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, open]);

  async function handleSend(e) {
    e?.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input.trim() };
    const newHistory = [...history, userMsg];
    setHistory(newHistory);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendMessage(newHistory);
      setHistory((h) => [...h, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("chat send error:", err);
      setHistory((h) => [...h, { role: "assistant", content: "I'm having trouble right now — please try again later." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chatbot-widget">
      <button
        className="chatbot-toggle"
        aria-label="Chat"
        onClick={() => setOpen((s) => !s)}
      >
        💬
      </button>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">Kannizcon Assistant</div>

          <div className="chatbot-body" ref={bodyRef}>
            {history.length === 0 && (
              <div className="chatbot-message bot">
                👋 Hi — ask me about our services, pricing ranges, or how we can help.
              </div>
            )}

            {history.map((msg, i) => (
              <div
                key={i}
                className={`chatbot-message ${msg.role === "assistant" ? "bot" : "user"}`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <form className="chatbot-form" onSubmit={handleSend}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
            />
            <button type="submit" disabled={loading}>
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
