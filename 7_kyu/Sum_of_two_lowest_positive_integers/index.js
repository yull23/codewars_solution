function sumTwoSmallestNumbers(numbers) {
  let newNumbers = numbers.sort((a, b) => a - b);
  return newNumbers[0] + newNumbers[1];
}
// test
let data;
data = [15, 28, 4, 2, 43];
console.log(sumTwoSmallestNumbers(data));
data = [5, 8, 12, 19, 22];
console.log(sumTwoSmallestNumbers(data));
data = [3, 87, 45, 12, 7];
console.log(sumTwoSmallestNumbers(data));
data = [23, 71, 33, 82, 1];
console.log(sumTwoSmallestNumbers(data));
data = [52, 76, 14, 12, 4];
console.log(sumTwoSmallestNumbers(data));
