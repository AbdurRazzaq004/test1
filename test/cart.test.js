const assert = require("assert");
const { total } = require("../src/cart");

assert.strictEqual(total([{ price: 10, quantity: 1 }]), 10, "one item at 10 should be 10");
assert.strictEqual(
  total([{ price: 10, quantity: 3 }]),
  30,
  `three at 10 should be 30, got ${total([{ price: 10, quantity: 3 }])}`
);
console.log("ok - cart totals");
