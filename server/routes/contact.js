import { Router } from "express";

const router = Router();

// In-memory store — swap for a real database in production.
const submissions = [];

router.post("/", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const submission = {
    id: submissions.length + 1,
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
    receivedAt: new Date().toISOString(),
  };

  submissions.push(submission);
  console.log("New contact submission:", submission);

  return res.status(201).json({ ok: true, message: "Thanks — we'll be in touch soon." });
});

router.get("/", (_req, res) => {
  res.json({ count: submissions.length, submissions });
});

export default router;
