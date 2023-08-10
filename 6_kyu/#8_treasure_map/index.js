function findX(m) {
  let row = (m.length - 1) / 2;
  let column = (m[0].length - 1) / 2;

  let valueArray;
  let direction;
  let move;
  let lenMove;

  function directionOp(direction, row, column, move) {
    switch (direction) {
      case "N":
        row = row - move;
        break;
      case "S":
        row = row + move;
        break;
      case "E":
        column = column + move;
        break;
      case "W":
        column = column - move;
        break;
    }
    return [row, column];
  }

  function arrayRepeat(array, arrayParent) {
    for (let i of arrayParent) {
      if (array[0] == i[0] && array[1] == i[1]) {
        return true;
      }
    }
    return false;
  }
  let positions = [];

  while (true) {
    valueArray = m[row][column];
    if (valueArray == "X") {
      return [row, column];
    }
    if (arrayRepeat([row, column], positions)) {
      return null;
    }
    positions.push([row, column]);
    direction = valueArray[0];
    move = parseInt(valueArray.slice(1, valueArray.length));
    [row, column] = directionOp(direction, row, column, move);

    if (
      row < 0 ||
      column < 0 ||
      row > m.length - 1 ||
      column > m[0].length - 1
    ) {
      return null;
    }
  }
}

let data;

data = [
  ["X", "W3", "E2", "S3", "S4"],
  ["S1", "E1", "N1", "S2", "W1"],
  ["S2", "E1", "N2", "S1", "N3"],
  ["N1", "X", "S2", "E1", "W4"],
  ["X", "E3", "X", "N2", "W4"],
];
console.log(findX(data));

data = [
  ["X", "W3", "E2", "S3", "S4"],
  ["S1", "E1", "N1", "S2", "W1"],
  ["S2", "E1", "N4", "S1", "N3"],
  ["N1", "X", "S2", "E1", "W4"],
  ["X", "E3", "X", "N2", "W4"],
];
console.log(findX(data));

data = [
  ["X", "W3", "E2", "S3", "S2"],
  ["S1", "E1", "N1", "S2", "W1"],
  ["S2", "E1", "N2", "S1", "E2"],
  ["N1", "X", "S2", "E1", "W4"],
  ["X", "E3", "X", "N2", "W4"],
];
console.log(findX(data));
