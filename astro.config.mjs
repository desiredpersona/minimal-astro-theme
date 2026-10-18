// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { postLastModified } from './src/utils/postLastModified.js';

const lastModified = postLastModified();

// https://astro.build/config
export default defineConfig({
  // Change this to your deployed URL. It is used for the RSS feed and sitemap.
  site: 'https://example.com',
  integrations: [
    sitemap({
      // Add each post's `updated` (or publish) date to the sitemap
      serialize(item) {
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
