function sumOfEvenSquares(arr) {
  const result = arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((acc, num) => acc + num, 0);

  return result;
}

module.exports = sumOfEvenSquares;
