# Local SEO & Google Business Profile Plan — F&S Expedited LLC

**Scope:** Phase 2 of `Fs-Latest-SEO-Content-Strategy`. Priority geography: Shelby first, then Cleveland County, then adjacent, then Charlotte/Asheville.

**Canonical NAP (proposed — see `docs/client-questions.md` A1–A3 before publishing):**
- Name: `F&S Expedited LLC` (never "F&S Hauling")
- Address: `Shelby, NC 28152` (street address unknown — A1)
- Phone (primary): **[CLIENT TO PROVIDE]** (currently two personal numbers: Joe 865-364-9011, Luke 704-751-8141)
- Email: `stormicpalmer@gmail.com` (flagged — recommend a domain email)
- Website: `https://www.fs-expeditedllc.com`
- Hours: **[CLIENT TO PROVIDE]** (schema currently claims Mo–Fr 06:00–18:00 — unverified, removed from schema in Phase 1)

---

## 1. NAP consistency audit (current state)

| Source | Name | Phone | Address | Email | Status |
|---|---|---|---|---|---|
| Site `src/data/site.ts` | F&S Expedited LLC | Joe 865-364-9011, Luke 704-751-8141 | "Shelby, NC 28152" (city only) | stormicpalmer@gmail.com | ✅ name; ⚠️ 2 phones, no street, Gmail |
| Schema (`src/lib/schemas.ts`) | F&S Expedited LLC | both numbers | city-level | stormicpalmer@gmail.com | ✅ fixed in Phase 1 (removed unverified claims) |
| Facebook | (need to check) | (need to check) | (need to check) | — | 🟡 verify |
| GBP | unknown if exists | — | — | — | ❌ unknown (client question E27) |

**Action:** Do not create/claim any citation until the canonical NAP above is confirmed by the client (A1–A3). Inconsistent NAP across directories is worse than no citations.

## 2. Service-area conflict resolution

- **Conflict:** homepage copy + schema said "within 1 hour of Shelby"; `site.ts` and old schema said "100-mile radius". Same node, contradictory.
- **Phase 1 fix:** removed the 100-mile GeoCircle and the "within 1-hour" claim from schema; description now says "serving Shelby, NC and Cleveland County".
- **Resolved statement (pending client confirmation, question B9):** "F&S Expedited LLC serves Shelby, NC and Cleveland County, plus surrounding areas within a [X]-minute drive. Call to confirm your location." — honest, avoids both over-claiming.
- **areaServed in schema:** `Place "Shelby, NC and Cleveland County"` (verified towns only).

## 3. Google Business Profile checklist

**Status:** ❌ Unknown whether a GBP exists (client question E27). First action: search Google for "F&S Expedited LLC Shelby NC" and check for an unclaimed listing.

### If no listing exists — create one
- Primary category: **Trucking service** (or "Dump truck service" if available in GBP category list)
- Secondary categories: **Freight forwarding service**, **Delivery service**, **Excavating contractor** (only if those services are real)
- Business name: `F&S Expedited LLC` (exact, no keyword stuffing)
- Address: per A1 (or service-area business with no public address if home-based)
- Service area: list Cleveland County towns + adjacent counties (per confirmed list, B10–B12)
- Phone: primary number from A2
- Website: `https://www.fs-expeditedllc.com`
- Hours: per A8 (do not guess)
- Services list: dump truck hauling, gravel delivery, sand delivery, soil/fill dirt delivery, aggregate transport, debris removal, land clearing, grading, site prep, retaining walls, underground utilities, emergency/expedited dispatch
- Description (750 chars max): use the schema description + service area + differentiator (same-day dispatch)
- Photos: logo, cover, truck fleet, jobsite shots, team — [CLIENT TO PROVIDE] real photos
- Q&A: seed 5–8 real questions (pricing factors, service area, materials, dispatch speed, insurance) with honest answers
- Review link: request from Google, use in review-request process (below)

### Benchmark vs. Solid Rock Trucking LLC (read-only research)
- Solid Rock: #1 local pack for "dump truck hauling", #2 for "gravel delivery" in Shelby; 24-hour listing; praised for fast delivery; only 44 organic keywords → wins via GBP, not site
- **Lesson:** GBP completeness + reviews beat organic keyword count locally. Our site's content work (Phase 3) supports but does not replace GBP.
- 🟡 Hypothesis: Solid Rock may actually operate in eastern NC (Currituck/Garner keywords) — confirm before treating as a direct Shelby rival.

## 4. Review strategy

- **On-site:** real reviews only. Currently 1 real review on homepage (commit ecfcf42 removed 3 placeholders). `Testimonials` component renders a Senja iframe. Mark up with `Review`/`AggregateRating` schema **only** if policy-compliant (reviews must be genuine, not incentivized).
- **Off-site (GBP):** request reviews from real customers after job completion. Process:
  1. Job complete → send review link via SMS/email within 24h
  2. Follow up once at +7 days
  3. Never offer incentives (violates GBP policy)
  4. Respond to every review (positive and negative) within 48h
- **Target:** 10+ GBP reviews in 90 days (realistic for a small hauling operator with repeat contractor clients).
- **Do not:** fabricate reviews, use "review gating", or display fake testimonials.

## 5. Citations plan (consistent NAP required first)

Priority order (consistent NAP across all):

1. **Google Business Profile** (highest impact)
2. **Bing Places for Business**
3. **Apple Business Connect**
4. **Facebook business page** (already exists — verify NAP)
5. **Yelp** (aggregators own "gravel delivery" SERPs here)
6. **Angi / HomeAdvisor**
7. **Thumbtack**
8. **BBB** (if accredited — client decision)
9. **Shelby/Cleveland County Chamber of Commerce**
10. **Industry directories** (trucking/hauling directories, construction supplier directories)
11. **Data aggregators** (Neustar/Localeze, Foursquare, Data Axle) for downstream consistency

**Rule:** Complete GBP + Bing + Apple first. Only then add directory citations, one batch at a time, verifying NAP each time.

## 6. On-site NAP display

- Homepage footer: add full NAP (name, address-or-city, phone, email) in visible text + schema.
- Contact page: already exists; ensure it shows the canonical NAP and a map embed (only if address is real).
- Schema: city-level address retained (no street known). Update when A1 is answered.

## 7. Measurement of local SEO

- KPIs: map-pack appearances for "dump truck hauling Shelby NC" and "gravel delivery Shelby NC", calls from GBP, direction requests, review count/rating.
- Track via GBP Insights + GA4 (phone click events once installed — Phase 5).
- Re-audit citations quarterly for NAP drift.

---

**Next:** Phase 3 — content strategy (Shelby & Cleveland County first). Depends on client answers A9–A12 and B10–B12 for town-page specifics.
