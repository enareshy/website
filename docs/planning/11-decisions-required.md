# Hiindsight 2.0 — Missing Information / Decisions Required

**Date:** August 17, 2026
**Status:** Awaiting client input

---

Before implementation, the following decisions and missing facts must be resolved. **We will not fabricate any of these.**

## 1. Brand & Identity

1. **Logo master files:** Provide clean SVG (vector) master files for light, dark, and icon/mono versions. Currently only PNGs exist (`LastLogo.png` 2170×725, `logo 1.png` 1536×1024).
2. **Company name lockup:** "Hiindsight" vs "Hiindsight Technology Pvt Ltd" vs "Hiindsight Technologies" — which to use in the logo and legal footer.
3. **Tagline:** Keep "Partners in your Digital Transformation journey!" or adopt the new positioning line ("Transform Engineering. Transform Manufacturing. Build the Intelligent Enterprise.")?

## 2. Company Facts

4. **Leadership & Story:** Names, titles, bios, photos for Leadership and Story pages (none verified).
5. **Vision/Mission:** Current site states vision "Digitize Enterprises." Is a mission statement available?
6. **Company founding year, headcount, office locations** beyond Hyderabad, Telangana 500048.
7. **Partnerships page details:** Siemens, Dassault, Aras, SAP — level/type of partnership, certifications, badges (do not claim partner levels that are not verified).

## 3. Customer & Experience Claims

8. **Engagement references:** Confirm which client logos (GE, BAE Systems, TAI, AVIC, Alenia, DRDO, Volvo, Magna, Nissan, Rolls-Royce, etc.) may be published on the new site, and how (logo wall vs case-study narrative).
9. **Case studies:** For each case study, confirm Challenge → Transformation → Solution → Technology → Implementation → Business Impact details and whether metrics may be published. Any statistics are client-verified only.

## 4. Products

10. **Product statuses:** Confirm exactly which offerings are **Available**, **In Development**, and **Coming Soon**.
    - Available (likely): Hiindsight University (training platform, teachee-based), Digital Twin solution family (Product/Production/Performance/Maintenance).
    - Roadmap candidates (In Development / Coming Soon only — never presented as Available): BOM Management, Variant Management, Engineering Intelligence, Manufacturing Intelligence, AI Copilot, Digital Thread, Analytics.
11. **Product naming:** Confirm final product names and any access/trial URLs.

## 5. Content Types

12. **Insights:** Confirm which types to launch with (Articles, Case Studies, Whitepapers, Videos, Podcasts, Webinars, Research) and provide initial content. Is Hiindsight University / TechPLM YouTube content to be embedded as "Videos"?
13. **Careers:** Confirm whether to launch the Careers page with real roles or as a "coming soon" structure.

## 6. Services & Scope Details

14. **MBSE & GenAI scope:** Existing site does not verify MBSE or GenAI services. Confirm actual capability level before publishing these pages (or publish with "capability under development" framing).
15. **Intelligent Automation scope:** Confirm scope (RPA, workflow automation, ML pipelines) beyond current published automation services.

## 7. Technical

16. **CMS choice:** Headless CMS (e.g., Sanity / Contentful / Directus) — select and provide project/API keys via env. Until then, local content fallback is used.
17. **Contact form backend:** Preferred notification channel (email provider, CRM/webhook). Provide API keys (env-gated).
18. **Analytics:** GA4 measurement ID and Search Console verification method.
19. **Deployment target:** Vercel (recommended) or alternative hosting.

## 8. Design & SEO

20. **Color/type preference:** Approve the proposed design direction, or provide brand guidelines if any exist.
21. **Primary SEO markets:** Confirm target geographies/languages for SEO (current: India HQ; A&D/automotive/energy customers globally).

---

## Defaults (if no response)

If no input is provided, the site will ship with:
- Positioning + tagline from the brief (Transform Engineering. Transform Manufacturing. Build the Intelligent Enterprise.)
- Products section showing **Available** for verified offerings only; roadmap items clearly labeled **In Development / Coming Soon**.
- Engagement references displayed as a discreet, client-confirmed-subset logo wall (or omitted if unconfirmed).
- Local content fallback + env-gated CMS/GA4/email integrations (documented in `.env.example`).
- Case-study cards using the reusable structure with **unverified metrics removed**.
