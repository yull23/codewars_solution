function divisibleByThree(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += parseInt(str[i]);
  }
  return Number.isInteger(result / 3);
}
// test
console.log(divisibleByThree("123"));
console.log(divisibleByThree("19254"));
console.log(divisibleByThree("88"));
console.log(divisibleByThree("1"));
console.log(divisibleByThree("15"));
