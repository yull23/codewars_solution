Array.prototype.reduce = function (process, initial) {
  let startIndex = 0;

  if (initial === undefined) {
    initial = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    initial = process(initial, this[i]);
  }
  return initial;
};
// test

console.log(
  ["a", "y", "!"].reduce(function (x, y) {
    return x + y;
  }, "y")
);
