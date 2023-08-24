function fib(n) {
  if (n == 0) return BigInt(0);
  if (n == 1 || n == -1) return BigInt(1);
  let number = Math.abs(n);
  let exponent = (number % 2) + 1;
  // ♫♫♫ Metodo +
  let objectFib = {
    0: BigInt(0),
    1: BigInt(1),
    2: BigInt(1),
    3: BigInt(2),
    4: BigInt(3),
    5: BigInt(5),
  };
  let remains = [];
  let rest = 5;
  while (rest < number) {
    remains.unshift(number % 2);
    number = Math.floor(number / 2);
  }
  let b = objectFib[number];
  let a = objectFib[number - 1];
  for (const i of remains) {
    [a, b] = [a * a + b * b, BigInt(2) * a * b + b * b];
    if (i == 1) {
      [a, b] = [b, a + b];
    }
  }
  // return b;
  // ♫♫♫ end +
  if (n < 0) return b * BigInt((-1) ** exponent);
  return b;
}

// test
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(-6));
