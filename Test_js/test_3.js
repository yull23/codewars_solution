function fib(n) {
  if (n == 0) return BigInt(0);
  if (n == 1 || n == -1) return BigInt(1);
  let number = Math.abs(n);
  let exponent = (number % 2) + 1;
  let result;
  let count;
  let penultimate = BigInt(0);
  let last = BigInt(1);
  count = 2;
  while (count <= number) {
    result = penultimate + last;
    penultimate = last;
    last = result;

    count++;
  }
  if (n < 0) return result * BigInt((-1) ** exponent);
  return result;
}

// function fib(n) {
//   if (n == 0) return BigInt(0);
//   if (n == 1 || n == -1) return BigInt(1);
//   let number = Math.abs(n);
//   let exponent = (number % 2) + 1;
//   let initial = [BigInt(0), BigInt(1), BigInt(1), BigInt(2), BigInt(3)];
//   let count = 0;
//   if (n < 4) {
//     result = initial[number % 5];
//   }

//   while (count <= number) {
//     if (number - count <= 4) {
//       result = initial[number % 5];
//       break;
//     }
//     newdata = [
//       initial[3] + initial[4],
//       initial[3] + initial[4] * BigInt(2),
//       initial[3] * BigInt(2) + initial[4] * BigInt(3),
//       initial[3] * BigInt(3) + initial[4] * BigInt(5),
//       initial[3] * BigInt(5) + initial[4] * BigInt(8),
//     ];
//     initial = [...newdata];
//     count += 5;
//   }
//   if (n < 0) return result * BigInt((-1) ** exponent);
//   return result;
// }

// console.log(fib(-2));
// console.log(fib(-3));

// function fib(n) {
//   if (n == 0) return BigInt(0);
//   if (n == 1 || n == -1) return BigInt(1);
//   let number = Math.abs(n);
//   let exponent = (number % 2) + 1;
//   let current;
//   let count;
//   let penultimate = BigInt(0);
//   let last = BigInt(1);
//   count = 2;
//   while (count <= number) {
//     current = penultimate + last;
//     next = current + last;
//     nextPost = next + current;
//     penultimate = next;
//     last = nextPost;
//     count += 3;
//     console.log([penultimate, last, current, next, nextPost]);
//   }
//   let result;
//   if (count - number == 2) {
//     result = next;
//   } else if (count - number == 1) {
//     result = nextPost;
//   } else {
//     result = current;
//   }

//   if (n < 0) return result * BigInt((-1) ** exponent);
//   return result;
// }

console.log(fib(-6));
console.log(fib(-5));
console.log(fib(-4));
console.log(fib(-3));
console.log(fib(-2));
console.log(fib(-1));
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));
console.log(fib(11));
