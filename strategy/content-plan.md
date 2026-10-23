# Content Plan — F&S Expedited LLC

**Priority order (per strategy):** 1) Shelby, 2) rest of Cleveland County, 3) adjacent (Cherryville, Lincolnton, Forest City/Rutherford, Gastonia), 4) Charlotte & Asheville later.

**Rule (from prompt):** No thin or duplicate pages. Every new page needs unique, specific, locally true content. If it cannot be made specific, do not create it. No invented prices, reviews, addresses, certifications, years, fleet sizes, or customer names — use `[CLIENT TO PROVIDE: …]`.

**Source of truth for keywords:** Google Search Console (last 3 months to 2026-10-22): ~2,027 impressions, 70 clicks, 3.5% CTR, 98% US. Third-party tools show only 3 ranked keywords for the domain — the domain is effectively new/low-authority; GSC is the source of truth.

---

## 1. Strategic read of the GSC data

- **Homepage** earns 49 of 70 clicks (avg pos 8.2) — it is the de facto landing page and the only page winning anything.
- **Shelby page** gets the most impressions of any service-area page (442) but ranks #34.3 — high intent, weak page. This is the #1 rebuild target.
- **Asheville page** (7 clicks, 254 impr, pos 20.5) and **Forest City** (4 clicks, 191 impr, pos 16.8) outperform Shelby in position — a sign the Shelby page is the weakest, not the market.
- **Charlotte page** gets 75 impressions but is not even in the sitemap (404). Decision (confirmed): do not build it now; Tier 4.
- **Brand collision:** "f&s hauling" = 118 impressions (pos 17.3) — a different company (fandshauling.com, upstate SC) is stealing branded queries. Old blog slugs used "F&S Hauling" and must be cleaned (done in Phase 1 for the 404 slug; remaining slugs/titles to be rewritten in Tier 3).
- **Off-topic impressions** (Brunswick, Whiteville, Kernersville, Banner Elk) — investigate in crawl; likely broad-match noise from thin/generic pages. Not a content opportunity.
- **All blog posts: 0 clicks.** Thin, generic, or off-topic. Tier 3 cleanup.
- **"dirt hauling"** — the client ranked #1 organic in a Shelby-located SERP with title "Dump Truck Services Shelby NC". Proof the market is winnable with the right page.

## 2. Competitor read (summary — full detail in `competitor-analysis.md`)

- **F&S Hauling (fandshauling.com)** — the content benchmark: 458 ranked keywords, almost all blog-driven (asphalt driveway cost, "how many yards in a dump truck", tri-axle vs quad-axle, `/materials/…` pages). This is the content engine to beat. Brand collision makes it urgent.
- **Solid Rock Trucking LLC** — the map-pack benchmark: #1 local pack for "dump truck hauling" and #2 for "gravel delivery" in Shelby with only 44 organic keywords. Wins through GBP, not site. Lesson: GBP completeness + reviews beat organic keyword count locally.
- **Aggregators** (Hello Gravel, Gravel Shop, Gravel Monkey, Yelp, American Rock Supply) own organic results for "gravel delivery" in Shelby — third-party presence is required, not optional.

## 3. Tier 1 — Rebuild core money pages (Shelby & Cleveland County first)

Each needs unique, locally true content: roads, typical projects, supplier/quarry proximity, real jobs from the gallery. No swapped city names.

### Shelby hub (highest priority)
- **URL:** `/service-area/shelby-nc` (exists, 843 words, pos 34.3 — rebuild)
- **Targets:** dump truck hauling Shelby NC, gravel delivery Shelby NC, fill dirt Shelby NC, topsoil/soil Shelby NC, sand delivery Shelby NC, debris removal Shelby NC
- **Content:** hero with H1 "Dump Truck Hauling & Material Delivery in Shelby, NC"; NAP; services list with specifics; Cleveland County towns served; how dispatch works; gallery photos with real captions [CLIENT TO PROVIDE]; FAQ; CTA (phone click + form)
- **Also rebuild homepage** (393 words, pos 8.2) — reposition H1 from "Fast. Reliable. Expedited Trucking." (targets freight carriers) to "Dump Truck Hauling & Material Delivery in Shelby, NC"; keep "expedited/same-day" as the differentiator

