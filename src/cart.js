// Shopping-cart totals.

/**
 * BROKEN ON PURPOSE (HealCI test case, LOW risk): the quantity is ignored, so two of an item costs the
 * same as one. An ordinary arithmetic mistake in ordinary code — nothing sensitive, no secret needed, and
 * the test below proves the fix. This is the shape that should auto-heal.
 */
function total(items) {
  return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

function getTotal(quantity, price) {
  return quantity * price;
}

module.exports = { total, getTotal };
