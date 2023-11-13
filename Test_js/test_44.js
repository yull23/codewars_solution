let solve = function (equations) {
  // Obteniendo variables

  let variables = [];
  equations.forEach((equation) => {
    let vars = equation.match(/[a-zA-Z]+/g);
    vars.forEach((v) => {
      if (!variables.includes(v)) variables.push(v);
    });
  });

  let quocients = [];
  equations.forEach((equation) => {
    let quocient = [];
    variables.forEach((variable) => {
      let index = equation.indexOf(variable);
      // console.log(variable, index);
      quocient.push(getQuotient(index, equation));
    });
    // console.log(quocient);
    quocients.push(quocient);
  });

  console.log(quocients);
  console.log(determinant(quocients));

  return quocients;
};
console.log(solve(["2x+8.56=-4.56y", "-x+4y=14"]));

function getQuotient(index, array) {
  if (index == -1) return 0;
  if (index == 0) return 1;
  let result = [];
  let indexEqual = array.indexOf("=");
  let symbolValue = indexEqual < index ? -1 : 1;
  while (index > 0) {
    index--;
    if (array[index] == "=") break;
    result.unshift(array[index]);
    if (["+", "-"].includes(array[index])) {
      index = -1;
    }
  }

  let resultNumber = result.join("");
  if (resultNumber == "+") resultNumber = 1;
  if (resultNumber == "-") resultNumber = -1;
  let number = parseFloat(resultNumber) * symbolValue;
  return number;
}
let data = "-3.56x+8.56y=-4.56";
console.log(getQuotient(data.indexOf("x"), data));

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
