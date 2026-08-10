# AgroSense — Precision Geospatial Wisdom

A full-stack recreation of the Stitch-designed AgroSense product showcase, built with **React + Tailwind CSS** on the front end and **Node/Express** on the back end.

## Structure

```
AgeroSense/
├─ client/     React (Vite) + Tailwind CSS front end
├─ server/     Express API (contact form endpoint, serves the client build in production)
└─ package.json  Root scripts to run both together
```

## Getting started

```bash
npm run install:all   # installs client + server dependencies
npm run dev            # runs Express (port 5000) and Vite (port 5175) together
```

Open http://localhost:5175 — API calls to `/api/*` are proxied to the Express server.

## Production build

```bash
npm run build   # builds the React app into client/dist
npm start        # builds, then serves client/dist from Express on PORT (default 5000)
```

## Notes

- Tailwind theme (colors, spacing, type scale, radii) is ported 1:1 from the Stitch export's inline `tailwind.config` into [client/tailwind.config.js](client/tailwind.config.js).
- Scroll-reveal animations are reproduced via the [useReveal](client/src/hooks/useReveal.js) hook (IntersectionObserver), matching the original `<script>` behavior.
- The "Let's Discuss" buttons (nav + final CTA) open a contact modal that POSTs to `server/routes/contact.js`. Submissions are stored in-memory for now — swap in a real database/email service for production use.
- Most section imagery uses the same hosted URLs from the Stitch export (Google-hosted AI renders + Unsplash placeholders). A few images have been replaced with cleaner local assets in [client/src/assets](client/src/assets) — swap in the rest as final assets become available.
