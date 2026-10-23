# Phase 1 — Pull Request Summary

**Branch:** `seo/technical-fixes` (base: `main`)
**Scope:** Technical SEO fixes (Phase 1). No content deletions. No builds run in this audit — verify locally with `npm run build`.

## Commits

| # | Commit | Files touched | What changed | How to verify |
|---|---|---|---|---|
| 1 | `3dfbb2c` Real 308 redirects | `vercel.json` (new), `audit/redirect-map.csv` (new), `audit/technical-audit.md`, `audit/indexing-diagnosis.md` | 18 legacy Astro paths + old blog 404 slug now return `308` (Vercel `permanent: true`) instead of `200 + meta-refresh + noindex` stubs | `curl -sI https://www.fs-expeditedllc.com/blog/why-fs-hauling-reliable-dump-truck-services-shelby-nc` → `308` → `-fs-expedited-` URL; same for `/services/gravel-sand-delivery`, `/services/soil-delivery`, `/why-us/promos` |
| 2 | `4199001` No-slash URL format | `astro.config.mjs`, `vercel.json` | `trailingSlash: 'ignore'` → `'never'` (Astro sitemap emits no-slash `<loc>`); `"trailingSlash": false` in vercel.json (host 308s `/x/` → `/x`) | `npm run build` → `grep -c '<loc>[^<]*/</loc>' dist/sitemap-0.xml` = `1` (homepage only); live `curl -sI …/about/` → `308` → `/about` |
| 3 | `7b9d790` Remove Astro redirect stubs | `astro.config.mjs` | Dropped the static `redirects` block (no more `200 + noindex` files in `dist/`). `legacyPaths[]` keeps them out of the sitemap. | `npm run build` → `ls dist/services/gravel-sand-delivery` → "No such file or directory" |
| 4 | `2a4b931` Real lastmod | `astro.config.mjs` | `serialize()` sets per-URL `lastmod`: blog posts from `posts.ts` date; others from last git commit touching their source files; omitted (not guessed) when unknown | `npm run build` → `<lastmod>` present on all 43 URLs in `dist/sitemap-0.xml` |
| 5 | `a55e264` On-page titles/H1/meta descriptions | `src/components/Gallery.astro`, `src/components/Testimonials.astro`, `src/pages/process.astro`, `src/data/services.ts` | Added H1 to `/gallery/`, `/process/`, `/reviews/` (each had 0); differentiated duplicate titles (dump-truck detail → "Dump Truck Hauling"; emergency detail → "Same-Day Expedited Dispatch"); replaced 4 degenerate category meta descriptions (45–60 chars) with 145–155 char descriptions | Re-run `audit/crawl.py` → 0 pages with `h1_count != 1`; 0 duplicate titles; all 4 category descriptions ≥ 140 chars |
| 6 | `0f98524` Schema honesty pass | `src/lib/schemas.ts` | Removed unverified claims ("Licensed & insured", "50+ cities", Hickory/Spartanburg/Greenville, "within 1-hour", `openingHours`, `priceRange`, `paymentAccepted`, `currenciesAccepted`); replaced 100-mile `GeoCircle` with `Place "Shelby, NC and Cleveland County"` (resolves the 100-mile vs 1-hour conflict) | Rich Results Test per template; every schema field ⊆ visible page content |
| 7 | `084363c` Deliverables | `docs/removal-candidates.md` (new), `docs/client-questions.md` (new) | Every thin/duplicate page listed with recommendation; 33 `[CLIENT TO PROVIDE]` items grouped by urgency | Review both files |

## Files touched (summary)

- `vercel.json` — 18 legacy redirects + old blog slug + `trailingSlash: false`
- `astro.config.mjs` — `trailingSlash: 'never'`, `legacyPaths[]`, `serialize()` with lastmod, removed `redirects` block
- `src/lib/schemas.ts` — honest schema fields
- `src/data/services.ts` — differentiated service titles + real category descriptions
- `src/components/Gallery.astro`, `src/components/Testimonials.astro`, `src/pages/process.astro` — H1 fixes
- `audit/redirect-map.csv`, `audit/technical-audit.md`, `audit/indexing-diagnosis.md` — corrected counts
- `docs/removal-candidates.md`, `docs/client-questions.md` — new deliverables

## How to verify end-to-end

```bash
npm run build
# 1. No redirect stubs left in dist
test ! -e dist/services/gravel-sand-delivery/index.html && echo "OK: no stubs"
# 2. Sitemap: no-slash (except homepage) + lastmod present
grep -o '<loc>[^<]*</loc>' dist/sitemap-0.xml | grep -c '/$'   # expect 1 (homepage)
grep -c '<lastmod>' dist/sitemap-0.xml                             # expect 43
# 3. No duplicate titles / no missing H1
# (re-run audit/crawl.py after deploying, or inspect dist HTML)
```

After deploy:

```bash
curl -sI https://www.fs-expeditedllc.com/about/        # expect 308 -> /about
curl -sI https://www.fs-expeditedllc.com/services/gravel-sand-delivery  # expect 308
curl -sI https://www.fs-expeditedllc.com/blog/why-fs-hauling-reliable-dump-truck-services-shelby-nc  # expect 308
```

GSC: resubmit `sitemap-index.xml`, request indexing for `/`, `/service-area/shelby-nc`, `/services/material-delivery/gravel-delivery`, `/services/dump-trucks-hauling-services/dump-truck-hauling`. Validate Fix only for the 404 bucket. Re-pull coverage at +14 and +30 days.

## What is NOT in this PR (explicitly deferred)

- **Duplicate-slug page** `/services/emergency-expedited/emergency-expedited/` — listed in `docs/removal-candidates.md` with options A (consolidate into parent) / B (distinct slug). Awaiting decision.
- **`/service-area/charlotte-nc`** — not building (Tier 4 later).
- **OG image** (still defaulting to 180×180 apple-touch-icon) — separate quick win, not in this PR.
- **Analytics** — nothing installed; GA4/GTM ID needed from client.
- **Content rewrite** (Phase 3) — no pages rewritten; only titles/descriptions fixed.
- **Phases 2, 4, 5** — not started (local SEO/GBP, GEO, measurement).

## What needs client input

See `docs/client-questions.md` (33 items). The ones blocking further work: street address, hours, licensed/insured status, service radius (100-mile vs 1-hour), which markets are real, fleet/load capacities, real photos/quantities, GA4 ID.
