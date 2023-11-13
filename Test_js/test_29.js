let a = [1, 2];
let b = [5, 7];

function mMult(a, b) {
  return a.reduce((acc, element, index) => (acc += element * b[index]), 0);
}
console.log(mMult(a, b));

function transpuestaM(array) {
  let result = [];
  let row;
  for (let i = 0; i < array[0].length; i++) {
    row = [];
    for (let j = 0; j < array.length; j++) {
      row.push(array[j][i]);
    }
    result.push(row);
  }
  return result;
}

function getMatrixProduct(x, y) {
  function mMult(a, b) {
    return a.reduce((acc, element, index) => (acc += element * b[index]), 0);
  }
  function transpuestaM(array) {
    let result = [];
    let row;
    for (let i = 0; i < array[0].length; i++) {
      row = [];
      for (let j = 0; j < array.length; j++) {
        row.push(array[j][i]);
      }
      result.push(row);
    }
    return result;
  }
  let yT = transpuestaM(y);
  let xLen = x.length;
  let yLen = yT.length;

  let result = [];
  let row;

  for (let i = 0; i < xLen; i++) {
    row = [];
    for (let j = 0; j < yLen; j++) {
      row.push(mMult(x[i], yT[j]));
    }
    result.push(row);
  }

  // x.forEach((element) => {});
  return result;
}

let x = [
  [1, 2],
  [3, 4],
];

let y = [
  [5, 6],
  [7, 8],
];

console.log(getMatrixProduct(x, y));
