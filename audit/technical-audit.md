# Technical Audit — fs-expeditedllc.com

**Site:** https://www.fs-expeditedllc.com
**Repo:** `fs-expeditedllc-astro1` (Astro 7.2.9, static output, Tailwind 4, `@astrojs/sitemap` 3.4.x)
**Host:** Vercel (`vercel.json` present; no `netlify.toml`, `_redirects`, or `wrangler.toml`)
**Audit date:** 2026-10-22 → 2026-10-23
**Evidence labels:** ✅ Verified (seen in code / built output / live HTTP) · 🟡 Hypothesis (needs confirmation) · ❌ Unknown (needs client)

**Crawl:** `audit/crawl.csv` — all 43 sitemap URLs, fetched live at ≤1.6 req/s, 2026-10-23.

---

## Severity / effort legend

| | |
|---|---|
| **S1** | Blocks indexing or misdirects ranking signals — fix first |
| **S2** | Dilutes relevance, wastes crawl budget, or weakens entity signals |
| **S3** | Polish: snippets, CTR, accessibility, consistency |
| **E-S/M/L** | Effort: small (one file, no design) / medium (several files or content) / large (content production or decisions) |

---

## Top 10 quick wins (ranked by impact × effort)

| # | Finding | Where | Effort |
|---|---|---|---|
| 1 | Meta-refresh + `noindex` stubs stand in for 301s | `astro.config.mjs` `redirects` → 18 entries; verified live on 3 URLs | E-M |
| 2 | Old blog slug 404s with no redirect | `/blog/why-fs-hauling-reliable-dump-truck-services-shelby-nc` (live **404**) | E-S |
| 3 | Sitemap emits trailing-slash URLs; canonicals are no-slash | `dist/sitemap-0.xml` (43/43 mismatch) vs `src/components/SEO.astro` | E-S |
| 4 | Sitemap has no `<lastmod>` | `dist/sitemap-0.xml` — 0 `<lastmod>` nodes | E-S |
| 5 | Duplicate slug page + duplicate titles | `/services/emergency-expedited/emergency-expedited/` (same title as its parent) | E-M |
| 6 | Duplicate title: category vs detail page | `/services/dump-trucks-hauling-services/` and `.../dump-truck-hauling/` both "Dump Truck Services \| F&S Expedited LLC" | E-S |
| 7 | Three pages have **no H1** | `/gallery/`, `/process/`, `/reviews/` (live-verified, 0 H1s) | E-S |
| 8 | Schema makes unverified claims + internal conflict (1-hour vs 100-mile) | `src/lib/schemas.ts` lines 9, 43, 29, 50, 61–62 | E-S |
| 9 | Four category meta descriptions are just the title (45–60 chars) | `/services/{dump-trucks-hauling-services,emergency-expedited,material-delivery,site-services}` | E-S |
| 10 | Six money-page titles exceed 60–83 chars (truncation in SERPs) | all four `/service-area/*` pages, `/service-area/`, homepage | E-S |

---

## S1 — Fix first

### 1. Redirects are HTML meta-refresh stubs, not server 301s ✅ Verified

- **What:** Astro's static `redirects` emit an HTML page containing `<meta http-equiv="refresh">` + `<meta name="robots" content="noindex">` instead of an HTTP 301.
- **Where:** `astro.config.mjs` lines 7–26 (**18** legacy redirects). Live proof:
  `GET /services/gravel-sand-delivery` → **HTTP 200**, body `<!doctype html><title>Redirecting to: …<meta http-equiv="refresh" …><meta name="robots" content="noindex">`.
  Same verified live for `/services/soil-delivery` and `/why-us/promos`.
  Built copy: `dist/services/gravel-sand-delivery/index.html`.
- **Why it matters:** Googlebot sees a 200 + `noindex`, not a redirect. Signals do not consolidate, the URL occupies crawl budget, and these are the GSC "Excluded by noindex" and part of the "Discovered – currently not indexed" buckets.
- **Fix:** move every legacy path into `vercel.json` → `redirects[]` with `"permanent": true` (Vercel answers 308). Keep Astro `redirects` only for `astro dev` parity, or delete once Vercel covers them. Full target list in `audit/redirect-map.csv`.
- **Verify:** `curl -sI https://www.fs-expeditedllc.com/services/gravel-sand-delivery` returns `308` (or `301`) with a `location` header; `curl -sI` on all 19 paths; GSC → *Validate Fix* after deploy.

