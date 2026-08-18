# Hiindsight 2.0 — Development Roadmap

**Date:** August 17, 2026
**Status:** Draft for approval

---

## Phase 0 — Discovery & Approval (current)

- [x] Discovery Report
- [x] Brand Positioning
- [x] Sitemap
- [x] Navigation
- [x] Homepage Wireframe
- [x] Design Direction
- [x] Technology Architecture
- [x] Content Architecture
- [x] Component Architecture
- [x] Development Roadmap
- [x] Decisions Required
- [ ] **STOP — obtain approval before implementation**

---

## Phase 1 — Foundation

- Scaffold Next.js + TypeScript + Tailwind project.
- Design tokens (color, type, spacing, radii) + base primitives (Button, Card, Badge, form controls).
- Header/Footer/Breadcrumbs layout system.
- Logo system (light/dark/responsive) with provided assets.
- CI: lint, typecheck, build; Vercel preview.

## Phase 2 — Content Infrastructure

- Define content models + local fallback content (`/content`).
- CMS integration (headless) behind env vars — optional at launch.
- SEO module (metadata, schema builders, sitemap, robots, canonical, OG).
- Analytics-ready module (GA4 + consent placeholder).

## Phase 3 — Core Pages

- Homepage (hero, transformation gap, digital thread viz, capabilities, AI-first, products, why, case studies, CTA).
- Transform hub + 7 transformation pages.
- Technology hub + 11 technology pages.
- Solutions hub + 10 solution pages.
- Products hub with status taxonomy.
- Industries hub + 5 industry pages.

## Phase 4 — Insights, About, Careers, Contact

- Insights hub + category pages + content detail pages (articles, case studies, videos, etc.).
- About hub (company, vision/mission, leadership, story, why, experience, partnerships).
- Careers (structure; roles only when supplied).
- Contact with validated, spam-protected secure form.

## Phase 5 — QA, SEO, Accessibility, Performance

- Lighthouse/Web Vitals pass (LCP, CLS, INP targets).
- WCAG 2.1 AA audit (keyboard, contrast, forms, reduced-motion).
- Schema validation, sitemap/canonical verification, OG previews.
- Cross-browser/device testing (mobile-first).
- Security review (headers, env handling, input validation).

## Phase 6 — Content & Launch

- Final copy (verified content only).
- GA4 + Search Console setup; env-gated.
- Deployment to production; 301 handling; 404 page.
- Post-launch: analytics verification, monitor, iterate.

---

## Non-Goals (v1)

- No customer portal, SaaS login, AI assistant, knowledge portal, product trials, customer dashboards, partner ecosystem (architecture-ready only).
- No invented products or statistics.
- No stock-photo-heavy design; no excessive animations.
