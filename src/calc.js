function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function round(value) {
  return Math.round(value + Number.EPSILON);
}

module.exports = { add, multiply, round };
