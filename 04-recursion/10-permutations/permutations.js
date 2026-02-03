function permutations(str) {
  const arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] + permutations(...);
  }
}

module.exports = permutations;

permutations("abc");
