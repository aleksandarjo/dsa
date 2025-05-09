function generateHashtag(str) {
  if (str.length === 0 || str.length >= 140) return false;

  const hashtag = str
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

  return `#${hashtag}`;
}

module.exports = generateHashtag;
