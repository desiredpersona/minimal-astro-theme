// First paragraph of a markdown body as plain text, for link previews.
export function excerpt(body, maxLength = 160) {
  const paragraph = body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find(
      (block) =>
        block &&
        !block.startsWith('#') &&
        !block.startsWith('```') &&
        !block.startsWith('![') &&
        !block.startsWith('|')
    );

  if (!paragraph) return '';

  const text = paragraph
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~>]/g, '')
    .replace(/\s+/g, ' ');

  if (text.length <= maxLength) return text;

  // Cut at the last whole word, then drop any trailing punctuation
  return text
    .slice(0, maxLength - 1)
    .replace(/\s+\S*$/, '')
    .replace(/[,;:.]$/, '') + '…';
}
