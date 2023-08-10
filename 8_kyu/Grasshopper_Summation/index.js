var summation = function (num) {
  let sumValues = 0;
  for (let i = 1; i <= num; i++) {
    sumValues = sumValues + i;
  }
  return sumValues;
};
// test
console.log(summation(1));
console.log(summation(2));
console.log(summation(8));
