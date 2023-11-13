function spacey(array) {
  let result = "";
  let resultArr = [];
  array.forEach((element) => {
    result += element;
    resultArr.push(result);
  });
  return resultArr;
}
console.log(spacey(["i", "have", "no", "space"]));
