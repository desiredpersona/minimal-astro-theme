import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every markdown file in src/content/blog/ becomes a post.
// The schema below validates each post's frontmatter and gives
// friendly error messages when something is missing or misspelled.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // The publish date, e.g. `date: 2026-08-17`.
    date: z.coerce.date(),
    // Set `draft: true` to hide a post from the site.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
