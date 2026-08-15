# CLAUDE.md — Arc-I Company Website

This file is the source of truth for building the Arc-I marketing/portfolio website.
Read this fully before writing any code. Follow it precisely. Where information is
marked **[PLACEHOLDER]**, use clearly-labeled placeholder content/assets and leave a
`TODO:` comment in the code so it's easy to find and swap later.

---

## 1. Project Overview

**Company name:** Arc-I

**What this project is:** A multi-page marketing website for Arc-I, an AI-powered
company, to be sent to prospective clients so they can understand who Arc-I is,
what technologies/skills the team has, and what results they can expect.

**Primary goals (equal priority):**
1. Convert visitors into leads — clear, repeated CTAs to book a call / get in touch.
2. Build credibility — showcase skills, process, and (placeholder) case studies /
   testimonials so visitors trust Arc-I enough to move forward.

**Target audience / customers:** Small and local businesses that are underserved by
big agencies — e.g. independent retail shops (off-license stores), local service
providers, small enterprises — who want to modernize their customer reach and adopt
AI/web/marketing without enterprise-sized budgets or complexity.

**Design inspiration (structure & aesthetic reference only, do not copy content):**
https://www.synapx.com/ — glassmorphism cards, credibility stat strip, practice-area
grid, case study cards, testimonial section, "How We Work" alternating blocks.

---

## 2. Brand Content (use this verbatim unless asked to adjust tone/length)

### 2.1 Who We Are

> Arc-I is an AI-powered company built on three core strengths: full stack
> development, AI engineering, and marketing. We exist to bring modern, model-AI
> technology within reach of small businesses that are often left behind by digital
> transformation — from independent off-license shops to local service providers —
> helping them compete and grow in a market that increasingly runs on data,
> automation, and online presence.

### 2.2 What We Do

> We combine three specialist teams under one roof, so our clients get a single,
> connected solution instead of juggling separate agencies and freelancers.

- **Marketing Team** — Crafts promotional strategies across Facebook, Instagram,
  WhatsApp, Email, and influencer collaborations, designed to drive real customer
  growth and measurable sales gains.
- **Full Stack Team** — Designs and builds websites and web applications (including
  e-commerce and mobile) tailored to support what the marketing strategy needs to
  succeed — fast, functional, and built to convert visitors into customers.
- **Data & AI Team** — Tracks business performance, customer behavior, and sales
  trends through advanced dashboards (Power BI, Microsoft Fabric), and where it adds
  value, builds and deploys AI chatbots directly into client websites and WhatsApp —
  powered by predictive analytics, automation (Power Automate, Power Apps), and
  custom AI model integration.

### 2.3 Our Goal

> To make enterprise-grade AI, web, and marketing technology accessible and
> practical for small businesses — not just to build tools, but to translate them
> into real outcomes: more customers, more sales, and sustainable growth.

### 2.4 Who We Work With

> We work with small and local businesses — the kind that are often underserved by
> big agencies — such as independent retail shops (e.g. off-license stores), local
> service providers, and small enterprises looking to modernize their customer reach
> without enterprise-sized budgets or complexity.

### 2.5 Company Head

**[PLACEHOLDER]** — Leadership bio, name, title, and photo not yet provided.
Build a dedicated "Leadership" block/section with a placeholder headshot (simple
avatar/initials graphic), placeholder name ("Company Head Name"), placeholder title,
and 2–3 lines of placeholder bio text, clearly styled so it's obvious it's a
placeholder pending real content.

---

## 3. Team Skill Sets (for Services page — use as source of truth)

### 3.1 Marketing
- Facebook Ads & Organic
- Instagram Marketing
- WhatsApp Business Marketing
- Email Marketing
- Influencer Collaborations

### 3.2 Full Stack Development
- Website Development
- React / Next.js
- Shopify / E-commerce
- Mobile Apps
- API / Backend Integrations

### 3.3 Data & AI
- Power BI / Advanced Dashboards
- Chatbots (Website & WhatsApp)
- Predictive Analytics
- Custom AI Model Integration (e.g. OpenAI, Claude)
- Power Automate
- Power Apps
- Microsoft Fabric
- Database Development

Present each team as a distinct card/section with an icon, short description, and a
tag list of the above skills (chips/pills style).

---

## 4. Site Structure (Multi-page)

