function squaresNeeded(grains) {
  // Refactored
  if (grains == 0) return 0;
  return Math.floor(Math.log2(grains)) + 1;
}
// test
console.log(squaresNeeded(0));
console.log(squaresNeeded(1));
console.log(squaresNeeded(2));
console.log(squaresNeeded(3));
console.log(squaresNeeded(4));
