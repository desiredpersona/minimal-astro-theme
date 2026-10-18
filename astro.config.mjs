// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Change this to your deployed URL. It is used for the RSS feed and sitemap.
  site: 'https://example.com',
  integrations: [sitemap()],
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
