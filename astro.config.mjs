// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';
import { postLastModified } from './src/utils/postLastModified.js';

const lastModified = postLastModified();

// True when a built page asks search engines not to list it (see `noindex`
// in BaseLayout.astro). The sitemap is written after the pages are built,
// so this reads the page's finished HTML in dist/.
function isNoindex(url) {
  const file = new URL(`./dist${new URL(url).pathname}index.html`, import.meta.url);
  try {
    return readFileSync(file, 'utf8').includes('<meta name="robots" content="noindex');
  } catch {
    return false;
  }
}

// https://astro.build/config
export default defineConfig({
  // Change this to your deployed URL. It is used for the RSS feed and sitemap.
  site: 'https://example.com',
  integrations: [
    sitemap({
      serialize(item) {
        // Leave out pages that search engines are asked to skip
        if (isNoindex(item.url)) return undefined;
        // Add each post's `updated` (or publish) date
        const date = lastModified[new URL(item.url).pathname];
        if (date) item.lastmod = date.toISOString();
        return item;
      },
    }),
  ],
  // Post images get several sizes so phones download small versions
  image: {
    layout: 'constrained',
  },
  markdown: {
    // Light syntax-highlighting theme so code reads well on the site's
    // light grey code background (see --code-bg in global.css).
    shikiConfig: {
      theme: 'github-light',
    },
  },
  experimental: {
    incrementalBuild: true,
  },
});
