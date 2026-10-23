# Removal / Merge Candidates

**Rule:** Nothing below is deleted yet. Each entry is a recommendation for review (client + SEO lead) before any removal. Nothing is removed without this file being updated and the change approved.

**Labels:** Recommendation = `Rewrite` (expand with specifics), `Merge` (fold into another page, then 301), `Redirect` (301 to canonical, remove), `Keep` (no action), `Defer` (decide later).

---

## Duplicate / cannibalizing structures (Phase 1)

### `/services/emergency-expedited/emergency-expedited/` — Recommendation: **Merge + Redirect**
- **What:** category slug repeated as the detail slug. Page title is byte-identical to its parent (`Emergency Expedited | F&S Expedited LLC`). Both URLs live (200) and both are in the sitemap.
- **Content:** ~446 words — unique longDescription, features, benefits. NOT thin; losing it wastes real content.
- **Why it matters:** duplicate title + near-duplicate intent (category vs. its own flagship service). Plausible member of GSC "Crawled – currently not indexed".
- **Recommended action (Option A):** merge this content into the `/services/emergency-expedited/` category page (which is only 330 words and needs it), then 301 `/services/emergency-expedited/emergency-expedited/` → `/services/emergency-expedited/`. Net: 0 content lost, one canonical URL, one title.
- **Option B (alternative):** keep it as a distinct page with a new slug (e.g. `/services/emergency-expedited/same-day-dispatch`) and a distinct title. More URLs, more work, no content loss.
- **Status:** Awaiting client/SEO lead decision. Not implemented.

### `/services/dump-trucks-hauling-services/` vs `/services/dump-trucks-hauling-services/dump-truck-hauling/` — Recommendation: **Differentiate (done in Commit 5)**
- Both shared the title "Dump Truck Services | F&S Expedited LLC". Commit 5 changed the detail page title to "Dump Truck Hauling | F&S Expedited LLC". No removal; URLs retained.
- **Status:** Title collision fixed. Content overlap remains a Tier 1 content task (Phase 3).

---

## Blog posts — 10 posts, all 0 clicks in GSC (last 3 months)

| # | Slug | Words | Recommendation | Reason |
|---|---|---|---|---|
| 1 | `dump-trucks-expedited-local-hauling-shelby-charlotte-nc` | 662 | **Rewrite** | Generic claims ("licensed and insured", "50+ cities"), no specifics, no author beyond org name, no real project. Highest impression blog post (1 click from 70). Good keyword target (Shelby + Charlotte hauling) — rebuild with specifics. |
| 2 | `why-manufacturers-choose-fs-expedited-trucking-emergency-freight` | 459 | **Redirect → rewrite or remove** | Off-topic for a dump-truck/material-delivery business (freight/manufacturing). Zero clicks. If removed, 301 to the most relevant service or hub page; list in client-questions whether freight is a real service. |
| 3 | `expedited-dump-truck-services-prevent-costly-project-delays-north-carolina` | 567 | **Rewrite** | Generic; no real project or figure. Targets "expedited" keyword but SERP is freight-dominated. Reposition toward dump-truck/same-day material delivery. |
| 4 | `why-fs-expedited-reliable-dump-truck-services-shelby-nc` | 452 | **Merge into Tier 1 Shelby page** | "Why we're the best" generic. Its (single) in-link and any equity should fold into the rebuilt Shelby money page. 301 old slug (already 404 in production — fix in Phase 1). |
| 5 | `material-delivery-guide-shelby-nc-construction-projects` | 537 | **Rewrite / expand** | On-topic. Expand with material types, quantities, cost drivers. |
| 6 | `why-north-carolina-calls-us-when-the-job-cant-wait` | 416 | **Merge** | Generic expedited messaging; fold into the "same-day dispatch" answer page (Tier 2). |
| 7 | `why-topsoil-secret-healthier-greener-yard` | 499 | **Rewrite or Redirect** | Generic gardening content, off-intent for a hauling company. Either rebuild around topsoil delivery in Cleveland County or 301 to the topsoil service page. |
| 8 | `soil-delivery-vs-gravel-delivery-which-material-does-your-project-need` | 1141 | **Keep (expand)** | Longest post, on-topic, comparison format. Add tables, real project examples, internal links. Best candidate to earn impressions. |
| 9 | `best-dump-truck-services-asheville-nc` | 511 | **Defer (Tier 4)** | Expansion market page. Keep but don't invest until Shelby/Cleveland County pages index. |
| 10 | `dump-truck-hauling-services-forest-city-nc` | 518 | **Defer (Tier 4)** | Same as above. |

## Thin service category pages (Phase 1 / Phase 3)

| URL | Words | Recommendation |
|---|---|---|
| `/services/dump-trucks-hauling-services/` | 327 | **Expand** (Tier 1 money page) — currently an index page, not a service page. |
| `/services/emergency-expedited/` | 330 | **Expand or merge** with the duplicate-slug detail page (see above). |
| `/services/material-delivery/` | 357 | **Expand** (Tier 1 money page) — add materials, quantities, delivery process. |
| `/services/site-services/` | 438 | **Expand** (Tier 1 money page) — add service list with specifics. |

## Low-value / orphaned pages

| URL | Words | In-links | Recommendation |
|---|---|---|---|
| `/gallery/` | 249 | 43 | **Expand or keep as-is** — H1 now added (Commit 5). Add captions with project type/location/quantities [CLIENT TO PROVIDE]. |
| `/promos/` | 316 | 43 | **Verify content** — "Specials & Promos" page. If no real promos, remove from nav and redirect to /contact or /about. |
| `/process/` | 338 | 43 | **Expand** — H1 now added (Commit 5). Add specifics (dispatch time, equipment, etc.). |
| `/reviews/` | 408 | 43 | **Expand** — H1 now added (Commit 5). Real reviews only; mark up only if policy-compliant. |

## Rules applied

- Nothing is deleted here. Every `Redirect`/`Merge` item requires an explicit approval step and a 301 in `vercel.json` + `audit/redirect-map.csv` update before execution.
- `docs/client-questions.md` must list any fact needed to make a page specific (photos, quantities, dates, locations, prices).
- Every new/rewritten page needs unique, locally true content — no swapped-city templates.
