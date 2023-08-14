function closestPairTonum(n) {
  for (let i = n - 1; i >= 1; i--) {
    for (let j = i - 1; j >= 1; j--) {
      if (
        Number.isInteger((i - j) ** 0.5) &&
        Number.isInteger((i + j) ** 0.5)
      ) {
        return [i, j];
      }
    }
  }
}
// test
console.log(closestPairTonum(1000));
console.log(closestPairTonum(10000));
