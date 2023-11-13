let a = [0, 1, 4, 5, 6, 9];
let b = {};
let suma = 0;
let line;
for (const i of a) {
  for (const j of a) {
    suma = (i + j) % 10;
    // console.log(line);
    if (Object.keys(b).includes(suma.toString())) {
      b[suma].push([i, j]);
    } else {
      b[suma] = [[i, j]];
    }
  }
}

console.log(b);
