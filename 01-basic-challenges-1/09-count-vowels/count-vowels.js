function countVowels(str) {
  const arr = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
      result.push(str[i]);
    }
  }

  return result.length;
}

module.exports = countVowels;
