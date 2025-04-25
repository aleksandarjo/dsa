function findMissingNumber(arr) {
  if (arr.length === 0) return 1;

  const n = arr.length + 1;

  const expectedSum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((acc, i) => {
    return acc + i;
  }, 0);
  return expectedSum - arrSum;
}

module.exports = findMissingNumber;
