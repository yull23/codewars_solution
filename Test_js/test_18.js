function doubles(maxk, maxn) {
  // your code
  function forceOne(k, n) {
    return 1 / (k * (n + 1) ** (2 * k));
  }
  let result = 0;
  for (let k = 1; k <= maxk; k++) {
    for (let n = 1; n <= maxn; n++) {
      result += forceOne(k, n);
      if (forceOne(k, n) <= 10 ** -10) {
        continue;
      }
    }
  }
  return result;
}
let maxk = 1;
let maxn = 3;
console.log(doubles(maxk, maxn));
