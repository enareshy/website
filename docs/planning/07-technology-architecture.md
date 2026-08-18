# Hiindsight 2.0 — Technology Architecture

**Date:** August 17, 2026
**Status:** Draft for approval

---

## 1. Recommended Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | SSG/ISR/SSR flexibility, SEO, performance |
| Language | **TypeScript** | Type safety across content models and components |
| Styling | **Tailwind CSS v4** (or equivalent design tokens) | Utility-driven, consistent design system |
| Rendering | SSG for content pages + ISR for insights | Fast, SEO-friendly, updatable |
| CMS | **Headless CMS** (e.g., Sanity / Contentful / Directus) — content-modeled | Reusable structures, non-engineer editing |
| Forms | Server Actions / API route with validation + spam protection | Secure, no exposed logic |
| Analytics | GA4 + Search Console ready (gtag snippet, env-gated) | Measurement, consent-ready |

*Alternatives considered:* Plain Next+MDX (lighter, but less editor-friendly); static site only (insufficient for insights + careers). Headless CMS chosen to satisfy "do not hard-code content unnecessarily."

---

## 2. Project Structure (Next.js App Router)

```
/app
  /(site)
    /page.tsx                    # Home
    /transform/...
    /technology/...
    /solutions/...
    /products/...
    /industries/...
    /insights/...
    /about/...
    /careers/...
    /contact/...
  /api
    /contact/route.ts            # Secure contact submission
  /sitemap.ts                    # Generated sitemap
  /robots.ts                     # Robots
  /not-found.tsx
/components
  /ui/*                          # Design-system primitives (Button, Card, Badge...)
  /sections/*                    # Page sections (Hero, DigitalThread, ...)
  /layout/*                      # Header, Footer, Breadcrumbs, ...
  /viz/*                         # Digital thread / data-flow visualizations
/lib
  /cms/*                         # CMS client + content fetching
  /seo/*                         # SEO metadata, schema builders
  /validators/*                  # Form validation
/content                         # Fallback/local content when CMS not connected
/public
```

---

## 3. Content & CMS Strategy

- **Headless CMS** with content models for:
  Pages, Industries, Solutions, Technologies, Products, Case Studies, Articles, Videos, Podcasts, Team, Careers.
- **Fallback:** local TypeScript/JSON content sources (`/content`) so the site is fully functional before CMS credentials are provided. CMS becomes the single source when connected.
- **Environment variables** for CMS tokens, form provider keys, GA4 ID — never hard-coded. Use `.env.example` placeholders.

---

## 4. SEO Implementation

- Metadata API (Next.js `generateMetadata`) per route.
- **Schema.org** JSON-LD: Organization, WebSite, BreadcrumbList, Article, Product (only for confirmed products), FAQ (optional).
- **Canonical URLs** on all pages; trailing-slash normalization with 301s.
- **sitemap.xml** (dynamic), **robots.txt** (dynamic).
- **Open Graph** + Twitter cards per page (hero/og images auto-generated or per-entry).
- Optimized images (AVIF/WebP, width/height set, lazy loading, priority for LCP).
- Core Web Vitals: fast LCP (optimized hero), no layout shift (sized media), minimal CLS, sensible INP.
- **GA4 & Search Console readiness:** gtag snippet behind env flag + consent placeholder.

---

## 5. Lead Generation & Contact Form

**Fields:** Name, Company, Business Email, Role, Industry, Challenge, Phone (optional).

- Server-side validation (zod or similar) — email format, required fields.
- Honeypot field + basic rate limiting + recaptcha/turnstile option (env-gated) for spam protection.
- Secure transport (HTTPS), no sensitive data stored client-side.
- Submission → email/notification service (e.g., Resend/SendGrid or CMS webhook) via env keys.
- Success/failure UX with accessible status messaging.

---

## 6. Analytics-Ready Architecture

- Single analytics module initialized only when GA4 ID present in env.
- Event helpers for CTA clicks, form submissions, downloads.
- Consent-ready (respects privacy requirements; placeholder for cookie banner).

---

## 7. Future-Ready Extensibility (not built now)

| Future capability | Architecture hook |
|---|---|
| Customer portal / product login | Auth-ready route structure, env-scoped |
| SaaS products / trials | Product schema includes status + access URL fields |
| AI assistants | `/api` route namespace, streaming-ready |
| Knowledge portal | Reuses insights/content models |
| Customer dashboards | API + dashboard route scaffolding |
| Partner ecosystem | Partnerships content model + page |

---

## 8. Security Baseline

- Env-gated secrets (no commits), `.gitignore` for `.env*`.
- Form validation server-side; sanitize inputs; no SQL.
- CSP headers, security headers (Next.js config), HTTPS enforced.
- Dependencies pinned/locked; periodic updates.

---

## 9. Deployment

- **Vercel** (recommended) or static/Node host.
- Preview deployments per branch; production on merge.
- Environment variables per environment.
- Post-deploy: sitemap verification, Search Console, GA4.
