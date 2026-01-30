function numberRange(startNum, endNum) {
  if (startNum === endNum) return [endNum];

  return [startNum, ...numberRange(startNum + 1, endNum)];
}

module.exports = numberRange;
