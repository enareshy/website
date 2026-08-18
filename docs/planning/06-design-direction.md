# Hiindsight 2.0 — Design Direction

**Date:** August 17, 2026
**Status:** Draft for approval

---

## 1. Design Principles

1. **Premium & enterprise-grade** — every pixel communicates competence.
2. **Engineering precision** — grid-based, structured, technical.
3. **Futuristic but functional** — intelligent, not flashy.
4. **Data & AI visualization** — the brand signature is the *connected system*, not stock photos.
5. **Performance & accessibility first** — progressive enhancement, reduced-motion support.
6. **No template look** — no generic IT-service patterns, no excessive gradients, no cheap icons.

---

## 2. Visual Concept

**Theme:** "The Intelligent Enterprise Grid"

The visual language evokes an engineered system: connected nodes, data flowing through a digital thread, layered technical diagrams, blueprint aesthetics with modern intelligence.

- **Engineering + Manufacturing + Data + AI + Digital Twin + Enterprise** — all expressed through the same visual grammar (nodes, connections, threading, precision lines).
- Sophisticated technology visuals (SVG/canvas/data-vis) instead of generic photography.
- Photography, where used, is secondary and technical (factories, products, workcells) — never generic.

---

## 3. Color System

| Token | Role |
|---|---|
| `ink` (near-black blue-grey) | Base text / primary surfaces |
| `paper` (off-white) | Light background |
| `steel` (mid grey-blue) | Secondary surfaces / borders |
| `signal` (industrial accent — single hue) | CTA / highlights / active states |
| `data` (secondary accent for data/AI viz) | Charts, thread, AI elements |
| Semantic | success / warning / danger (forms, badges) |

Light and dark theme tokens both defined. Contrast targets ≥ 4.5:1 for text (WCAG AA).

*Final palette values will be fixed during design-system implementation and approved before build.*

---

## 4. Typography

- **Headlines:** a precise geometric/grotesque sans (e.g., a variable font family supporting display weights) — technical, confident.
- **Body:** highly legible UI sans.
- **Mono (optional, sparing):** for data, model numbers, code-adjacent labels (engineering feel).
- Fluid type scale (clamp), base 16px, generous line-height for body.
- Respect user font preferences; self-host fonts for performance.

---

## 5. Layout & Grid

- 12-column fluid grid, max-width container (~1200px).
- Generous whitespace; content density scaled to enterprise audience.
- Consistent section rhythm (vertical spacing tokens).
- Cards with hairline borders (1px, subtle) rather than heavy shadows.

---

## 6. Components & States

- Buttons (primary / secondary / ghost), links, chips, status badges (Available / In Development / Coming Soon).
- Form controls with focus-visible rings, error/success states, ARIA labels.
- Cards, accordions, tabs, tables (for data/module lists).
- Header/footer, breadcrumbs, pagination, skip-link.

---

## 7. Imagery & Icons

- **Icon system:** consistent 24px stroke set (or inline SVG), engineering-styled, no cheap clipart. All icons accessible (aria-hidden, title where needed).
- **Data visualization:** inline SVG/CSS animations for digital thread, data flow, topology. Respect `prefers-reduced-motion`.
- **Photography:** minimal, technical, licensed, optimized (AVIF/WebP), with `loading="lazy"` and dimensions to prevent CLS.

---

## 8. Logo System

- Provided assets: `LastLogo.png` (2170×725) and `logo 1.png` (1536×1024) in the repo.
- Deliver light/dark and responsive variants (horizontal + compact/icon) for header, footer, favicon.
- Confirm trademark-safe usage and obtain clean SVG/master files (see Decisions Required).

---

## 9. Motion & Interaction

- Motion used only to support storytelling: hero entrance, digital-thread data flow, section reveals (subtle fade/rise).
- Default `prefers-reduced-motion: reduce` → disable non-essential animation.
- No infinite marquees or distracting auto-play.

---

## 10. Accessibility Baseline

- WCAG 2.1 AA: contrast, focus management, keyboard navigation, form labels, alt text.
- Semantic HTML, ARIA where needed, skip-to-content, descriptive link text.
- Reduced-motion support, screen-reader-friendly headings.
