function areAllCharactersUnique(str) {
  const unique = new Set([]);

  for (let i = 0; i < str.length; i++) {
    if (unique.has(str[i])) return false;
    unique.add(str[i]);
  }

  return true;
}

module.exports = areAllCharactersUnique;
