import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import "dotenv/config";

import contactRouter from "./routes/contact.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactRouter);

// Serve the built React app in production (after `npm run build` in /client).
const clientDist = path.join(__dirname, "..", "client", "dist");
const clientIndex = path.join(clientDist, "index.html");
if (fs.existsSync(clientIndex)) {
  app.use(express.static(clientDist));
  app.get("*", (_req, res) => {
    res.sendFile(clientIndex);
  });
} else {
  app.get("/", (_req, res) => {
    res.send(
      "AgroSense API is running. Build the client with `npm run build` in /client to serve it here, or run the Vite dev server separately on port 5173."
    );
  });
}

app.listen(PORT, () => {
  console.log(`AgroSense API server running on http://localhost:${PORT}`);
});
