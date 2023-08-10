function basicOp(operation, value1, value2) {
  // Code
  switch (operation) {
    case "-":
      return value1 - value2;
    case "+":
      return value1 + value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}
// test
console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
