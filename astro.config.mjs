// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Legacy URL paths preserved from the original Vite SPA build.
// The server redirects for these live in `vercel.json` (real 308s).
// Astro's static `redirects` option is deliberately NOT used here: with
// `output: 'static'` it builds an HTML page containing
// <meta http-equiv="refresh"> + <meta name="robots" content="noindex">,
// which Google treats as a dead page instead of a redirect. This list only
// keeps these paths out of the sitemap.
const legacyPaths = [
  '/why-us',
  '/why-us/about',
  '/why-us/promos',
  '/testimonials',
  '/services/gravel-sand-delivery',
  '/services/aggregate-transport',
  '/services/debris-removal',
  '/services/site-prep',
  '/services/land-clearing',
  '/services/commercial-hauling',
  '/services/dump-truck-hauling',
  '/services/gravel-delivery',
  '/services/sand-delivery',
  '/services/soil-delivery',
  '/services/retaining-walls',
  '/services/underground-utilities',
  '/services/land-grading',
  '/services/emergency-expedited-service',
  '/blog/why-fs-hauling-reliable-dump-truck-services-shelby-nc',
];

export default defineConfig({
  site: 'https://www.fs-expeditedllc.com',
  output: 'static',
  // One URL format everywhere: NO trailing slash. Matches the canonical tags
  // (src/components/SEO.astro) and all 488 internal links, and makes
  // @astrojs/sitemap emit no-slash <loc> values (it checks this flag in both
  // addPageName() and addRouteUrl()). Paired with "trailingSlash": false in
  // vercel.json so the host 308s /x/ -> /x. Changing this does NOT change
  // emitted file paths — Astro's getOutFile() keys off build.format only.
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Exclude legacy paths from the sitemap (keep only canonical pages).
      filter: (page) => !legacyPaths.some((r) => page.includes(r)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
