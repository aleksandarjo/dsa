function calculateTotalSalesWithTax(products, tax) {
  const total = products
    .map((item) => item.price * item.quantity)
    .reduce((acc, item) => acc + item, 0);

  const totalTax = total * (1 + tax / 100);
  return totalTax;
}

module.exports = calculateTotalSalesWithTax;
