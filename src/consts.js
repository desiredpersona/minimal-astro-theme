// Edit this file to personalize your site.
// It is the only file you need to touch to make the template yours.

export const SITE_TITLE = "Minimal Astro Theme";
export const SITE_DESCRIPTION = 'A minimal blog built with Astro.';

// How post dates are displayed. 'en-US' → "August 1, 2026" (US order).
// 'en-GB' → "1 August 2026" (UK order). Any BCP 47 locale works.
export const DATE_LOCALE = 'en-US';

// Show an estimated reading time ("3 min read") next to each post's date.
export const SHOW_READING_TIME = true;

// Show a short excerpt under each post title on the homepage. Uses the
// post's `description` frontmatter if set, otherwise its first paragraph.
export const SHOW_EXCERPTS = true;

// Shown in the footer and used for X card credits.
// Set the URL to an empty string ('') to hide the footer link.
export const X_HANDLE = '@yourhandle';
export const X_URL = 'https://x.com/yourhandle';

// Image shown when a page is shared on X or other social networks.
// A file in public/, ideally 1200×630 PNG or JPG. Posts can override it
// with an `image` field in their frontmatter.
export const SOCIAL_IMAGE = '/og-image.png';
