function maxlen(l1, l2) {
  let maxLen = Math.max(l1, l2);
  let minLen = Math.min(l1, l2);
  if (maxLen / minLen < 2) {
    return maxLen / 2;
  } else if (maxLen / minLen < 3) {
    return minLen;
  } else {
    return maxLen / 3;
  }
}
// test

console.log(maxlen(5, 12));
console.log(maxlen(12, 5));
