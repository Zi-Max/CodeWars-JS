// solution 1

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

console.log(basicOp("+", 5, 5));

// solution 2

function basicOp(operation, value1, value2) {
  cases = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  };

  return cases[operation];
}
console.log(basicOp("+", 5, 5));

// solution 3
// WARNINIG: Do NOT use eval:
// With eval(), malicious code can run inside your application without permission.
// With eval(), third-party code can see the scope of your application, which can lead to possible attacks.

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}
console.log(basicOp("+", 5, 5));

// solution 4

function basicOp(operation, value1, value2) {
  if (operation == "+") return value1 + value2;
  if (operation == "-") return value1 - value2;
  if (operation == "*") return value1 * value2;
  if (operation == "/") return value1 / value2;
}
console.log(basicOp("+", 5, 5));
