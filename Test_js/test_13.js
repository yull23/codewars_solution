function diff(expr) {
  // Write code here.
  // You will need a bunch of other functions to solve this kata
  // but the diff() function must exist and return the derivative of expr

  return "";
}
console.log(diff(3));

function getParenthesis(str) {
  let indexs = [];
  let parenthesisStart = [];
  let parenthesisEnd = [];
  for (const i of str) {
  }
  let count = 0;
  let temporal = "";
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == ")") {
      indexs.push(i);
    }
    if (str[i] == "(") parenthesisStart.push(i);
    if (str[i] == ")") parenthesisEnd.push(i);
    // if (str[i] == "(") {
    //   parenthesisStart.push([i]);
    //   temporal = "(";
    //   count++;
    // } else if (str[i] == ")") {
    //   if (temporal == "(") {
    //     console.log(count);
    //     console.log(parenthesisStart[count - 1]);
    //   }
    // } else {
    // }
  }
  console.log(indexs);
  console.log(parenthesisStart);
  console.log(parenthesisEnd);
}
getParenthesis("(23(123)2323(2332)2323(2323(2323(23(23)23)23)23))");

// const array = [10, 20, 30, 40, 50];
// const elementToFind = 30;

// const index = array.indexOf(elementToFind);
// console.log(index);

function shortenExpression(str) {
  let chars = str.split("");
  let temporal = "";
  let result = [];
  let level = 0;
  while (chars.includes(")")) {
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] == ")" && temporal == "(") {
        result.push([level, index, i]);
        temporal = "";
        chars[i] = "";
        chars[index] = "";
      }
      if (chars[i] == "(") {
        temporal = "(";
        index = i;
      }
    }
    level++;
  }
  return result;
}
let data = "(* 2 (* -1 (sin (* 2 x))))";
console.log(shortenExpression(data));
console.log(data[16], data[22]);
