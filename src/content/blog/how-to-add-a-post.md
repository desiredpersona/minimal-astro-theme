---
title: How to add a post
date: 2026-07-15
description: Create a markdown file, add a title and date, and write. Plus two optional settings worth knowing about.
---

Adding a post takes three steps:

1. Create a new `.md` file in `src/content/blog/`. The filename becomes the URL, so `my-great-idea.md` is served at `/blog/my-great-idea/`.
2. Add frontmatter at the top, between the `---` lines:

```yaml
---
title: My great idea
date: 2026-08-17
---
```

3. Write your post in markdown below the second `---`.

There are two optional frontmatter fields worth knowing about:

- `draft: true` hides the post from the site until you remove it.
- `updated: 2026-09-03` shows "Updated September 3, 2026" next to the publish date. Add it when you make a significant change to a post that's already published. Keep `date` as the original publish date so the post stays in the same place on the homepage.
