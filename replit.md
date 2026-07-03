# Stanley Osuide — Executive Personal Brand Website

A premium, cinematic single-page personal brand site for Stanley Osuide: international speaker, leadership strategist, and investment & legacy builder.

## Run & Operate

- `pnpm --filter @workspace/stanley-osuide run dev` — run the frontend (workflow: `artifacts/stanley-osuide: web`)
- `pnpm --filter @workspace/stanley-osuide run typecheck` — typecheck the frontend
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4 + Framer Motion + Lenis
- Fonts: Playfair Display (serif headings) + DM Sans (body) — loaded via Google Fonts CSS import
- No backend — pure frontend, no API or database needed

## Where things live

- Frontend artifact: `artifacts/stanley-osuide/src/`
  - `components/sections/` — all page sections (Loader, Navbar, Hero, About, Impact, Topics, IdealEvents, WhyBook, Organisations, Booking, CTA, Footer)
  - `components/ui/` — reusable primitives (MagneticButton, AnimatedText, CountUp, SectionHeader, etc.)
  - `components/layout/` — Navbar, Footer
  - `hooks/` — useLenis, useMouseParallax, useMagneticButton, useIntersectionObserver
  - `data/content.ts` — all real content in typed arrays (single source of truth for copy)
  - `pages/Home.tsx` — assembles all sections into one scroll page
- Theme: defined via `@theme inline {}` in `artifacts/stanley-osuide/src/index.css`

## Architecture decisions

- Presentation-first, no backend: all content is static; booking form simulates submission (1.5s delay → success state) with no API call
- Dark-mode-only design: `#080808` primary, `#C9A227` gold accent — no light mode toggle needed
- Lenis smooth scroll initialised in a `useLenis` hook, called once in `App.tsx`
- Framer Motion variants typed with `Variants` type and bezier tuples `as [number, number, number, number]` to satisfy strict TS inference
- `MagneticButton` omits conflicting HTML event props (`onDrag*`, `onAnimationStart`) before spreading into `motion.button`

## Product

Single-page executive brand site with: luxury letter-by-letter loader, sticky glass navbar with mobile slide-in menu, cinematic hero with gold glow & parallax, about section with animated text reveal, count-up impact stats, 6 speaking topic cards with hover glow, ideal events grid, animated checklist "Why Book" section, 3 organisation founder cards, fully-validated booking enquiry form, cinematic CTA, and minimal premium footer.

## Gotchas

- Lenis must be installed per-artifact: `pnpm --filter @workspace/stanley-osuide add lenis`
- Tailwind v4 uses `@import 'tailwindcss'` syntax — no `tailwind.config.js` needed; extend theme in CSS via `@theme inline {}`
- Booking form does NOT submit to a real endpoint — it simulates a 1.5s loading state then shows a success confirmation
