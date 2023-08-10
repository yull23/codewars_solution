function buildAWall(x, y) {
  if (
    x >= 1 &&
    y >= 1 &&
    Number.isInteger(x) &&
    Number.isInteger(y) &&
    typeof x == "number" &&
    typeof y == "number"
  ) {
    if (x * y > 10000) {
      return "Naah, too much...here's my resignation.";
    }
    let i;
    let fullRow = "■■|".repeat(y - 1) + "■■";
    let incompleteRow = "■" + "|■■".repeat(y - 1) + "|■";
    let result = "";
    for (i = x; i >= 1; i--) {
      if (i % 2 == 0) {
        result += incompleteRow + "\n";
      } else {
        result += fullRow;
        if (i != 1) {
          result += "\n";
        }
      }
    }
    return result;
  } else {
    return null;
  }
}

console.log(buildAWall(10, 7));
console.log(buildAWall(4, 5));
console.log(buildAWall("eight", [3]));
console.log(buildAWall(12, -4));
console.log(buildAWall(0, 9));
