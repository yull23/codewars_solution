function findReverseNumber(n) {
  console.log(n);
  if (n <= 10) return n - 1;
  if (n >= 10 && n <= 19) return (n - 10) * 11;
  function countReverse(n) {
    if (n == 1) return 10;
    let result = 10 ** Math.ceil(n / 2 - 1) * 9;
    // console.log([result, n]);
    return result;
  }
  function reverseNumber(i, n) {
    if (i % 2 == 0) {
      return n + String(n).split("").reverse().join("");
    } else {
      let str = String(n);
      return (
        str.slice(0, -1) +
        str.slice(-1) +
        str.slice(0, -1).split("").reverse().join("")
      );
    }
  }
  // your code
  let sum = 0;
  let i = 1;
  while (sum < n) {
    sum += countReverse(i);
    i++;
  }
  i -= 1;
  sum -= countReverse(i);

  console.log(i);
  let base = 10 ** Math.floor((i - 1) / 2);
  let numberHalf = n - sum + base - 1;

  // console.log(i, sum, numberHalf);
  return reverseNumber(i, numberHalf);
}
console.log(findReverseNumber(1918017025));
console.log(findReverseNumber(11359973424));
console.log(findReverseNumber(100000000000));

///////////////////
function countReverse(n) {
  if (n == 1) return 10;
  let result = 10 ** Math.ceil(n / 2 - 1) * 9;
  // console.log([result, n]);
  return result;
}

console.log(countReverse(3));

//////////////////
function reverseNumber(i, n) {
  if (i % 2 == 0) {
    return n + String(n).split("").reverse().join("");
  } else {
    let str = String(n);
    return (
      str.slice(0, -1) +
      str.slice(-1) +
      str.slice(0, -1).split("").reverse().join("")
    );
  }
}

// 16257164387
