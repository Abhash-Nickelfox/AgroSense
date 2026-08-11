# AgroSense — Precision Geospatial Wisdom

A recreation of the Stitch-designed AgroSense product showcase, built with **React (Vite) + Tailwind CSS**.

## Structure

```
src/
├─ pages/         Home, Discuss (routed via react-router-dom)
├─ components/
│  ├─ layout/     Navbar, Footer, ScrollToTop
│  ├─ home/       page sections (Hero, Challenge, Solution, Experience, Impact, …)
│  └─ shared/     reusable pieces (Icon)
├─ hooks/         useReveal, useActiveSection
├─ lib/           constants, supabase client
└─ assets/        local images
supabase/
└─ schema.sql     table + RLS policy for /discuss form submissions
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5175
```

### Contact form (Supabase)

The `/discuss` page's form saves submissions to a Supabase table.

1. Create a free project at [supabase.com](https://supabase.com).
2. In its SQL Editor, run [supabase/schema.sql](supabase/schema.sql) once to create the `discuss_submissions` table.
3. Copy `.env.example` to `.env` and fill in your project's URL and anon key (Project Settings → API).
4. View submissions anytime in the Supabase Table Editor.

Without a `.env`, the form will fail to submit — a console warning will point this out.

## Production build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Notes

- Tailwind theme (colors, spacing, type scale, radii) is ported 1:1 from the Stitch export's inline `tailwind.config` into [tailwind.config.js](tailwind.config.js).
- Scroll-reveal animations are reproduced via the [useReveal](src/hooks/useReveal.js) hook (IntersectionObserver), matching the original `<script>` behavior.
- The nav highlights whichever section is currently in view via [useActiveSection](src/hooks/useActiveSection.js), not just on hover.
- Most section imagery uses the same hosted URLs from the Stitch export (Google-hosted AI renders + Unsplash placeholders). A few images have been replaced with cleaner local assets in [src/assets](src/assets) — swap in the rest as final assets become available.
