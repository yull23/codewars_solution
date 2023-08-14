function nClosestPairsTonum(num, k) {
  let result = [];
  for (let i = num - 1; i >= 1; i--) {
    for (let j = i - 1; j >= 1; j--) {
      if (
        Number.isInteger((i - j) ** 0.5) &&
        Number.isInteger((i + j) ** 0.5)
      ) {
        result.push([i, j]);
      }
      if (result.length == k) return result;
    }
  }
  return result;
}
// test
console.log(nClosestPairsTonum(1000, 4));
console.log(nClosestPairsTonum(10000, 8));
