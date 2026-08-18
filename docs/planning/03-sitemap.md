# Hiindsight 2.0 — Sitemap & URL Architecture

**Date:** August 17, 2026
**Status:** Draft for approval

---

## 1. Top-Level Sitemap

```
/                          Home
/transform                 Transformation hub
/technology                Technology hub
/solutions                 Solutions hub
/products                  Products hub
/industries                Industries hub
/insights                  Insights hub
/about                     About hub
/careers                   Careers
/contact                   Contact
```

---

## 2. Transform (Transformation Services)

| URL | Page |
|---|---|
| /transform | Transformation overview |
| /transform/digital-transformation | Digital Transformation |
| /transform/engineering-transformation | Engineering Transformation |
| /transform/manufacturing-transformation | Manufacturing Transformation |
| /transform/plm-transformation | PLM Transformation |
| /transform/digital-thread | Digital Thread |
| /transform/ai-transformation | AI Transformation |
| /transform/digital-twin | Digital Twin |

---

## 3. Technology (Technology Capabilities)

| URL | Page |
|---|---|
| /technology | Technology overview |
| /technology/plm-pdm | PLM / PDM |
| /technology/mes-mom | MES / MOM |
| /technology/erp-integration | ERP Integration |
| /technology/digital-manufacturing | Digital Manufacturing |
| /technology/digital-twin | Digital Twin |
| /technology/mbse | MBSE (Model-Based Systems Engineering) |
| /technology/ai-genai | AI / GenAI |
| /technology/machine-learning | Machine Learning |
| /technology/iot | IoT / IIoT |
| /technology/intelligent-automation | Intelligent Automation |
| /technology/enterprise-integration | Enterprise Integration |

---

## 4. Solutions

| URL | Page |
|---|---|
| /solutions | Solutions overview |
| /solutions/bom-management | BOM Management |
| /solutions/product-data-management | Product Data Management |
| /solutions/variant-management | Variant Management |
| /solutions/engineering-change-management | Engineering Change Management |
| /solutions/digital-manufacturing | Digital Manufacturing |
| /solutions/engineering-automation | Engineering Automation |
| /solutions/enterprise-integration | Enterprise Integration |
| /solutions/ai-for-engineering | AI for Engineering |
| /solutions/ai-for-manufacturing | AI for Manufacturing |
| /solutions/digital-thread | Digital Thread |

---

## 5. Products

| URL | Page |
|---|---|
| /products | Product ecosystem overview (status filter: Available / In Development / Coming Soon) |

Product detail pages use slugged URLs, e.g. `/products/<product-slug>`. Only confirmed/approved products are published (see Decisions Required). No conceptual products are presented as existing.

---

## 6. Industries

| URL | Page |
|---|---|
| /industries | Industries overview |
| /industries/automotive | Automotive |
| /industries/aerospace-defence | Aerospace & Defence |
| /industries/energy | Energy |
| /industries/heavy-machinery | Heavy Machinery |
| /industries/industrial-manufacturing | Industrial Manufacturing |

---

## 7. Insights (Content Hub)

| URL | Page |
|---|---|
| /insights | Insights hub (all content) |
| /insights/articles | Articles |
| /insights/case-studies | Case Studies |
| /insights/whitepapers | Whitepapers |
| /insights/videos | Videos |
| /insights/podcasts | Podcasts |
| /insights/webinars | Webinars |
| /insights/research | Research |

Content detail pages: `/insights/<category>/<slug>` (e.g. `/insights/articles/digital-thread-plm-mes`).

---

## 8. About

| URL | Page |
|---|---|
| /about | Company overview |
| /about/vision-mission | Vision & Mission |
| /about/leadership | Leadership |
| /about/story | Story |
| /about/why-hiindsight | Why Hiindsight |
| /about/experience | Experience |
| /about/partnerships | Partnerships |

---

## 9. Utilities & Technical

| URL | Purpose |
|---|---|
| /careers | Careers |
| /contact | Contact |
| /legal/privacy | Privacy Policy |
| /legal/terms | Terms of Use |
| /legal/cookie-policy | Cookie Policy |
| /sitemap.xml | XML sitemap |
| /robots.txt | Robots directives |
| /404 | Custom 404 |

---

## 10. Key URL Conventions

- **Clean, lowercase, hyphenated slugs.**
- **Canonical URLs** on every page.
- **Trailing-slash normalized** redirects (301) for non-canonical variants.
- Case studies are surfaced both under /insights/case-studies and via homepage/industries links.
- All taxonomy (categories) are content-model driven — no hard-coded page lists.