### 2. Old blog slug 404s ✅ Verified

- **What:** the pre-rename URL has no redirect anywhere.
- **Where:** `/blog/why-fs-hauling-reliable-dump-truck-services-shelby-nc` → live **404**. `git log -S "why-fs-hauling"` returns nothing (the repo is a port of the old Vite SPA — history does not contain it). Not in `dist/blog/`.
- **Why it matters:** this is GSC's *"Not found (404): 1"*, and any equity from the old post is dropped.
- **Fix:** add to `vercel.json`: old slug → `/blog/why-fs-expedited-reliable-dump-truck-services-shelby-nc` (`permanent: true`).
- **Verify:** `curl -sI` shows 308 → new slug; GSC coverage 404 count drops after recrawl.

### 3. Sitemap URLs contradict canonicals on 43/43 URLs ✅ Verified

- **What:** the sitemap lists trailing-slash URLs; every page declares a **no-slash** canonical.
- **Where:** `dist/sitemap-0.xml` (all 43 `<loc>` end in `/`) vs live canonical, e.g. `/about/` → `<link rel="canonical" href="https://www.fs-expeditedllc.com/about">`. Full mismatch list in `crawl.csv` (`canonical` column).
- **Live host behavior (✅ verified):** `/about` **and** `/about/` both return **200** — the host does **not** consolidate the slash. So the sitemap is actively feeding Google 43 non-canonical duplicates.
- **Why it matters:** contradicts the canonical signal, splits crawl/index capacity, and matches the jump in "Discovered – currently not indexed" (🟡 as cause — see `indexing-diagnosis.md`).
- **Fix (no-slash decision, confirmed by client):**
  1. `astro.config.mjs` → `trailingSlash: 'never'`.
  2. Sitemap: strip trailing slashes from `<loc>` (either `build.format: 'file'` if it yields no-slash locs, or a small transform over the sitemap output — verify which with a local build).
  3. Add `vercel.json` trailing-slash normalization **or** accept canonical-only consolidation; prefer forcing `/x/ → /x` with a 308 so the variants die at the host too.
- **Verify:** local build → `grep -c '<loc>[^<]*/</loc>' dist/sitemap-0.xml` = 0; live `curl -sI …/about/` returns 308 → `/about` (if host rule added).

### 4. Host/protocol variants ✅ Verified — no action needed

`http://www.` → **308** https://www; `https://fs-` → **301** `https://www.`; `http://fs-` → 308 → 301 chain landing on www. These explain GSC's *"Page with redirect: 6"* — expected and harmless. **Do not "fix"** (the prompt's own assessment confirmed).

### 5. Meta descriptions missing or degenerate on 5 money pages ✅ Verified

