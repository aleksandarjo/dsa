function validatePassword(password) {
  const isLengthValid = password.length >= 8;

  const hasUpperCase = password
    .split("")
    .some((char) => char === char.toUpperCase());

  const hasLowerCase = password
    .split("")
    .some((char) => char === char.toLowerCase());

  const hasDigit = password.split("").some((char) => char == parseInt(char));

  if (isLengthValid && hasUpperCase && hasLowerCase && hasDigit) return true;
  return false;
}

module.exports = validatePassword;
