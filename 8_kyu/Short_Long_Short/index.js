function solution(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  } else {
    return a + b + a;
  }
  // your code here
}
// test
console.log(solution("45", "1"));
console.log(solution("13", "200"));
console.log(solution("Soon", "Me"));
console.log(solution("U", "False"));
