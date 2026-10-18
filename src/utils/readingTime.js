const WORDS_PER_MINUTE = 200;

// Takes a post's raw markdown body and returns e.g. "3 min read".
export function readingTime(body) {
  const words = body.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
