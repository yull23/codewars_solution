function likes(names) {
  if (names.length == 0) return "no one likes this";
  if (names.length == 1) return `${names[0]} likes this`;
  if (names.length == 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length == 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length > 3)
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
// test

let data;
data = [];
console.log(likes(data));
data = ["Peter"];
console.log(likes(data));
data = ["Jacob", "Alex"];
console.log(likes(data));
data = ["Max", "John", "Mark"];
console.log(likes(data));
data = ["Alex", "Jacob", "Mark", "Max"];
console.log(likes(data));
