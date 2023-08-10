var maxSequence = function (arr) {
  // function sumArray(arr) {
  //   let sumValues = 0;
  //   for (let value of arr) {
  //     sumValues = sumValues + value;
  //   }
  //   return sumValues;
  // }
  // let sumMax = Math.max(0, sumArray(arr));
  // let sumTemporal = 0;
  // for (let i = 1; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length + 1 - i; j++) {
  //     sumTemporal = sumArray(arr.slice(j, i + j));
  //     if (sumMax <= sumTemporal) {
  //       sumMax = sumTemporal;
  //     }
  //   }
  // }
  // return sumMax;

  // Refactored
  let sumMax = 0;
  let sumMin = 0;
  let sumAll = 0;
  for (let i = 0; i < arr.length; i++) {
    sumAll += arr[i];
    // console.log(sumAll);
    sumMin = Math.min(sumMin, sumAll);
    // console.log(sumMin);
    sumMax = Math.max(sumMax, sumAll - sumMin);
    // console.log(sumMax);
  }
  return sumMax;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
