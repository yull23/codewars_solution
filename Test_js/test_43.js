function decompose(n) {
  function mcd(a, b) {
    if (a == 0 || b == 0) return b;
    let c = b;
    b = a;
    a = c % a;
    return mcd(a, b);
  }

  let num, den;
  const result = [];
  if (n == "0") return [];

  if (n.includes("/")) {
    let data = n.split("/");
    num = parseInt(data[0]);
    den = parseInt(data[1]);
    if (num == "0" || den == "0") return result;
  } else {
    let data = n.split(".");
    let m = data[1].length;
    num = parseInt(data[0]) * 10 ** data[1].length + parseInt(data[1]);
    den = 10 ** m;
  }
  let rest = num % den;
  if (rest == 0) {
    return [`${num / den}`];
  }
  if (Math.floor(num / den) >= 1) result.push(Math.floor(num / den));

  rest = rest / den;
  num = num % den;

  let i = 1;
  while (num != 1) {
    if (1 / i <= rest) {
      result.push(`1/${i}`);
      rest = rest - 1 / i;
      num = i * num - den;
      den = den * i;
      let mcdNum = mcd(num, den);
      num = num / mcdNum;
      den = den / mcdNum;
    }
    i++;
  }
  result.push(`1/${den}`);

  return result;
}
// console.log(decompose("3/4"));
// console.log(decompose("2/5"));
// console.log(decompose("12/5"));
console.log(decompose("4.66"));
console.log(decompose("0/1000"));

function mcd(a, b) {
  if (a == 0 || b == 0) return b;
  let c = b;
  b = a;
  a = c % a;
  console.log(a, b);
  return mcd(a, b);
}

console.log(mcd(1, 15));
