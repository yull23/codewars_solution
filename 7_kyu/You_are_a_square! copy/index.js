function getSum(a, b) {
  let sumValues = 0;

  if (a === b) {
    return a;
  } else {
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      sumValues += i;
    }
  }

  return sumValues;
}
// test
console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