Build as a multi-page site (not single-page scroll). Use React Router (or Next.js
routing if using Next.js — see Section 6).

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Hero intro, 3-team overview, credibility strip (placeholder stats/logos), practice-area cards, featured case study teaser, CTA |
| Services | `/services` | Deep dive into all 3 teams and their full skill sets (Section 3) |
| About | `/about` | Company story (Section 2.1–2.4), mission, Company Head section (placeholder), "How We Work" philosophy |
| Case Studies | `/case-studies` | Placeholder project cards: client name, problem → solution → result format |
| Contact | `/contact` | Contact form (name, email, business type, message), email link, socials, "Book a Discovery Call" CTA |

Shared components across all pages:
- Sticky/transparent header with logo (placeholder wordmark "Arc-I") + nav + CTA button
- Footer with nav links, contact info (placeholder email `hello@arc-i.com`), social icons (placeholder links), copyright

---

## 5. Design System

### 5.1 Visual Style
Glassmorphism, dark-mode-first, tech/AI-forward aesthetic. Frosted-glass panels
(`backdrop-filter: blur`) floating over a deep teal/blue-green gradient background.
Generous whitespace, bold large headlines, smooth scroll-triggered fade/slide-in
animations on sections.

### 5.2 Color Palette (greenish-blue glass theme)

Use CSS custom properties / Tailwind theme config — do not hardcode hex values
inline.

```css
:root {
  /* Background gradient */
  --bg-primary: #071A1A;        /* deep near-black teal, base background */
  --bg-secondary: #0A2E2E;      /* dark teal */
  --bg-gradient-start: #071A1A;
  --bg-gradient-mid: #0F3D3D;
  --bg-gradient-end: #123D3B;

  /* Accent / brand colors */
  --accent-primary: #14B8A6;    /* teal-emerald — primary CTA & highlights */
  --accent-secondary: #2DD4BF;  /* bright cyan-green — hover states, glows */
  --accent-tertiary: #38BDF8;   /* soft sky blue — secondary highlights */

  /* Glass surfaces */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.12);
  --glass-blur: blur(16px);

  /* Text */
  --text-primary: #F5FAFA;      /* near-white */
  --text-secondary: #A8C5C2;    /* muted soft gray-teal */
  --text-muted: #6B8B87;

  /* Utility */
  --success: #34D399;
  --border-radius-glass: 20px;
}
```

Design rules:
- Glass cards: semi-transparent white fill (~5–8% opacity) + subtle 1px border
  (~12% opacity white) + backdrop blur + soft drop shadow with a teal tint.
- CTAs use `--accent-primary` → `--accent-secondary` gradient, with a soft glow on
  hover.
- Avoid pure black or pure white — everything sits within the teal/green tonal
  range for backgrounds; text stays near-white for contrast/accessibility.
- Maintain WCAG AA contrast for all text against its background.

### 5.3 Typography
- Clean modern sans-serif (e.g. `Inter`, `Manrope`, or `Space Grotesk` for
  headlines + `Inter` for body). Load via Google Fonts or self-hosted.
- Headline weights: bold/semibold, large scale (e.g. H1 ~48–64px desktop).
- Body text: comfortable line-height (~1.6), `--text-secondary` for supporting copy.

### 5.4 Imagery
All images are **[PLACEHOLDER]** — use tasteful abstract AI/tech placeholder
graphics, gradient blobs, or generic stock-style placeholder blocks (clearly
labeled `TODO: replace with real asset`) rather than real photography, since no
real assets have been provided yet.

---

## 6. Technical Requirements

### 6.1 Stack
- **Framework:** React with Vite (recommended for simplicity) — Next.js is an
  acceptable alternative if file-based routing/SEO pre-rendering is preferred.
- **Styling:** Tailwind CSS, using the custom color tokens from Section 5.2 defined
  in `tailwind.config.js`.
- **Routing:** React Router v6+ (if using Vite/CRA) or native Next.js routing.
- **Animations:** Framer Motion for scroll-reveal / fade-in / hover interactions.
- **Icons:** `lucide-react`.
- **Forms:** Contact form should be built with client-side validation; backend
  submission endpoint is **[PLACEHOLDER]** — stub it with a console log / mock
  success state and a `TODO:` comment for real integration later (e.g. email
  service, CRM, or serverless function).
- **No localStorage/sessionStorage** for any persistent data — this is a public
  marketing site, no user accounts needed.

