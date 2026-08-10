# AgroSense — Precision Geospatial Wisdom

A recreation of the Stitch-designed AgroSense product showcase, built with **React (Vite) + Tailwind CSS**.

## Structure

```
src/
├─ components/
│  ├─ layout/     Navbar, Footer
│  ├─ home/       page sections (Hero, Challenge, Solution, Experience, Impact, …)
│  └─ shared/     reusable pieces (Icon)
├─ hooks/         useReveal (scroll-reveal animation)
├─ lib/           constants (contact email, etc.)
└─ assets/        local images
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5175
```

## Production build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Notes

- Tailwind theme (colors, spacing, type scale, radii) is ported 1:1 from the Stitch export's inline `tailwind.config` into [tailwind.config.js](tailwind.config.js).
- Scroll-reveal animations are reproduced via the [useReveal](src/hooks/useReveal.js) hook (IntersectionObserver), matching the original `<script>` behavior.
- The "Let's Discuss" buttons are `mailto:` links (see [src/lib/constants.js](src/lib/constants.js)) — update `CONTACT_EMAIL` to your real inbox.
- Most section imagery uses the same hosted URLs from the Stitch export (Google-hosted AI renders + Unsplash placeholders). A few images have been replaced with cleaner local assets in [src/assets](src/assets) — swap in the rest as final assets become available.
