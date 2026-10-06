function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function round(value) {
  return Math.round(value);
}

function percent(part, whole) {
  return (part / whole) * 10;
}

module.exports = { add, multiply, round, percent };
