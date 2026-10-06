const { add, multiply } = require("./calc");
const { parse } = require("./parse");

const OPERATORS = { "+": add, "*": multiply };

/** Evaluates a parsed expression from left to right. */
function evaluate(expression) {
  const [first, ...rest] = parse(expression);
  let total = first;
  for (let index = 0; index < rest.length; index += 2) total = OPERATORS[rest[index]](total, rest[index + 1]);
  return total;
}

module.exports = { evaluate };
