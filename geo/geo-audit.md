# GEO / AI Visibility Audit — F&S Expedited LLC

**Scope:** Phase 4 of `Fs-Latest-SEO-Content-Strategy`. Generative Engine Optimization (GEO/AEO) for dump-truck hauling, material delivery, and site services in Shelby, NC / Cleveland County.

## 1. Current AI-visibility posture

- **No `llms.txt`** exists. Adding one is low effort; do not claim it is a ranking factor.
- **robots.txt** allows all crawlers (`User-agent: * / Allow: /`); no AI/search crawler is blocked. Decision documented below.
- **Answer-first formatting:** most pages lead with hero marketing copy, not a direct answer. Key money pages need a 40–60 word direct answer at the top.
- **Entity consistency:** name/address/phone/description/services/area are consistent between site and schema (after Phase 1 schema honesty pass). GBP and directories are unverified (Phase 2).
- **Third-party sources AI is likely to cite** for "gravel delivery Shelby NC": Hello Gravel, Gravel Shop, Gravel Monkey, American Rock Supply, Gravel Buddy, Yelp, Facebook, and the aggregators' own pages. Presence on these is a Phase 2 citation task, not a site task.

## 2. Answer-first formatting plan

For each Tier 1 money page and Tier 2 answer page, add at the very top (before marketing copy):

> **Direct answer (40–60 words):** e.g. "F&S Expedited LLC provides dump truck hauling and material delivery in Shelby, NC and Cleveland County. We haul gravel, sand, soil, and debris with same-day and next-day dispatch. Call Joe or Luke at [phone] for a free quote."

Followed by: supporting detail, tables of materials/loads, visible FAQs (FAQPage schema only where FAQs are visible and real).

## 3. Entity consistency checklist

| Signal | Site | Schema | GBP | Directories |
|---|---|---|---|---|
| Name: F&S Expedited LLC | ✅ | ✅ | 🟡 verify | 🟡 verify |
| Address | city-only (Shelby, NC 28152) | city-level | ❓ | ❓ |
| Phone | 2 personal numbers | both | ❓ | ❓ |
| Email | Gmail | Gmail | ❓ | ❓ |
| Description | homepage + service pages | honest (Phase 1) | ❓ | ❓ |
| Services list | 4 categories + services | Service schema per page | ❓ | ❓ |
| Area served | Shelby + Cleveland County | Place "Shelby, NC and Cleveland County" | ❓ | ❓ |

**Action:** GBP and directory columns cannot be verified until the client answers `docs/client-questions.md` A1–A3 and E27. Do not mark them complete.

## 4. Crawler policy (robots.txt decision)

**Current robots.txt:** `User-agent: * / Allow: /` plus `Disallow: /admin/` and `Disallow: /*.json$`. Sitemap declared.

**Decision:** keep allowing all major crawlers unless the client chooses otherwise. Document the decision here; revisit if the client requests blocking.

| Crawler | Allowed? | Reason |
|---|---|---|
| Googlebot | ✅ | Search indexing |
| Bingbot | ✅ | Search indexing |
| OAI-SearchBot | ✅ | ChatGPT search citations |
| GPTBot | ✅ | OpenAI training (client may want to block — ask) |
| ClaudeBot | ✅ | Anthropic training/citations (client may want to block — ask) |
| PerplexityBot | ✅ | Perplexity citations |
| Google-Extended | ✅ | Gemini training (client may want to block — ask) |

**Action:** confirm with client whether they want to opt out of AI training crawlers. Default = allow all (current state). Document final decision in `docs/client-questions.md` (item 33).

## 5. llms.txt

- **Recommendation:** add a minimal `public/llms.txt` only if low effort. Content: business name, one-line description, services list, service area, contact, key page URLs.
- **Do not** claim it is a ranking factor. It is a convenience file for LLM consumers.
- **Effort:** S. **Priority:** low (after Tier 1 money pages are live).

## 6. Third-party presence plan (AI citation sources)

AI answers for "gravel delivery Shelby NC" are likely to cite aggregators, directories, and Facebook. Presence plan (ties to Phase 2 citations):

1. Complete GBP + Bing + Apple (highest trust)
2. List on Yelp, Angi, HomeAdvisor, Thumbtack
3. List on Hello Gravel / Gravel Shop / Gravel Monkey / American Rock Supply / Gravel Buddy if they accept supplier listings
4. Chamber of Commerce + BBB (if accredited)
5. Facebook business page with consistent NAP + service descriptions
6. Consistent name/address/phone/email across all of the above

## 7. Prompt test set

See `geo/prompt-tracking.csv` (≥ 25 prompts). Columns: prompt, engine, date, client mentioned (Y/N), competitors mentioned, cited sources. Run what is possible manually; mark the rest `[MANUAL TEST NEEDED]`.

## 8. GEO KPIs (ties to Phase 5)

- Mention rate: % of test prompts where F&S Expedited LLC is named
- Citation rate: % of test prompts where fs-expeditedllc.com is cited as a source
- Competitor mention rate vs. Solid Rock Trucking, F&S Hauling, aggregators
- Track monthly; report in the 30/60/90 roadmap
