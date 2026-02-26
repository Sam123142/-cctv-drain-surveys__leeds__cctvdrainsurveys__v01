# Change Log: CCTV Drain Surveys Leeds Project

## [2026-02-26] – Step 2: Site Build
- **feat:** Scaffolded Next.js App Router project (TypeScript, vanilla CSS).
- **feat:** Created shared layout with Header (sticky, responsive, hamburger), Footer (3-col), PhoneBar (mobile click-to-call).
- **feat:** Built global design system (globals.css) — custom properties, typography, buttons, cards, grids, FAQ accordion, CTA banner.
- **feat:** Created reusable components: `Header`, `Footer`, `PhoneBar`, `CTABanner`, `ContactForm`.
- **page:** Home (`/`) — hero, what-is section, how-it-works, areas served, CTA.
- **page:** Service money page (`/cctv-drain-surveys-leeds`) — hero, what-you-get, how-it-works, who-it's-for, common problems, results/next-steps, pricing guidance, areas, 10 FAQs, contact form. Service schema JSON-LD.
- **page:** Areas We Cover (`/areas-we-cover`) — 20 Leeds suburbs grid, internal links.
- **page:** About (`/about`) — truthful service-area model explanation.
- **page:** Contact (`/contact`) — phone CTA card + enquiry form with success state.
- **page:** Privacy Policy (`/privacy`) — UK GDPR-aligned.
- **page:** Cookies Policy (`/cookies`) — essential + analytics cookies.
- **page:** 404 Not Found — custom page with navigation links.
- **seo:** robots.txt and sitemap.xml via Next.js metadata routes.
- **seo:** Per-page `<title>`, meta descriptions, canonical tags, Open Graph + Twitter meta.
- **seo:** JSON-LD `Service` schema on money page (no `LocalBusiness` — no verified GMB).
- **config:** Phone number + site URL read from env vars with TODO placeholders.
- **compliance:** All copy follows Truth Rules — no fake addresses, staff, reviews, accreditations, or "based in Leeds" claims.

## [2026-02-26] – Step 1: Initial Repo Scaffold
- **init:** Scaffold repo structure + PRD docs.
- **Created:** `/docs`, `/src`, `/public`, `/scripts`.
- **Drafts:** `prd.md`, `prompt-context.md`, `qa-checklist.md`, `content-notes.md`.
- **Configs:** `.env.example`, `README.md`.
- **Git:** Initialised repository and made initial commit.
