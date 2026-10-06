const { evaluate } = require("./src/evaluate");

console.log(evaluate(process.argv.slice(2).join(" ")));
