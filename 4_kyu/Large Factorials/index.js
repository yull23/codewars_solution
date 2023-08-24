function factorial(n) {
  // Add some code
  if (n <= 0) return null;
  let result = "1";
  function multiply(a, b) {
    if (a == "0" || b == "0") return "0";
    function valuePosition(string, counter) {
      if (counter > string.length - 1) return 0;
      return string.slice(string.length - 1 - counter, string.length - counter);
    }
    function convertion(x) {
      for (let i = 0; i < x.length; i++) {
        if (x[i] != "0") return x.slice(i, x.length);
      }
      return x;
    }
    let x = convertion(a);
    let y = convertion(b);
    let result = [];

    // Función Producto
    function product(string, char, k) {
      let result = "";
      let carry = 0;
      let product = 0;
      let m = parseInt(char);
      for (let i = string.length - 1; i >= 0; i--) {
        product = parseInt(string[i] * m + carry).toString();
        result = product.slice(-1) + result;
        if (product.length == 1) {
          carry = 0;
        } else {
          carry = parseInt(product.slice(0, product.length - 1));
        }
      }
      if (carry == 0) {
        result = result + "0".repeat(k);
      } else {
        result = carry + result + "0".repeat(k);
      }
      return result;
    }
    let count = 0;
    // Array de productos parciales

    for (let i = y.length - 1; i >= 0; i--) {
      result.unshift(product(x, y[i], count));
      count += 1;
    }
    // console.log(result);
    let sumPartial;
    let carry = 0;
    let resultProduct = "";

    for (let i = 0; i < result[0].length; i++) {
      sumPartial = carry;
      for (let j = 0; j < result.length; j++) {
        sumPartial += parseInt(valuePosition(result[j], i));
      }
      // console.log(sumPartial);
      resultProduct = sumPartial.toString().slice(-1) + resultProduct;
      if (sumPartial < 10) {
        carry = 0;
      } else {
        carry = Math.floor(sumPartial / 10);
      }
    }
    if (carry != 0) return carry + resultProduct;
    return resultProduct;
  }
  for (let i = 1; i <= n; i++) {
    result = multiply(result, i.toString());
  }
  return result;
}
// test
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(9));
console.log(factorial(15));
