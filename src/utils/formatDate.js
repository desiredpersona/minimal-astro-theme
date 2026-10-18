import { DATE_LOCALE } from '../consts';

// Renders as "August 1, 2026" for en-US, or "1 August 2026" for en-GB —
// the day/month order follows DATE_LOCALE automatically.
export function formatDate(date) {
  return date.toLocaleDateString(DATE_LOCALE, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
