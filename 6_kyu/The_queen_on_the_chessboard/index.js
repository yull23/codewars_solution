function availableMoves(position) {
  let result = [];
  // Variable iniciales
  let row;
  let column;
  let rows = [1, 2, 3, 4, 5, 6, 7, 8];
  let columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
  // Declarando column y row
  if (position != null) {
    row = parseInt(position[1]);
    column = columns.indexOf(position[0]) + 1;
  }
  // Verificación
  if (
    !rows.includes(row) ||
    !columns.includes(position[0]) ||
    position.length != 2
  ) {
    return [];
  }
  // Definiendo filas y columnas, antes y despues de la posición

  let rowBefore = 0,
    rowAfter = 0,
    columnBefore = 0,
    columnAfter = 0;
  let i;

  for (i = 1; i <= 8; i++) {
    if (i != row) {
      result.push(position[0] + i);
    }
    if (i != column) {
      result.push(columns[i - 1] + row);
    }
    rowBefore = row - i;
    columnBefore = column - i;
    rowAfter = row + i;
    columnAfter = column + i;

    if (rowBefore >= 1 && columnBefore >= 1) {
      result.push(columns[columnBefore - 1] + rowBefore);
    }
    if (rowBefore >= 1 && columnAfter <= 8) {
      result.push(columns[columnAfter - 1] + rowBefore);
    }
    if (rowAfter <= 8 && columnBefore >= 1) {
      result.push(columns[columnBefore - 1] + rowAfter);
    }
    if (rowAfter <= 8 && columnAfter <= 8) {
      result.push(columns[columnAfter - 1] + rowAfter);
    }
  }
  return result.sort();
}
// test

let position;

position = "A1";
console.log(availableMoves(position));
position = "C5";
console.log(availableMoves(position));
position = "H3";
console.log(availableMoves(position));