### Cleveland County town pages (one at a time, only with unique local detail)
- Kings Mountain, Boiling Springs, Lawndale, Cherryville, Grover, Fallston
- Each: local roads, typical projects, quarry/supplier proximity, real jobs, distance from Shelby, service list. Do not publish until specific detail exists.

### Service pages (merge or expand — otherwise remove)
- `/services/dump-trucks-hauling-services/dump-truck-hauling` — expand with materials, truck types, load sizes, dispatch process
- `/services/material-delivery/gravel-delivery` — merge gravel/sand/soil into a clear material hub; per-material subpages
- `/services/material-delivery/sand-delivery`, `/services/material-delivery/soil-delivery`
- `/services/site-services/*` (site-prep, land-clearing, grading, debris-removal, retaining-walls, underground-utilities, aggregate-transport) — each needs specifics or merge
- `/services/emergency-expedited/` — now merged with the duplicate-slug page (Option A, commit 2eb9b77); expand with same-day dispatch specifics

## 4. Tier 2 — Answer content that beats F&S Hauling's content engine

These are the high-volume, linkable, AI-citable pages. Each: named author, date updated, specific data, clear CTA, internal links to relevant service + town pages, answer-first 40–60 word summary at top.

| Page | Target query (approx. volume) | Notes |
|---|---|---|
| "How many yards in a dump truck" | ~1,300–1,900/mo (F&S Hauling pos 27–39) | tri-axle vs quad-axle vs single axle; tons/yards per load for #57 stone, fill dirt, topsoil, sand; load calculator |
| "Tri-axle vs quad-axle dump truck" | high | which do you need, capacity, use cases |
| "How much gravel/fill dirt do I need?" | high | calculator + worked examples |
| "Gravel delivery cost factors in Cleveland County" | medium | no invented prices — cost drivers only (or real ranges from client) |
| "Driveway gravel guide for Shelby NC clay soil" | medium | locally grounded |
| "Same-day dump truck delivery: how dispatch works" | medium | ties to the expedited differentiator |
| Case-study pages from real jobs | low (high trust) | [CLIENT TO PROVIDE photos, quantities, dates, locations] |

## 5. Tier 3 — Cleanup (list before deleting)

See `docs/removal-candidates.md` for the full list with recommendations. Summary:
- Rewrite or merge all 10 blog posts (0 clicks). Priority: rewrite `dump-trucks-expedited-local-hauling-shelby-charlotte-nc` and `soil-delivery-vs-gravel-delivery-...` (longest, on-topic); redirect `why-manufacturers-choose-...` (off-topic) and `why-topsoil-secret-...` (generic).
- Fix remaining "F&S Hauling" slugs/titles (brand collision) — the `-fs-hauling-` slug 404 was fixed in Phase 1; audit all other slugs.
- Reposition hero and titles toward "dump truck hauling" / "material delivery"; keep "expedited / same-day" as differentiator.
- Every article: named author, date updated, specific data, CTA, internal links.

## 6. Tier 4 — Expansion (later)

Charlotte, Gastonia, Forest City/Rutherford, Asheville — **only after** Shelby/Cleveland County pages are indexed and earning impressions. (Charlotte page currently 404; decision: do not build now.)

## 7. Content rules (apply to every page)

- Answer-first: direct 40–60 word answer at the top, then supporting detail, tables, visible FAQs.
- One H1 per page, unique title ≤ 60 chars, meta description 140–160 chars.
- Named author + date updated on every article.
- Internal links to relevant service + town pages (target ≥ 5 in-links for every money page).
- No fabricated facts — use `[CLIENT TO PROVIDE: …]` and list in `docs/client-questions.md`.
- No thin/duplicate pages; no swapped-city templates.
- Real reviews only; schema markup only if policy-compliant.

## 8. Internal linking targets

- Every money page ≥ 5 internal in-links (currently sand/soil delivery have 3; 3 blog posts have 1).
- Footer and nav point only to final (no-slash, non-redirect) URLs (verified in Phase 1).
- Add "related services" blocks to service pages; "related areas" to town pages.
- Cross-link answer pages → relevant service + town pages.

## 9. Success criteria for Phase 3 (before Tier 4)

- Shelby page indexed and earning impressions (currently 442 impr, pos 34.3 → target top 10)
- At least 3 Cleveland County town pages indexed with unique content
- All 4 service category pages ≥ 600 words of specific content
- "how many yards in a dump truck" page published and earning impressions
- No new thin/duplicate pages created
