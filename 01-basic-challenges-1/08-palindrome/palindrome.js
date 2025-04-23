function isPalindrome(str) {
  let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = formattedStr.split("").reverse().join("");
  return formattedStr === reversedStr;
}

module.exports = isPalindrome;

// /[^a-z0-9]/g
