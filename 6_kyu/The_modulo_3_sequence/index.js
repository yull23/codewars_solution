function sequence(n) {
  //   let count = 2;
  //   if (n == 1) {
  //     return 1;
  //   } else if (n == 0) {
  //     return 0;
  //   }
  //   let results=[1,0,1,1,2,0,2,2];
  // Refactored
  return [1, 0, 1, 1, 2, 0, 2, 2][n % 8];
}

// test
console.log(sequence(20));
console.log(sequence(8));
console.log(sequence(41));
console.log(sequence(48));
console.log(sequence(48));
console.log(sequence(63));
console.log(sequence(11));
console.log(sequence(51013947783));
