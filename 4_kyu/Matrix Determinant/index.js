function determinant(m) {
  if (m.length == 1) return m[0][0];
  if (m.length == 2) return m[0][0] * m[1][1] - m[1][0] * m[0][1];
  let det = 0;
  let i, j;
  for (i = 0; i <= m.length - 1; i++) {
    matrixSubM = [];
    for (j = 0; j <= m.length - 1; j++) {
      if (j != 0) {
        lineTemporal = [...m[j]];
        lineTemporal.splice(i, 1);
        matrixSubM.push(lineTemporal);
      }
    }
    det += (-1) ** i * determinant(matrixSubM) * m[0][i];
  }
  return det;
}

function subMatrix(matrix) {
  let i, j;
  let result = [];
  let matrixSubM;
  let lineTemporal;
  for (i = 0; i <= matrix.length - 1; i++) {
    matrixSubM = [];
    for (j = 0; j <= matrix.length - 1; j++) {
      if (j != 0) {
        lineTemporal = [...matrix[j]];
        lineTemporal.splice(i, 1);
        matrixSubM.push(lineTemporal);
      }
    }
    result.push(matrixSubM);
  }
  return result;
}
// test
let data = [
  [2, 4, 2, 1],
  [3, 1, 1, 1],
  [1, 2, 0, 1],
  [1, 2, 0, 5],
];
data = [
  [2, 4, 2],
  [3, 1, 1],
  [1, 2, 0],
];

console.log(determinant(data));
