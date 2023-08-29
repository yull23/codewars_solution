function sumStrings(a, b) {
  function charSelect(str, index) {
    if (index >= str.length || index < 0) return "0";
    return str[index];
  }
  function convertion(x) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] != "0") return x.slice(i, x.length);
    }
    return x;
  }
  a = convertion(a);
  b = convertion(b);
  let carry = 0;
  let result = "";
  let maxLen = Math.max(a.length, b.length);
  let aNumber, bNumber, sumPartial;
  for (let i = 0; i < maxLen; i++) {
    aNumber = charSelect(a, a.length - 1 - i);
    bNumber = charSelect(b, b.length - 1 - i);
    sumPartial = parseInt(aNumber) + parseInt(bNumber) + carry;
    result = (sumPartial % 10) + result;
    carry = Math.floor(sumPartial / 10);
  }
  if (carry == 0) return result;
  return carry + result;
}
console.log(sumStrings("123", "456"));