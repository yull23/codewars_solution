var isSquare = function (n) {
  if (parseInt(Math.sqrt(n)) == Math.sqrt(n)) {
    return true;
  } else {
    return false;
  }
};
// test
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
