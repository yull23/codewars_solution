function findUniq(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i == 0) {
      if (arr[0] != arr[1] && arr[0] != arr[2]) return arr[0];
    } else if (arr[i] != arr[0]) {
      return arr[i];
    }
  }
}
// test
console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));
