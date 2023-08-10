function abbrevName(name) {
  return (name.split(" ")[0][0] + "." + name.split(" ")[1][0]).toUpperCase();
}
// test

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));
