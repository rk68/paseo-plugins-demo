const assert = require("node:assert");
const { add, multiply, round, percent } = require("./src/calc");

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(multiply(2, 3), 6);
assert.strictEqual(round(2.4), 2);
assert.strictEqual(percent(50, 200), 25);
console.log("all tests passed");
