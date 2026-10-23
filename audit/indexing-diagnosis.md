# Indexing Diagnosis — GSC Coverage → Root Cause → Fix

**Source:** Google Search Console coverage, as of **2026-10-15** (client-provided), cross-referenced with the live crawl of **2026-10-23** (`audit/crawl.csv`).
**Snapshot:** 58 "not indexed" vs 26 indexed. "Not indexed" jumped 27 → 51 on **2026-09-04**.

**Labels:** ✅ Verified · 🟡 Hypothesis · ❌ Unknown

---

## Summary table

| GSC bucket | Count | Root cause | Evidence | Fix (Phase) |
|---|---|---|---|---|
| Discovered – currently not indexed | 42 | Sitemap publishes 43 non-canonical (trailing-slash) URLs; host serves **both** variants 200 instead of consolidating → Google defers crawling duplicates. Compounded by low domain authority. | ✅ 43/43 sitemap-vs-canonical mismatch in `crawl.csv`; ✅ live `/about` and `/about/` both 200 | **P1** — no-slash sitemap + host-level slash normalization |
| Crawled – currently not indexed | 8 | Google crawled and *chose* not to index: thin/generic content + duplicate-slug page | ✅ word counts (`crawl.csv`), ✅ duplicate titles | **P1** (dup) + **P3** (content) |
| Page with redirect | 6 | Host/protocol variants (http→https, non-www→www) — **expected, harmless** | ✅ live 308/301 matrix | none |
| Not found (404) | 1 | Old blog slug has no redirect | ✅ live 404 | **P1** |
| Excluded by noindex | 1 | Meta-refresh stub pages carry `noindex` | ✅ live + `dist/` | **P1** |

---

## Bucket-by-bucket

### 1. "Discovered – currently not indexed": 42

**🟡 Primary hypothesis (high confidence): sitemap/canonical mismatch stalls crawling.**

Evidence:
- ✅ The sitemap lists **43** URLs, **all with a trailing slash**; every page's canonical is **no-slash** (`crawl.csv`: 43 canonical mismatches, 43 sitemap rows).
- ✅ The host does **not** consolidate: `GET /about` → 200 **and** `GET /about/` → 200. No redirect, no 404 — two live URLs for one page, which only the canonical tag distinguishes.
- ✅ 43 sitemap URLs ≈ 42 "discovered not indexed" (near 1:1).
- ✅ Timeline: the jump 27 → 51 on 2026-09-04 is consistent with Google ingesting a sitemap submission of duplicate-form URLs around that date.

**🟡 Contributing hypothesis:** low domain authority (third-party tools show ~3 ranked keywords; GSC average positions 14–50 with thin content) — Google allocates a small crawl budget and deprioritizes pages it has not yet decided are worth indexing.

**Fix:**
1. Emit **no-slash** URLs in the sitemap (client decision: no-slash — confirmed).
2. Add host-level normalization (`vercel.json` redirect `/x/` → `/x`, 308) so only one variant ever resolves.
3. Keep canonicals as they are (already correct).

**Re-validation plan:** deploy → GSC → *Sitemaps* → resubmit `/sitemap-index.xml` → request indexing for the top 10 money pages manually → wait ~2 weeks → expect "Discovered, currently not indexed" to convert to "Indexed" or "Crawled". Do **not** click *Validate Fix* for this bucket (it is not an error bucket — it resolves by recrawl).

---

### 2. "Crawled – currently not indexed": 8

GSC examples (client-provided) mapped to verified page state:

| GSC example | Verified state (2026-10-23) | Diagnosis |
|---|---|---|
| `/services/site-services/site-prep` | ✅ live 200, 438 words, title "Site Prep \| F&S…" | Thin category-style page, generic content |
| `/services/site-services/retaining-walls` | ✅ live 200, 461 words | Thin; service relevance unproven for this business |
| `/services/gravel-sand-delivery` | ✅ live **200 meta-refresh + noindex** | Not a crawl failure — a broken redirect (P1 fix) |
| `/blog/dump-trucks-expedited-local-hauling-shelby-charlotte-nc` | ✅ 662 words incl. nav; generic claims, no specifics | Content quality/depth |
| `/blog/why-manufacturers-choose-fs-expedited-trucking-emergency-freight` | ✅ 459 words, off-topic (freight ≠ dump truck) | Topical mismatch → removal candidate |
| `/blog/why-fs-hauling-reliable-dump-truck-services-shelby-nc` | ✅ live **404** (old slug) | Bucket drift — it's a 404 now; needs 301 |
| `/blog/why-topsoil-secret-healthier-greener-yard` | ✅ 499 words, generic gardening content | Thin/off-intent → removal candidate |

