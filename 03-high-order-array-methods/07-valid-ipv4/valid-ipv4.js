const isValidIPv4 = (str) => {
  const ip = str.split(".");

  if (ip.length !== 4) return false;

  return ip.every((item) => {
    const num = parseInt(item);
    return num >= 0 && num <= 255 && item === num.toString();
  });
};

module.exports = isValidIPv4;
