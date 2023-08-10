function deepCount(a) {
  if (a.length == 0) return 0;
  if (!Array.isArray(a)) return 0;
  let count = 0;
  for (let i of a) {
    count += 1 + deepCount(i);
  }
  return count;
}

// test
console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));
