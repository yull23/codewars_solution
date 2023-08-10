function shortenNumber(suffixes, base) {
  function functionReturn(data) {
    let number = parseInt(data);
    let maxExponent = suffixes.length - 1;
    let cociente;
    let exponent;
    if (!(data[0] != "0" && /^\d+$/.test(data))) return data.toString();
    exponent = Math.floor(Math.log(data) / Math.log(base));
    if (exponent < suffixes.length) {
      cociente = Math.floor(number / base ** exponent);
      return cociente + suffixes[exponent];
    } else {
      cociente = Math.floor(number / base ** maxExponent);
      return cociente + suffixes[maxExponent];
    }
  }
  return functionReturn;
}
// test

let filter1 = shortenNumber(["", "k", "m"], 1000);
console.log(filter1("234324") == "234k");
console.log(filter1("98234324") == "98m");
console.log(filter1([1, 2, 3]) == "1,2,3");
let filter2 = shortenNumber(["B", "KB", "MB", "GB"], 1024);
console.log(filter2("32") == "32B");
console.log(filter2("2100") == "2KB");
console.log(filter2("pippi") == "pippi");