**🟡 Hypothesis:** Google crawled these, found thin/duplicate/off-topic content, and chose not to index — the standard outcome for pages under ~500 words of unique, specific content. Note GSC's *validation* for this bucket reported "Failed", which simply means the pages remain crawled-but-unindexed; it is not a technical error.

**Fix:** P1 (kill the stub + add the 301 + merge the duplicate slug) and **P3 content rebuild** (expand or merge/redirect each page). Re-check in GSC 2–3 weeks after content redeploys.

---

### 3. "Page with redirect": 6 ✅ Verified harmless

Live redirect matrix (2026-10-23):

| Request | Status | Lands on |
|---|---|---|
| `http://www.fs-expeditedllc.com/` | 308 | `https://www.` |
| `http://fs-expeditedllc.com/` | 308 | `https://fs-…` → (301) → `https://www.` |
| `https://fs-expeditedllc.com/` | 301 | `https://www.` |
| `https://fs-expeditedllc.com/about` | 301 | `https://www./about` |

≈ 4 host/protocol variants × home + a couple of deep links ≈ 6 URLs. **Expected and correct** — matches the prompt's assessment ("The three host/protocol home-page variants are expected and harmless"). **No fix.** This bucket clears on its own as Google drops the variants.

**❌ Unknown:** whether the redirect is issued by Vercel's domain layer or a config rule — irrelevant to SEO, but noted for Phase 1 so we don't duplicate an existing rule.

---

### 4. "Not found (404)": 1 ✅ Verified

`/blog/why-fs-hauling-reliable-dump-truck-services-shelby-nc` → live **404**.
- Old slug (pre-"fs-expedited" rename). `git log -S "why-fs-hauling"` → nothing; repo is a port of the old Vite SPA, so no redirect was ever carried over.
- Replacement exists: `/blog/why-fs-expedited-reliable-dump-truck-services-shelby-nc` ✅ live 200 (452 words, **1** internal in-link).

**Fix (P1):** `vercel.json` 308 old → new. **Verify:** `curl -sI` + GSC coverage 404 → "Redirect" after recrawl.

---

### 5. "Excluded by noindex": 1 ✅ Verified

The stub pages embed `<meta name="robots" content="noindex">` (verified live on `/services/gravel-sand-delivery`, `/services/soil-delivery`, `/why-us/promos`).

**Why only 1 counted:** Google classifies by *reason it last saw*; stubs that were crawled as redirects land in different buckets depending on which signal Google acted on first. The class has ≥3 member URLs in the repo (19 stubs total), so this count fluctuates.

**Fix (P1):** convert all 19 stubs to real 308s in `vercel.json` → the noindex source disappears entirely.

---

### 6. The 2026-09-04 spike (27 → 51)

**🟡 Hypothesis:** Google re-ingested the sitemap (submitted or refreshed near that date) and discovered the 43 slash-form URLs it had not previously queued — each counts as "Discovered, currently not indexed" until crawled. Consistent with the near 1:1 match (43 sitemap URLs / 42 bucket count) and with the host serving both variants at 200.

**Alternative (less likely):** a deployment around that date changed URL forms. 🟡 — check Vercel deployment history around 2026-09-04 (❌ not verifiable from the repo alone; `git log` shows no URL-structure commits near that date).

**How to discriminate:** after the sitemap/slash fix deploys, if the bucket drains within ~2 weeks → sitemap theory confirmed. If it persists → investigate deployment history.

---

## Re-validation sequence (Phase 5 timing)

1. Deploy Phase 1 fixes (no builds run in this audit — client-triggered).
2. `curl -sI` each of the 19 redirect paths → confirm 301/308.
3. GSC → *Sitemaps* → resubmit `sitemap-index.xml`; confirm the listed URL count matches 43 and shows "Success".
4. GSC → *URL Inspection* → request indexing manually for: `/`, `/service-area/shelby-nc`, `/services/material-delivery/gravel-delivery`, `/services/dump-trucks-hauling-services/dump-truck-hauling`, `/blog/why-fs-expedited-reliable-dump-truck-services-shelby-nc`.
5. *Validate Fix* only for the 404 (after the 301 is live) — not for "Discovered/Crawled", which are not error buckets.
6. Re-pull coverage at +14 days and +30 days; target: "Discovered not indexed" < 10, "Crawled not indexed" < 3, 404 = 0, noindex = 0.
