import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every markdown file in src/content/blog/ becomes a post.
// The schema below validates each post's frontmatter and gives
// friendly error messages when something is missing or misspelled.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z
    .object({
      title: z.string(),
      // The publish date, e.g. `date: 2026-08-17`.
      date: z.coerce.date(),
      // Optional date of your last significant edit, e.g. `updated: 2026-09-03`.
      // Shown next to the publish date and used in the sitemap.
      updated: z.coerce.date().optional(),
      // Optional list of tags, e.g. `tags: [astro, css]`. Each tag gets a page
      // at /tags/<tag>/ listing its posts.
      tags: z.array(z.string()).default([]),
      // Set `draft: true` to hide a post from the site.
      draft: z.boolean().default(false),
      // Optional text for link previews. Defaults to the post's first paragraph.
      description: z.string().optional(),
      // Optional preview image for X and other social networks, e.g. `image: /my-post.png`
      // (a file in public/). Defaults to SOCIAL_IMAGE in src/consts.js.
      image: z.string().optional(),
      imageAlt: z.string().optional(),
    })
    // Catches typos like an updated date that comes before the publish date.
    .refine((data) => !data.updated || data.updated >= data.date, {
      message: '`updated` must be the same as or after `date`.',
      path: ['updated'],
    }),
});

export const collections = { blog };
