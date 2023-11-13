var Sudoku = function (data) {
  let nDim = data.length ** 0.5;
  let values = Array.from({ length: data.length }, (_, index) => index + 1);

  let isDimValid = function () {
    if (Number.isInteger(data.length ** 0.5)) return true;
    return false;
  };

  let isSquare = function () {
    let verification = data.every((element) => element.length == data.length);
    return verification;
  };

  let isFullInteger = function () {
    let verification = data.every((element) =>
      element.every(
        (number) => number <= nDim && number >= 0 && Number.isInteger(number)
      )
    );
    return verification;
  };

  let lines = function () {
    let transposeResult = [];
    let quadrantsResult = Object.fromEntries(
      Array.from({ length: data.length }, (_, i) => [i + 1, []])
    );
    let transposed;
    for (let i = 0; i < data.length; i++) {
      transposed = [];
      for (let j = 0; j < data.length; j++) {
        // to Tranposed
        transposed.push(data[j][i]);
        // to quadrant
        let row = Math.floor(i / nDim);
        let column = Math.floor(j / nDim);
        let quadrant = nDim * row + column + 1;
        quadrantsResult[quadrant].push(data[i][j]);
      }
      transposeResult.push(transposed);
    }
    return [transposeResult, Object.values(quadrantsResult)];
  };

  let validationSudoku = function () {
    let matrixs = [data, ...lines()];
    for (let matrix of matrixs) {
      for (let line of matrix) {
        let lineSort = [...line].sort((a, b) => a - b);
        if (JSON.stringify(lineSort) != JSON.stringify(values)) return false;
      }
    }
    return true;
  };

  return {
    isValid: function () {
      // YOUR SOLUTION
      if (isFullInteger() && isSquare() && isDimValid())
        return validationSudoku();
      return false;
    },
  };
};

// test
data = [
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],

  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],

  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4],
];

let sudoku = new Sudoku(data);

console.log(sudoku.isValid());

data = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4],
  [9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8],
  [13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

  [2, 1, 4, 3, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 16, 15],
  [6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 16, 15, 2, 1, 4, 3],
  [10, 9, 12, 11, 14, 13, 16, 15, 2, 1, 4, 3, 6, 5, 8, 7],
  [14, 13, 16, 15, 2, 1, 4, 3, 6, 5, 8, 7, 10, 9, 12, 11],

  [3, 4, 1, 2, 7, 8, 5, 6, 11, 12, 9, 10, 15, 16, 13, 14],
  [7, 8, 5, 6, 11, 12, 9, 10, 15, 16, 13, 14, 3, 4, 1, 2],
  [11, 12, 9, 10, 15, 16, 13, 14, 3, 4, 1, 2, 7, 8, 5, 6],
  [15, 16, 13, 14, 3, 4, 1, 2, 7, 8, 5, 6, 11, 12, 9, 10],

  [4, 3, 2, 1, 8, 7, 6, 5, 12, 11, 10, 9, 16, 15, 14, 13],
  [8, 7, 6, 5, 12, 11, 10, 9, 16, 15, 14, 13, 4, 3, 2, 1],
  [12, 11, 10, 9, 16, 15, 14, 13, 4, 3, 2, 1, 8, 7, 6, 5],
  [16, 15, 14, 13, 4, 3, 2, 1, 8, 7, 6, 5, 12, 11, 10, 9],
];

let sudokuTwo = new Sudoku(data);
console.log(sudokuTwo.isValid());
