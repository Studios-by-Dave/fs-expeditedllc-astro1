// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Legacy URL redirects preserved from the original Vite SPA build.
const redirects = {
  '/why-us': '/about',
  '/why-us/about': '/about',
  '/why-us/promos': '/promos',
  '/testimonials': '/reviews',
  '/services/gravel-sand-delivery': '/services/material-delivery/gravel-delivery',
  '/services/aggregate-transport': '/services/site-services/aggregate-transport',
  '/services/debris-removal': '/services/site-services/debris-removal',
  '/services/site-prep': '/services/site-services/site-prep',
  '/services/land-clearing': '/services/site-services/land-clearing',
  '/services/commercial-hauling': '/services/emergency-expedited/commercial-hauling',
  '/services/dump-truck-hauling': '/services/dump-trucks-hauling-services/dump-truck-hauling',
  '/services/gravel-delivery': '/services/material-delivery/gravel-delivery',
  '/services/sand-delivery': '/services/material-delivery/sand-delivery',
  '/services/soil-delivery': '/services/material-delivery/soil-delivery',
  '/services/retaining-walls': '/services/site-services/retaining-walls',
  '/services/underground-utilities': '/services/site-services/underground-utilities',
  '/services/land-grading': '/services/site-services/land-grading',
  '/services/emergency-expedited-service': '/services/emergency-expedited/emergency-expedited',
};

export default defineConfig({
  site: 'https://www.fs-expeditedllc.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Exclude legacy redirect stubs from the sitemap (keep only canonical pages).
      filter: (page) => !Object.keys(redirects).some((r) => page.includes(r)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects,
});
