/** Splits "2 + 3" into numbers and operators. */
function parse(expression) {
  return expression.trim().split(/\s+/).map((token) => (/^\d+(\.\d+)?$/.test(token) ? Number(token) : token));
}

module.exports = { parse };
