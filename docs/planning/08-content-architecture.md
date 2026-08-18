# Hiindsight 2.0 — Content Architecture

**Date:** August 17, 2026
**Status:** Draft for approval

---

## 1. Principles

- **Reusable content structures** across Pages, Industries, Solutions, Technologies, Products, Case Studies, Articles, Videos, Podcasts, Team, Careers.
- **Content-model driven** (headless CMS) with local fallback. Nothing hard-coded beyond system text.
- **Verify, never invent.** All factual claims trace to the Discovery Report. Placeholder/optional content is clearly marked.
- **DRY content** — one source of truth per topic; pages reference shared entries.

---

## 2. Core Content Types

### 2.1 Page (generic)
`slug · title · meta (title, description, canonical) · ogImage · hero (headline, support, cta) · sections[] · updatedAt`

### 2.2 Industry
`slug · name · summary · challenges[] · opportunities[] · relatedSolutions[] · relatedTechnologies[] · relatedCaseStudies[] · cta`

### 2.3 Solution
`slug · name · summary · challenge · approach · outcomes[] · technologies[] · relatedIndustries[] · relatedProducts[] · relatedCaseStudies[]`

### 2.4 Technology
`slug · name · category · summary · applications[] · ecosystemVendors[] · relatedSolutions[]`

### 2.5 Product
`slug · name · status (available | in-development | coming-soon) · summary · modules[] · roadmapNote · cta · screenshots[] (optional)`

### 2.6 Case Study
`slug · title · client (verified) · industry · challenge · transformation · solution · technology · implementation · businessImpact[] · quotes (verified only) · publishedAt`

### 2.7 Article
`slug · title · excerpt · body (rich) · category (article) · tags · author · publishedAt · featured`

### 2.8 Video / Podcast / Webinar / Whitepaper / Research
`slug · title · description · mediaUrl/embed · duration · speaker · publishedAt`

### 2.9 Team Member
`slug · name · role · bio · photo · linkedIn`

### 2.10 Career / Job
`slug · title · location · department · employmentType · description · applyUrl`

---

## 3. Content Mapping (verified → new site)

| New site section | Verified source content |
|---|---|
| Transform / Digital Transformation | Existing Digital Transformation process (AS IS → TO BE → roadmap → POC) |
| Transform / Engineering Transformation | PDM/PLM, CAD toolchain, Requirements/Program/Change Mgmt |
| Transform / Manufacturing Transformation | MPP, Process Simulate, Plant Simulate, MES/MOM, line balancing, MTM |
| Transform / PLM Transformation | Teamcenter, Enovia, ARAS, web PLM |
| Transform / Digital Thread | Product → Process → Performance → Maintenance story |
| Transform / AI Transformation | ML/AI in MES/IIoT, predictive maintenance, dashboards |
| Transform / Digital Twin | Digital Twin Product/Production/Performance |
| Technology / PLM-PDM | Teamcenter, Enovia, ARAS, web PLM + CAD tools |
| Technology / MES-MOM | SIMATIC IT, Shop Floor Control, custom MES |
| Technology / ERP Integration | Integration & data migration services, SAP ecosystem |
| Technology / Digital Manufacturing | MPP, Process Simulate, Robotics, Plant Simulate, Delmia |
| Technology / Digital Twin | Product/Production/Performance twin |
| Technology / MBSE | (capability extension — confirm scope, no fabrication) |
| Technology / AI-GenAI & ML | ML solutions across operations; **confirm GenAI scope** |
| Technology / IoT | MindSphere, ThingWorx, custom IIoT |
| Technology / Intelligent Automation | Automation services + ML (confirm) |
| Technology / Enterprise Integration | Integration & data migration, consistent schemas |
| Solutions | Mapped from verified services + solution modules (BOM, PDM, Variant, ECM, Digital Manufacturing, Integration, AI for Eng/Mfg, Digital Thread) |
| Products | **Only confirmed items** (e.g., Hiindsight University); roadmap items clearly labeled In Development / Coming Soon |
| Industries | Automotive, A&D, Energy (incl. Oil & Gas heritage), Heavy Machinery, Industrial Manufacturing |
| Insights | Existing content rewritten into articles; case studies from verified engagements; training videos (TechPLM), webinars/podcasts/research = placeholder categories (confirm) |
| About | Vision (Digitize Enterprises), expert network model, experience, partnerships (Siemens, Dassault, Aras, SAP) |
| Careers | Placeholder structure (no verified open roles) |
| Contact | contactus@hiindsight.com, +91 8008345672, Hyderabad 500048 |

---

## 4. Writing Guidelines

- Executive-first headlines; technical detail one level down.
- 5-second positioning clarity on every hub page.
- AI framed as practical capability, not hype.
- Every claim either verified or explicitly marked as "confirm."
- Consistent terminology (PLM, MES, BOM, Digital Thread, Digital Twin).

---

## 5. Localization-Ready

- All strings centralized (i18n structure available) though first release ships English-only.