| URL | Description | Length |
|---|---|---|
| `/services/dump-trucks-hauling-services/` | "Dump Truck Services \| F&S Expedited LLC" | 60 (it's the title) |
| `/services/emergency-expedited/` | "Emergency Expedited \| F&S Expedited LLC" | 45 (title) |
| `/services/material-delivery/` | "Material Delivery \| F&S Expedited LLC" | 54 (title) |
| `/services/site-services/` | "Site Services \| F&S Expedited LLC" | 50 (title) |
| `/privacy-policy/` | present but 107 chars | (borderline) |

- **Fix:** write real 140–160 char descriptions per category page in `src/data/services.ts`.
- **Verify:** rebuild → check `<meta name="description">` per page.

---

## S2 — Dilution / crawl budget

### 6. Duplicate slug structure in emergency category ✅ Verified

- **What:** `/services/emergency-expedited/emergency-expedited/` — category slug repeated as the detail slug, producing a page whose title is byte-identical to its parent ("Emergency Expedited \| F&S Expedited LLC").
- **Where:** `src/pages/services/[category]/[service].astro` + `src/data/services.ts` (service slug equals category slug); present in `dist/`, in the sitemap, live at 200.
- **Why it matters:** two URLs, one title, near-identical content → canonical/index confusion; it is a plausible member of GSC's *Crawled – currently not indexed* bucket.
- **Fix:** point the service at a distinct path (e.g. `/services/emergency-expedited/24-7-emergency-hauling/`) **or** merge it into the category page and 301 the detail URL. Decision needed → `docs/removal-candidates.md`.
- **Verify:** no duplicate titles in `crawl.csv`; sitemap contains no doubled segment.

### 7. Duplicate titles: category vs detail ✅ Verified

- `/services/dump-trucks-hauling-services/` and `/services/dump-trucks-hauling-services/dump-truck-hauling/` share the exact title **"Dump Truck Services | F&S Expedited LLC"** (both live 200, both in sitemap).
- **Fix:** differentiate — category = "Dump Truck Hauling Services in NC \| F&S Expedited"; detail = "Dump Truck Hauling & Delivery \| F&S Expedited LLC, Shelby NC". Same pattern check for every category/detail pair.
- **Verify:** `crawl.csv` titles unique across all 43 rows.

### 8. Thin pages (word counts from live crawl) ✅ Verified

Distribution: **9 pages <400 words**, 25 pages 400–600, 8 pages 600–900, 1 page 900+.

Thinnest (rendered text incl. nav/footer):

| Words | URL |
|---|---|
| 249 | `/gallery/` |
| 313 | `/contact/` |
| 316 | `/promos/` |
| 327 | `/services/dump-trucks-hauling-services/` |
| 330 | `/services/emergency-expedited/` |
| 338 | `/process/` |
| 357 | `/services/material-delivery/` |
| 393 | `/` (homepage) |

- **Note:** nav + footer are included, so real body content is ~40–50% lower on the worst pages. The four service **category** pages are effectively index-only pages.
- **Why it matters:** Google's *Crawled – currently not indexed* bucket is exactly this profile — crawled, judged insufficient, dropped.
- **Fix:** expand the four category pages with unique, locally true content (materials, use cases, service specifics) — Phase 3 Tier 1. No new thin pages created.

### 9. Under-linked money pages ✅ Verified

Internal in-links (from the crawl):

- `/services/material-delivery/sand-delivery/` → **3**
- `/services/material-delivery/soil-delivery/` → **3**
- `/services/site-services/{land-grading,retaining-walls,underground-utilities}/` → **7** each
- Most blog posts → **1–4** (three posts have exactly **1** in-link: they're only reachable from `/blog/`)

- **Why it matters:** pages with 1 inbound link are effectively orphan-adjacent; crawl discovery is slow and PageRank flows weakly — consistent with the *Discovered – not indexed* bucket.
- **Fix:** link sand/soil delivery from the material-delivery hub + Shelby page + relevant posts; add "related services" blocks. Content links come with Phase 3.
- **Verify:** re-run the crawler → in-links ≥ 5 for every money page.

### 10. Missing H1 on three pages ✅ Verified

`/gallery/`, `/process/`, `/reviews/` each render **0 `<h1>`** (live HTML).

- **Fix:** add a single descriptive H1 per page (e.g. "Recent Hauling & Site Work — Shelby NC" for gallery).
- **Verify:** rebuild → exactly one H1 per page in `crawl.csv`.

### 11. Sitemap hygiene ✅ Verified

- 43 URLs, **0 `<lastmod>`**.
- Contains the duplicate-slug URL `/services/emergency-expedited/emergency-expedited/`.
- Correctly **excludes** all 18 stub/redirect paths (the `filter` in `astro.config.mjs` works) — ✅ no stub URLs in sitemap.
- Excludes `/service-area/charlotte-nc` (does not exist — see ❌ below).
- `robots.txt` ✅ correct: `Allow: /`, sitemap declared as `/sitemap-index.xml`; `/sitemap.xml` → `/sitemap-index.xml` **308** via `vercel.json`.
- **Fix:** add `lastmod` (from content dates), drop the duplicate-slug page after the merge decision.

---

## S3 — Polish

### 12. Title tags over 60 chars ✅ Verified

`/service-area/asheville-nc/` **83**, `/service-area/` **75**, `/service-area/forest-city-nc/` **74**, `/service-area/gastonia-nc/` **72**, homepage **72**, `/service-area/shelby-nc/` **65** + 5 blog titles at 61–62. Google truncates ~60.
- **Fix:** lead with the keyword, move "F&S Expedited LLC" to the front only where brand helps, cut trailing clauses.

### 13. `og:image` = 180×180 apple-touch-icon ✅ Verified

`src/components/SEO.astro` line 13: `image = "/apple-touch-icon.png"`.
- **Fix:** create a 1200×630 OG image in `public/`, set it as the default; keep per-page images where they exist.

### 14. No analytics installed ✅ Verified

No `gtag`/GTM/`_paq` anywhere in `src/` (only the word "analytics" inside `privacy-policy.astro`).
- **Fix (Phase 5):** GA4 or GTM snippet in `src/layouts/Layout.astro` + `dataLayer` events for phone clicks, form submit, directions. Requires client GA4 ID → `docs/client-questions.md`.

### 15. Images ✅ Verified — no action

**0 images missing `alt` across all 43 pages.** The single `alt=""` is intentional (gallery modal container, `src/components/Gallery.astro:69`). Nothing to fix.

---

## Schema / entity findings

### 16. Schema present but makes unverified claims ✅ Verified (claims), ❌ Unknown (truth)

JSON-LD on all 43 pages: `LocalBusiness` + `Organization` (43), `BreadcrumbList` (40), `Service` (13), `BlogPosting` (10), `FAQPage` (4) — from `src/lib/schemas.ts`.

Problems:

| Claim | Location | Status |
|---|---|---|
| `"Licensed & insured"` | `schemas.ts` lines 9, 43 | ❌ Unknown → client |
| `"…and 50+ cities"` | lines 9, 43 | ❌ Unknown + contradicts code (4 city pages exist) |
| `"Serving Charlotte, Gastonia, Hickory, Spartanburg, Greenville"` | lines 9, 43 | ❌ Unknown — Hickory/Spartanburg/Greenville appear nowhere else |
| `openingHours "Mo-Fr 06:00-18:00"` | lines 29, 60 | ❌ Unknown → client |
| `priceRange "$$"`, `paymentAccepted` | lines 61–62 | ❌ Unknown → client |
| `geo` lat/long 35.2924,-81.5356 | lines 28, 53 | 🟡 City-centroid, not a confirmed business location |
| `address: "Shelby, NC 28152"` (no street) | `site.ts:11` + `schemas.ts` | ❌ Unknown → client (NAP) |
| **`areaServed` = 160,934 m GeoCircle (100 mi)** vs description `"within 1-hour of Shelby"` | `schemas.ts` 30–34, 55–59 vs 9, 43 | ❌ **Internal conflict** — the two are in the *same node* |
| Homepage has **no BreadcrumbList**; FAQPage on only 4 pages | `crawl.csv` | S3 |

- **Why it matters:** schema contradicting visible content (50+ cities, 1-hour vs 100-mile) is exactly what rich-result validators flag and what erodes entity trust for GEO.
- **Fix:** strip every unconfirmed field now; keep only name/URL/telephone/city-level address the site already displays; resolve service area to one honest statement after client answers.
- **Verify:** Rich Results Test per template; schema fields ⊆ visible page content.

---

## ❌ Unknown — needs client (see `docs/client-questions.md`)

1. Real business **street address** (for NAP + GBP).
2. **Hours** of operation (schema claims Mo–Fr 06:00–18:00).
3. **Licensed & insured** — true or not?
4. Service radius: **100 miles** (schema, `site.ts`) vs **1 hour** (homepage copy, schema description) — which is honest?
5. Do they actually serve **Hickory, Spartanburg, Greenville, Charlotte**? (schema says yes; only 4 city pages exist)
6. Real **prices/ranges** for any cost content.
7. **GA4 / GTM** ID for measurement.
8. Which of the two personal phone numbers is the primary public number; is a business email preferred over `stormicpalmer@gmail.com`?

## 🟡 Hypotheses still to confirm

1. **Cause of the 42 "Discovered – currently not indexed"** — attributed partly to sitemap/canonical mismatch + low authority; per-URL evidence in `indexing-diagnosis.md`, confirmed after fixes via GSC validation.
2. Whether `build.format: 'file'` alone yields no-slash `<loc>` values with `trailingSlash: 'never'` — needs one local build to confirm (no build run in this audit).
3. Solid Rock Trucking's true service location (Currituck/Garner signals) — competitor research, Phase 2.
4. Whether Vercel's dashboard (not `vercel.json`) already forces www/https at the domain level — 301s exist, but which layer issues them is unconfirmed.
