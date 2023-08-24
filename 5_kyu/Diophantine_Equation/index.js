function solequa(n) {
  let limitNumber = Math.ceil(n ** 0.5);
  let a, b, x, y;
  let result = [];
  for (a = 0; a < limitNumber + 2; a++) {
    if (n % a != 0) continue;
    b = n / a;
    x = (a + b) / 2;
    y = Math.abs(b - a) / 4;
    if (Number.isInteger(x) && Number.isInteger(y)) result.push([x, y]);
  }
  return result;
}

// test

console.log(solequa(5));
console.log(solequa(12));
console.log(solequa(13));
console.log(solequa(16));
