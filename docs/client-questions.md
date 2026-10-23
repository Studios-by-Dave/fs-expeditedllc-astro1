# Client Questions — [CLIENT TO PROVIDE]

Every fact below is unknown or unverified. **Do not publish, schema-markup, or claim any of these until the client confirms.** Items are grouped by urgency. Answers feed `docs/removal-candidates.md`, `src/lib/schemas.ts`, `src/data/site.ts`, and Phase 3 content.

## A. Business identity & NAP (blocks Local SEO / GBP)

1. **Street address** — Is there a physical office or yard address to publish? (Currently only "Shelby, NC 28152".) Needed for NAP, GBP, schema, directories.
2. **Primary public phone number** — Which of the two personal numbers (Joe 865-364-9011, Luke 704-751-8141) should be the main business line? Or a new business number?
3. **Business email** — Is `stormicpalmer@gmail.com` acceptable as the public email, or should a domain email (e.g. info@fs-expeditedllc.com) be set up?
4. **Business name exact form** — "F&S Expedited LLC" confirmed. Any DBA / alternate spelling used on invoices or GBP?
5. **Years in business / founding date** — never stated. Needed for "established" claims and GBP.
6. **License numbers / DOT / MC** — is the business licensed/insured as the site claims ("Licensed & insured")? Which licenses and numbers? (Schema currently says this — must verify before re-publishing.)
7. **Insurance details** — carrier, coverage type, certificate available for citation?
8. **Hours of operation** — schema currently claims Mo–Fr 06:00–18:00. Confirm actual hours, weekend availability, 24/7 dispatch?

## B. Service area (blocks schema + content)

9. **Service radius** — homepage says "within 1 hour of Shelby"; site.ts/schema say "100-mile radius". Which is honest? Or define precisely (e.g. "Shelby + Cleveland County + 30-minute drive").
10. **Do you actually serve Charlotte, Gastonia, Hickory, Spartanburg, Greenville?** Schema and copy claim these; only 4 city pages exist. Which are real, active markets?
11. **Which Cleveland County towns do you actively serve?** (Kings Mountain, Boiling Springs, Lawndale, Grover, Fallston, Earl, Waco, Mooresboro, Casar, Polkville, Belwood, Cherryville, Lincolnton, Forest City, Gastonia?) Needed for town pages and `areaServed`.
12. **Do you serve Rutherford County (Forest City) and Gaston County regularly?** (Pages exist; confirm.)

## C. Services & pricing (blocks Tier 2 content)

13. **Fleet size and truck types** — single axle / tri-axle / quad-axle? How many of each? Needed for the "how many yards in a dump truck" calculator page.
14. **Typical load capacities** — yards/tons per truck type per material (stone, fill dirt, topsoil, sand).
15. **Real price ranges or cost drivers** — any numbers the client will stand behind? (Rule: no invented prices.) If none, content explains cost drivers only.
16. **Material types actually hauled** — gravel (#57, crusher run, pea gravel), sand, topsoil, fill dirt, aggregate, asphalt millings, recycled concrete, debris? Confirm list.
17. **Is freight/manufacturing hauling a real service?** (Blog post "Why Manufacturers Choose F&S…" exists; if not, it's a removal candidate.)
18. **Emergency/24-7 availability** — is dispatch truly 24/7? (Benefits claim "24/7 Available".)
19. **Payment methods accepted** — schema claimed Cash/Check/Credit Card. Confirm.
20. **Price range tier** — schema claimed "$$". Confirm or remove.

## D. Content & proof (blocks Tier 1–3 pages)

21. **Real project photos** with quantities, dates, locations, materials (for case-study pages and gallery captions). [CLIENT TO PROVIDE]
22. **Real customer reviews** with permission to display + schema markup. (Currently 1 real review on homepage; 3 placeholder reviews were removed in commit ecfcf42.)
23. **Named author** for blog posts — who writes? (Currently "F&S Expedited LLC" as author.) Needed for E-E-A-T.
24. **Gallery captions** — project type, location, quantity, material for each photo.
25. **Quarry/supplier relationships** — which quarries do you source from? (Used in content for "local specifics".)

## E. Measurement & tracking (Phase 5)

26. **GA4 / GTM property ID** — nothing is installed today.
27. **Google Business Profile** — does one exist? Access/ownership? (Needed for the GBP checklist.)
28. **Preferred call-tracking / form tool** (if any).

## F. Decisions needed from the client (not facts)

29. **Service radius statement** — 100-mile vs 1-hour (see A/B above).
30. **Charlotte page** — decided: NOT building now (Tier 4 later).
31. **Blog cleanup** — approved approach: list in removal-candidates.md, no deletions without sign-off.
32. **Duplicate-slug page** (`/services/emergency-expedited/emergency-expedited/`) — Option A (merge into parent) vs Option B (distinct slug). Recommended: A.
33. **Crawler policy for AI bots** (GPTBot, ClaudeBot, etc.) — allow (current robots.txt allows all) or block? Document the decision.
44. **Promos page** — is there a real current promo? If not, remove from nav.
