function zeros(n) {
  // your code here
  let nExponents = Math.floor(Math.log(n) / Math.log(5));
  console.log(nExponents);
  let nMultple;
  let nMultples = [];
  for (let i = nExponents; i >= 1; i--) {
    nMultple = Math.floor(n / 5 ** i);
    nMultples.push(nMultple);
  }
  let result = 0;
  console.log(nMultples);
  nMultples.forEach((element, index) => {
    console.log([element, index]);
    console.log(nExponents - index);
    if (index > 0) {
      result += (element - nMultples[index - 1]) * (nExponents - index);
      console.log((element - nMultples[index - 1]) * (nExponents - index));
    } else {
      result += element * (nExponents - index);
      console.log(nExponents - index);
      console.log(element * (nExponents - index));
    }
  });
  console.log(result);

  console.log(nMultples);
  return result;
}
let n = 30;
console.log(zeros(n));
