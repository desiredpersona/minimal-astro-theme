---
title: How to add a post
date: 2026-07-15
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

There is one optional frontmatter field:

- `draft: true` hides the post from the site until you remove it.
