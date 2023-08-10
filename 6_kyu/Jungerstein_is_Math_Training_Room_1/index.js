function countZeros(n) {
  if (n % 2 != 0) return 0;
  let countZeros,
    countFive,
    value,
    result = 0;
  for (let i = 1; i <= n; i++) {
    value = i;
    countZeros = 0;
    countFive = 0;
    while (value % 10 == 0) {
      countZeros += 1;
      value = value / 10;
    }
    if (countZeros > 0) {
      while (value % 5 == 0) {
        countFive += 1;
        value = value / 5;
      }
    }
    result += countFive + countZeros;
    // if (i % 10 == 0)
    //   console.log(
    //     i,
    //     "///",
    //     countZeros,
    //     "///",
    //     countFive,
    //     "///",
    //     countFive + countZeros,
    //     "///",
    //     result
    //   );
  }
  return result;
}

// test

console.log(countZeros(668));
// console.log(countZeros(14));
// console.log(countZeros(198));
// console.log(countZeros(202));
