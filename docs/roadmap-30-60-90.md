# 30/60/90-Day Roadmap & Measurement Plan — F&S Expedited LLC

## KPIs (baseline from GSC, last 3 months to 2026-10-22)

| KPI | Baseline | Target (90 days) |
|---|---|---|
| Indexed pages | 26 | ≥ 40 |
| "Discovered – currently not indexed" | 42 | < 10 |
| "Crawled – currently not indexed" | 8 | < 3 |
| 404s | 1 | 0 |
| Noindex stubs | ≥ 3 | 0 |
| Total impressions | ~2,027 | ≥ 3,000 |
| Total clicks | 70 | ≥ 120 |
| CTR | ~3.5% | ≥ 5% |
| Shelby page position | 34.3 | ≤ 15 |
| Shelby page impressions | 442 | ≥ 700 |
| Map-pack appearances (Shelby "dump truck hauling") | unknown | ≥ 3 / week |
| GBP reviews | 0–1 (unknown) | ≥ 10 |
| GEO mention rate (25-prompt set) | 0% (untested) | ≥ 20% |

## Measurement setup (Phase 5)

- **GA4 / GTM:** nothing is installed today (verified in Phase 0). Recommendation: install GA4 via GTM in `src/layouts/Layout.astro`; events for phone clicks (`tel:`), form submits, directions clicks, CTA clicks. Requires client GA4 ID (`docs/client-questions.md` E26).
- **GSC:** re-pull coverage at +14 and +30 days. Validate Fix only for the 404 bucket (it is an error bucket); "Discovered/Crawled" resolve by recrawl.
- **GBP Insights:** track calls, direction requests, photo views, review count.
- **GEO tracking:** run the 25-prompt set monthly; record in `geo/prompt-tracking.csv`.

## Day 0–30 (Phase 1 deploy + local SEO kickoff)

- Deploy Phase 1 (merge `seo/technical-fixes` → `main` on Vercel) — done
- Verify: `curl -sI` each of the 18 redirect paths + `/about/` → expect 308
- GSC: resubmit `sitemap-index.xml`; request indexing for `/`, `/service-area/shelby-nc`, `/services/material-delivery/gravel-delivery`, `/services/dump-trucks-hauling-services/dump-truck-hauling`
- Complete GBP audit (does a listing exist? claim or create) — client action (E27)
- Fix NAP: confirm primary phone, address, email (A1–A3) before any citations
- Add canonical NAP to footer + contact page
- Answer `docs/client-questions.md` items A/B (identity, service area) — blocks everything downstream
- Begin Tier 1 content: rebuild Shelby hub page + homepage hero repositioning

## Day 30–60 (content + GBP)

- Complete GBP profile (categories, services, photos, hours, Q&A) — client provides photos/hours
- Launch review-request process; target 5 reviews
- Publish Tier 1: Shelby hub, 2 Cleveland County town pages (Kings Mountain, Boiling Springs)
- Publish Tier 2: "how many yards in a dump truck" + "tri-axle vs quad-axle" (the high-volume, linkable pages)
- Add answer-first formatting to all Tier 1 pages
- Citations batch 1: Bing Places, Apple Business Connect, Facebook (verify NAP)
- Re-pull GSC coverage; expect "Discovered not indexed" to start draining

## Day 60–90 (expand + measure)

- Publish Tier 1: 2 more town pages (Lawndale, Cherryville), material-delivery hub expansion
- Publish Tier 2: driveway gravel guide, cost-factors page, same-day dispatch page
- Citations batch 2: Yelp, Angi, Thumbtack, Chamber of Commerce
- Add `llms.txt` (low effort)
- First GEO prompt-tracking run (fill `geo/prompt-tracking.csv`)
- Re-pull GSC coverage + impressions; compare to KPI targets
- Decide on Tier 4 expansion (Charlotte/Gastonia/Forest City/Asheville) based on indexing + impressions
- 90-day review: what worked, what didn't, next 90 plan

## Re-validation plan (GSC)

1. Deploy Phase 1 fixes (done)
2. `curl -sI` each redirect path → confirm 301/308
3. GSC → Sitemaps → resubmit `sitemap-index.xml`; confirm URL count matches 43 and shows "Success"
4. GSC → URL Inspection → request indexing for top 5 money pages
5. Validate Fix only for the 404 bucket
6. Re-pull coverage at +14 and +30 days; target "Discovered not indexed" < 10, "Crawled not indexed" < 3, 404 = 0, noindex = 0

## What blocks progress

- Client answers to `docs/client-questions.md` (especially A1–A3 NAP, B9–B12 service area, E26 GA4, E27 GBP)
- Real photos, quantities, dates, locations for case-study content
- A decision on the duplicate-slug page (done: Option A) and on AI-crawler policy (item 33)
- No builds or pushes without explicit client approval (per engagement rules)
