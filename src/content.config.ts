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
    // Optional text for link previews. Defaults to the post's first paragraph.
    description: z.string().optional(),
    // Optional preview image for X and other social networks, e.g. `image: /my-post.png`
    // (a file in public/). Defaults to SOCIAL_IMAGE in src/consts.js.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { blog };
