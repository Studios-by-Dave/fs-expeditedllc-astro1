// @ts-check
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
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

// ---------- lastmod for sitemap ----------
// Blog posts use their real published date from src/data/posts.ts.
// Every other page uses the last git commit that touched the source file(s)
// that generate it. If git is unavailable or the clone is shallow, lastmod
// is omitted rather than guessed.
const postDates = new Map();
try {
  const raw = readFileSync(new URL('./src/data/posts.ts', import.meta.url), 'utf8');
  const slugs = [...raw.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
  const dates = [...raw.matchAll(/date:\s*"([^"]+)"/g)].map((m) => m[1]);
  slugs.forEach((slug, i) => {
    if (dates[i] && !postDates.has(slug)) postDates.set(slug, dates[i]);
  });
} catch { /* leave empty - no fabricated dates */ }

let shallowRepo = true;
try {
  shallowRepo = execFileSync('git', ['rev-parse', '--is-shallow-repository'], { encoding: 'utf8' }).trim() === 'true';
} catch { /* treat as shallow -> skip git-derived dates */ }

const gitLastmod = (files) => {
  if (shallowRepo) return undefined;
  let latest = null;
  for (const file of files) {
    try {
      const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], { encoding: 'utf8' }).trim();
      if (!out) continue;
      const t = Date.parse(out);
      if (!Number.isNaN(t) && (latest === null || t > latest)) latest = t;
    } catch { /* file untracked or git missing */ }
  }
  return latest === null ? undefined : new Date(latest);
};

const sourceFilesFor = (pathname) => {
  if (pathname === '/') return ['src/pages/index.astro'];
  if (pathname === '/blog') return ['src/pages/blog/index.astro'];
  if (pathname.startsWith('/blog/')) return null; // handled separately via postDates
  if (pathname === '/service-area') return ['src/pages/service-area/index.astro'];
  if (pathname.startsWith('/service-area/')) return ['src/pages/service-area/[city].astro', 'src/data/serviceAreas.ts'];
  if (pathname === '/services') return ['src/pages/services/index.astro'];
  if (/^\/services\/[^/]+\/[^/]+$/.test(pathname)) return ['src/pages/services/[category]/[service].astro', 'src/data/services.ts'];
  if (pathname.startsWith('/services/')) return ['src/pages/services/[category].astro', 'src/data/services.ts'];
  // default: a top-level page
  return [`src/pages${pathname}.astro`];
};

const lastmodFor = (pathname) => {
  if (pathname.startsWith('/blog/') && pathname !== '/blog/') {
    const slug = pathname.slice('/blog/'.length);
    const d = postDates.get(slug);
    return d ? new Date(d) : undefined;
  }
  const files = sourceFilesFor(pathname);
  return files ? gitLastmod(files) : undefined;
};

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
      // Real lastmod: blog posts get their published date; other pages get the
      // last commit date of the source files that generate them. Omitted when
      // unknown (e.g. shallow clone) rather than guessed.
      serialize: (item) => {
        const pathname = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        const lastmod = lastmodFor(pathname);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});