function fizzbuzz(n) {
  //
  let result = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 15 == 0) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    }
    result.push(i);
  }
  return result;
}

console.log(fizzbuzz(15));
