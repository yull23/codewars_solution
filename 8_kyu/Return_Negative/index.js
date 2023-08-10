function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}

// test
console.log(makeNegative(42));
