import { DATE_LOCALE, ORDINAL_DATES } from '../consts';

const formatter = new Intl.DateTimeFormat(DATE_LOCALE, {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  // Frontmatter dates like `2026-08-01` are midnight UTC. Formatting in UTC
  // keeps them on the right day wherever the site is built.
  timeZone: 'UTC',
});

// Knows which English ordinal ending each number takes: 1st, 2nd, 3rd, 4th,
// 11th, 21st, 22nd...
const ordinalRules = new Intl.PluralRules('en', { type: 'ordinal' });
const suffixes = { one: 'st', two: 'nd', few: 'rd', other: 'th' };

// Renders as "August 1, 2026" for en-US, or "1 August 2026" for en-GB —
// the day/month order follows DATE_LOCALE automatically. With ORDINAL_DATES
// on, the day gets an ending: "August 1st, 2026" or "1st August 2026".
export function formatDate(date) {
  // Ordinal endings only make sense in English
  if (!ORDINAL_DATES || !DATE_LOCALE.startsWith('en')) {
    return formatter.format(date);
  }

  return formatter
    .formatToParts(date)
    .map(({ type, value }) =>
      type === 'day' ? value + suffixes[ordinalRules.select(Number(value))] : value
    )
    .join('');
}
