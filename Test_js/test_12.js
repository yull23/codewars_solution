function solveExpression(exp) {
  function isValidOperation(a, operation, b, result, i) {
    if (parseInt(convertNum(result, i)) == 0 && result.length > 1) return false;
    switch (operation) {
      case "-":
        return convertNum(result, i) == convertNum(a, i) - convertNum(b, i);
      case "+":
        return convertNum(result, i) == convertNum(a, i) + convertNum(b, i);
      case "*":
        return convertNum(result, i) == convertNum(a, i) * convertNum(b, i);
      case "/":
        return convertNum(result, i) == convertNum(a, i) / convertNum(b, i);
    }
  }

  function getDate(str) {
    let [expression, result] = str.split("=");
    let a = "";
    let b = "";
    let symA = "";
    let symB = "";
    let operation;
    if (expression[0] == "-") {
      symA = "-";
      expression = expression.slice(1, expression.length);
    }
    let symbolsOperation = [];
    let count = 0;
    for (let i = 0; i < expression.length; i++) {
      if (["*", "-", "+", "/"].includes(expression[i])) {
        symbolsOperation.push(expression[i]);
        count += 1;
      } else {
        if (count == 0) a += expression[i];
        if (count >= 1) b += expression[i];
      }
    }
    operation = symbolsOperation[0];
    symB = symbolsOperation[1] || symB;

    // console.log([symA, a, operation, symB, b, result]);
    return [symA, a, operation, symB, b, result];
  }

  function convertNum(a, i) {
    return parseInt(
      a
        .split("")
        .reduce(
          (accum, element) =>
            element == "?" ? (accum += i) : (accum += element),
          ""
        )
    );
  }
  // coding
  let [symA, a, operation, symB, b, result] = getDate(exp);
  for (let i = 0; i <= 9; i++) {
    if (!exp.includes(i.toString())) {
      console.log(a, b);
      if (
        i == 0 &&
        ((a[0] == "?" && a.length != 1) || (b[0] == "?" && b.length != 1))
      )
        continue;
      if (isValidOperation(symA + a, operation, symB + b, result, i)) {
        return i;
      }
    }
  }

  return -1;
}

console.log(solveExpression("123?45+?=123?45"));
// console.log(solveExpression("123*45?=5?088"));
console.log(solveExpression("-?56373--9216=-?47157"));

// console.log(solveExpression("1+1=?"));
// console.log(solveExpression("123*45?=5?088"));
// console.log(solveExpression("-5?*-1=5?"));
// console.log(solveExpression("19--45=5?"));
// console.log(solveExpression("??*??=302?"));
// console.log(solveExpression("?*11=??"));
// console.log(solveExpression("??*1=??"));
// console.log(solveExpression("??+??=??"));
