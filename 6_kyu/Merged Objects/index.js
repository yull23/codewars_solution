function objConcat(o) {
  let result = o.reduce((acc, element) => {
    return Object.assign(acc, element);
  }, {});
  return result;
}
// test

let a = { 1: "1", 2: "2", 3: "3" };
let b = { 3: "4", 5: "6", 6: "7", 7: "8" };
let c = { 5: "9", 8: "9", 6: "12", 23: "35" };
let o = [a, b, c];
console.log(objConcat(o), {
  1: "1",
  2: "2",
  3: "4",
  5: "9",
  6: "12",
  7: "8",
  8: "9",
  23: "35",
});
