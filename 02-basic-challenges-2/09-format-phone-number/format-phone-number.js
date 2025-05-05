function formatPhoneNumber(arr) {
  const formatted = arr.join("");
  return `(${formatted.slice(0, 3)}) ${formatted.slice(3, 6)}-${formatted.slice(
    -4
  )}`;
}

module.exports = formatPhoneNumber;
