function lineTotal(quantity, price) {
  return quantity * price;
}

function total(items) {
  return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

function getTotal(quantity, price) {
  return quantity * price;
}

module.exports = { lineTotal, total, getTotal };
