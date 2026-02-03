function flattenArray(arr) {
  const result = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
      result.push(...flattenArray(i));
    } else {
      result.push(i);
    }
  }

  return result;
}

module.exports = flattenArray;

flattenArray([1, 2, 3, [4, 5, [6, 7, 8], 9], 10]);