### 6.2 Project Structure (suggested)
```
arc-i-website/
├── src/
│   ├── components/
│   │   ├── layout/        (Header, Footer, Layout wrapper)
│   │   ├── sections/      (Hero, TeamOverview, CredibilityStrip, CaseStudyCard, etc.)
│   │   └── ui/             (GlassCard, Button, Badge, etc. — reusable primitives)
│   ├── pages/              (Home, Services, About, CaseStudies, Contact)
│   ├── data/                (content.js or content.json — centralize all copy/skills lists here, sourced from Section 2 & 3 of this file)
│   ├── styles/              (globals.css, tailwind config tokens)
│   ├── App.jsx
│   └── main.jsx
├── public/
├── tailwind.config.js
├── package.json
└── README.md
```

Centralizing copy in `src/data/content.js` (rather than hardcoding text across
components) makes it fast to swap placeholders for real content later.

### 6.3 Responsiveness
Fully responsive: mobile-first breakpoints (mobile, tablet, desktop). Glass effects
and blur should degrade gracefully on older/low-power devices (test performance).

### 6.4 Performance & Quality Bar
Build to an industry-standard, portfolio-grade quality bar:
- Lighthouse performance/accessibility/best-practices scores should target 90+.
- Semantic HTML throughout (proper heading hierarchy, `<nav>`, `<main>`, `<footer>`, `alt` text on all images).
- No console errors/warnings on any page.
- Smooth 60fps animations; avoid layout shift.
- SEO basics: page titles, meta descriptions per page (can use placeholder copy consistent with Section 2).

---

## 7. Placeholder Inventory (everything below is NOT final — mark clearly in code)

| Item | Placeholder approach |
|---|---|
| Logo | Simple text wordmark "Arc-I" styled with brand gradient, `TODO: replace with real logo` |
| Company Head bio/photo | See Section 2.5 |
| Case studies | 2–3 realistic dummy examples (e.g. "Local off-license boosts sales 40% with WhatsApp ordering bot") clearly stubbed as sample content |
| Testimonials | Generic placeholder quotes + placeholder names/roles |
| Client logos / credibility strip | Placeholder gray boxes or generic company-style badges, not real logos |
| Contact form backend | Mocked submission (see 6.1) |
| Email / phone / address | `hello@arc-i.com` / `+00 000 000 000` / "Address — TBD" |
| Social links | `#` placeholders for LinkedIn, Instagram, Facebook icons in footer |
| Real photography | Abstract/gradient placeholder graphics only |

---

## 8. How to Run Locally (Claude Code: execute and verify these steps)

1. Scaffold the project (Vite + React + Tailwind):
   ```bash
   npm create vite@latest arc-i-website -- --template react
   cd arc-i-website
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install react-router-dom framer-motion lucide-react
   ```
2. Configure `tailwind.config.js` with the color tokens from Section 5.2 and set
   `content` paths to `./index.html` and `./src/**/*.{js,jsx}`.
3. Build out the folder structure from Section 6.2, implement all 5 pages and
   shared components.
4. Run the dev server and confirm it builds cleanly with no errors:
   ```bash
   npm run dev
   ```
5. Verify locally in the browser (default `http://localhost:5173`):
   - All 5 pages load and navigate correctly (Home, Services, About, Case Studies, Contact).
   - Responsive check at mobile (375px), tablet (768px), and desktop (1440px) widths.
   - No console errors.
   - Glass/gradient theme renders correctly (no washed-out or unreadable text/contrast issues).
   - Contact form validates and shows a mock success state on submit.
6. Run a production build to confirm no build-time errors:
   ```bash
   npm run build
   ```
7. Report back a summary of what was built, any assumptions made, and a clear list
   of every placeholder still pending real content (cross-reference Section 7).

---

## 9. Acceptance Checklist

- [ ] All 5 pages exist and are reachable via nav
- [ ] Content matches Section 2 (About) and Section 3 (Skills) verbatim
- [ ] Color theme matches Section 5.2 tokens exactly (no off-palette colors introduced)
- [ ] Glassmorphism styling applied consistently across cards/panels
- [ ] Fully responsive, no horizontal scroll/overflow bugs
- [ ] All placeholders clearly marked with `TODO:` comments and visually obvious as placeholders (not passed off as real content)
- [ ] Site runs locally with `npm run dev` and builds cleanly with `npm run build`
- [ ] No console errors or broken links
- [ ] Company Head section present but clearly placeholder pending real bio/photo
