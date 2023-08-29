function expand(expr) {
  function dataCollection(data) {
    let [p, q] = data.slice(1, data.length).split(")");
    const letterPattern = /[a-zA-Z]/;
    let x = p.match(letterPattern)[0];
    let [a, b] = p.split(x);
    if (a == "") a = 1;
    if (a == "-") a = -1;

    a = parseInt(a);
    b = parseInt(b);

    // Exponent
    let n = parseInt(q.slice(1, q.length));
    return [a, x, b, n];
  }
  // Obtención de datos
  let [a, x, b, n] = dataCollection(expr);
  if (n == 0) return "1";
  if (n == 1) {
    let t = expr.split("^")[0];
    return t.slice(1, t.length - 1);
  }
  if (b == 0) {
    return a ** n + x + "^" + n;
  }
  // Otros datos
  function quotient(n, m) {
    let numerator = 1;
    let denominator = 1;
    for (let i = 1; i <= m; i++) {
      numerator *= n - i + 1;
      denominator *= i;
    }
    return numerator / denominator;
  }

  function variable(x, n) {
    if (n == 1) return x;
    if (n == 0) return "";
    return x + "^" + n;
  }

  let result = "";
  for (i = 0; i <= n; i++) {
    quotientI = quotient(n, i) * a ** (n - i) * b ** i;
    if (i != n && quotientI == -1) quotientI = "-";
    if (i == n && quotientI == -1) quotientI = -1;
    if (i != 0 && quotientI < 0) quotientI = quotientI;
    if (i != n && quotientI == 1) quotientI = "";
    if (i == n && quotientI == 1) quotientI = 1;
    if (i != 0 && quotientI > 0) quotientI = "+" + quotientI;
    result += quotientI + variable(x, n - i);
  }
  return result;
}
// test
let data_1 = "(s-1)^3";
// s^3-3s^2+3s-1
console.log(expand(data_1));

// console.log(dataCollection("(x+1)^2"));
// console.log(dataCollection("(p-1)^3"));
// console.log(dataCollection("(2f+4)^6"));
// console.log(dataCollection("(-2a-4)^0"));
// console.log(dataCollection("(-12t+43)^2"));
// console.log(dataCollection("(r+0)^203"));
// console.log(dataCollection("(-x-1)^2"));
// console.log(dataCollection("(x+1)^0"));
// console.log(dataCollection("(x+1)^1"));
// console.log(dataCollection("(x+1)^2"));
