# Hiindsight 2.0 — Component Architecture

**Date:** August 17, 2026
**Status:** Draft for approval

---

## 1. Design System Layer (UI Primitives)

`components/ui/*`

| Component | Notes |
|---|---|
| Button | variants: primary / secondary / ghost; sizes; icon slot |
| Link / CTA | accessible, external-safe |
| Badge | e.g., product status (Available / In Development / Coming Soon) |
| Card | image/text variants; hairline border style |
| Heading / Eyebrow / Lead | typography tokens |
| Container / Section | spacing rhythm |
| Grid / Stack | layout primitives |
| Input / Select / Textarea / Label / FieldError | form system |
| Accordion | ARIA-expanded, keyboard |
| Tabs | keyboard-accessible |
| Table | module/data lists |
| Modal / Dialog (minimal) | for future, optional |
| Toast / Alert | form + system feedback |
| Icon | stroke icon set, aria-hidden |
| Avatar | team photos |

---

## 2. Section Components

`components/sections/*`

| Section | Purpose |
|---|---|
| Hero | H1, support, CTAs, background visual (variant: home / hub / content) |
| TrustStrip | verified engagement references (optional) |
| PainGrid (Transformation Gap) | 6 pain cards |
| DigitalThreadViz | animated Concept→Design→…→Service, PLM+ERP+MES+IoT+AI+DT, Data→Context→Intelligence→Automation→Decisions |
| CapabilityGrid | 8 capability cards |
| AIUseCases | AI application cards (engineering, BOM, design, ECM, mfg, quality, service, knowledge, decisions) |
| ProductShowcase | status-filtered product cards + filter tabs |
| WhyHiindsight | proof blocks / verified stats (optional) |
| CaseStudyFeature | Challenge→Transformation→Solution→Technology→Implementation→Business Impact |
| IndustryStrip | industry cards |
| CtaBand | "Talk to an Expert" / "Discuss Your Challenge" |
| ContentLayouts | rich text, tables, media blocks |
| AuthorCard | insights author |
| Faq (optional) | accordion, FAQ schema |

---

## 3. Layout Components

`components/layout/*`

| Component | Notes |
|---|---|
| Header | sticky, light/dark logo variant, nav dropdowns, mobile drawer, skip-link |
| Footer | full nav, contact, legal |
| Breadcrumbs | BreadcrumbList schema |
| SearchBox (future) | insights search |
| BackToTop | optional |
| CookieBanner (consent-ready) | placeholder |

---

## 4. Visualization Components

`components/viz/*`

| Component | Notes |
|---|---|
| DigitalThreadFlow | SVG node-edge animation (respects prefers-reduced-motion) |
| DataFlow | subtle animated lines/dots for AI/data sections |
| TopologyMap | enterprise integration diagram |
| TwintDiagram | Product/Production/Performance |

All viz are inline SVG/CSS with no third-party animation libraries required.

---

## 5. Data & Content Components

| Component | Purpose |
|---|---|
| ContentBlockRenderer | renders CMS rich blocks (headings, lists, tables, media) |
| MediaImage | optimized next/image wrapper (AVIF/WebP, sizes, alt) |
| VideoEmbed | lazy YouTube/Vimeo embed for videos/webinars |
| Pagination / LoadMore | insights lists |
| Tag / CategoryFilter | insights + products filters |

---

## 6. App / API Layer

| Module | Purpose |
|---|---|
| `lib/cms/*` | CMS client + typed queries (fallback to local content) |
| `lib/seo/*` | metadata + JSON-LD builders |
| `lib/validators/*` | zod schemas for contact form |
| `app/api/contact/route.ts` | secure submission endpoint (validation + honeypot + rate limit + notify) |

---

## 7. Shared Data & Type Contracts

- TypeScript interfaces mirror CMS content types (Industry, Solution, Technology, Product, CaseStudy, Article, Team, Career...).
- Single `contentRegistry` that resolves local fallback or CMS data by key.

---

## 8. Composition Conventions

- Pages compose sections declaratively; no page-specific component forks.
- All components typed, server-rendered by default, `"use client"` only where interactivity is required.
- Reuse across Home, hub, and detail pages.
