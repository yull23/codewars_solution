function solution(number) {
  let result = 0;
  if (number <= 0) return 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0) result += i;
    if (i % 5 == 0 && i % 3 > 0) result += i;
  }
  return result;
}
// test
console.log(solution(10));
