function rectangleRotation(a, b) {
  let k = 2 ** 0.5 / 2;
  let row = Math.floor(b / k / 2);
  let column = Math.floor(a / k / 2);
  let rowMajor = Math.floor(row / 2);
  let rowSecondary = row - rowMajor;
  let colMajor = Math.floor(column / 2);
  let colSecundary = column - colMajor;
  let pointsMajor = (2 * rowMajor + 1) * (2 * colMajor + 1);
  let pointsSecundary = 2 * rowSecondary * (2 * colSecundary);
  return pointsMajor + pointsSecundary;
}

console.log(rectangleRotation(6, 4));
