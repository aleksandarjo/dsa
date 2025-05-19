function reverseString(string) {
  if (string === "") return "";

  console.log(string.substring(1));
  return reverseString(string.substring(1)) + string[0];
}

module.exports = reverseString;
