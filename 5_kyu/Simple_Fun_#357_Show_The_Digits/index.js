function show(digits, size) {
  let numberSpace = size + 2;
  let positions0 = " ".repeat(numberSpace);
  let positions1 = " " + "-".repeat(numberSpace - 2) + " ";
  let positions2 = " ".repeat(numberSpace - 1) + "|";
  let positions3 = "|" + " ".repeat(numberSpace - 1);
  let positions4 = "|" + " ".repeat(numberSpace - 2) + "|";
  let numbers = {
    0: [positions1, positions4, positions0, positions4, positions1],
    1: [positions0, positions2, positions0, positions2, positions0],
    2: [positions1, positions2, positions1, positions3, positions1],
    3: [positions1, positions2, positions1, positions2, positions1],
    4: [positions0, positions4, positions1, positions2, positions0],
    5: [positions1, positions3, positions1, positions2, positions1],
    6: [positions1, positions3, positions1, positions4, positions1],
    7: [positions1, positions2, positions0, positions2, positions0],
    8: [positions1, positions4, positions1, positions4, positions1],
    9: [positions1, positions4, positions1, positions2, positions1],
  };
  let top = "",
    midOne = "",
    mid = "",
    midTwo = "",
    bot = "";
  for (let i = 0; i < digits.split("").length; i++) {
    top += numbers[parseInt(digits[i])][0];
    midOne += numbers[parseInt(digits[i])][1];
    mid += numbers[parseInt(digits[i])][2];
    bot += numbers[parseInt(digits[i])][4];
    midTwo += numbers[parseInt(digits[i])][3];
  }
  // checking
  function reduceResult(string) {
    for (let i = string.length - 1; i >= 0; i--) {
      if (string[i] != " ") return string.slice(0, i + 1);
    }
    return "";
  }
  top = reduceResult(top);
  midOne = reduceResult(midOne);
  mid = reduceResult(mid);
  bot = reduceResult(bot);
  midTwo = reduceResult(midTwo);

  top += "\n";
  midOne = (midOne + "\n").repeat(size);
  mid += "\n";
  midTwo = (midTwo + "\n").repeat(size);
  let result = top + midOne + mid + midTwo + bot;
  return result;
}
// test
console.log(show("888", 3));
console.log(show("1234567890", 3));
