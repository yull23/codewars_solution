function sc(arr, n) {
  if (n == 0) return arr;
  let result;
  for (let j = 1; j <= n; j++) {
    result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        if (i + 1 < arr.length) {
          result.push(arr[i] * 3 + 1 + arr[i + 1]);
        } else {
          result.push(arr[i] * 3 + 1);
        }
        i++;
      } else {
        result.push(arr[i] / 2);
        result.push(arr[i] / 2);
      }
    }
    arr = [...result];
  }

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 != 0) {
  //     if (i + 1 < arr.length) {
  //       result.push(arr[i] * 3 + 1 + arr[i + 1]);
  //     } else {
  //       result.push(arr[i] * 3 + 1);
  //     }
  //     i++;
  //   } else {
  //     result.push(arr[i] / 2);
  //     result.push(arr[i] / 2);
  //   }
  // }
  // arr = [...result];
  return arr;
}
console.log(sc([3, 4, 5], 6));
