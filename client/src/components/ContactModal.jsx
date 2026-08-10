import { useState } from "react";
import Icon from "./Icon";

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("sent");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  const handleClose = () => {
    setStatus("idle");
    setErrorMsg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="relative z-10 w-full max-w-md bg-surface rounded-2xl shadow-2xl p-8 organic-shadow">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
          aria-label="Close"
        >
          <Icon name="close" />
        </button>

        {status === "sent" ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-sage-bg flex items-center justify-center text-secondary">
              <Icon name="check_circle" fill />
            </div>
            <h3 className="font-headline-md text-xl text-primary mb-2">Message sent</h3>
            <p className="text-on-surface-variant text-sm mb-6">
              Thanks for reaching out — we'll get back to you shortly.
            </p>
            <button
              onClick={handleClose}
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-body-md hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-headline-md text-xl text-primary mb-1">Let's Discuss</h3>
            <p className="text-on-surface-variant text-sm mb-6">
              Tell us about your project and we'll be in touch.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-outline-variant/40 px-4 py-2.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary bg-surface-container-lowest"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-outline-variant/40 px-4 py-2.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary bg-surface-container-lowest"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-outline-variant/40 px-4 py-2.5 text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary bg-surface-container-lowest resize-none"
                />
              </div>
              {status === "error" && (
                <p className="text-error text-sm">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-body-md hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
