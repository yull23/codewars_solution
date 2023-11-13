function stringExpansion(s) {
  // Good luck!
  let letters = s.split("");
  let n = 0;
  let result = "";
  console.log(letters);
  for (let i of letters) {
    if (!isNaN(i)) {
      n = parseInt(i);
    } else {
      result += i.repeat(n);
    }
  }
  if (s[0] === "0") return s;
  return result;
}

let data = "3d332f2a";
console.log(stringExpansion(data));
