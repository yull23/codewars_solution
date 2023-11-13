function loneliest(str) {
  let letters = str.split(" ").join("");
  console.log(letters);
  let counts = [];
  let count = 0;
  str.split("").forEach((element, index) => {
    if (letters.includes(element)) {
      counts.push(count);
      count = 0;
    } else {
      count++;
    }
  });

  counts.push(count);
  if (str[0] == " ") counts[0] = 0;
  if (str[str.length - 1] == " ") counts[counts.length - 1] = 0;
  let countsLetters = [];
  let spaces = [];
  counts.forEach((element, index) => {
    if (index < counts.length - 1) {
      countsLetters.push(element + counts[index + 1]);
      spaces.push([letters[index], element + counts[index + 1]]);
    }
  });
  let max = Math.max(...countsLetters);
  console.log(max);
  console.log(spaces);
  return spaces
    .filter((element) => element[1] == max)
    .map((element) => element[0]);
}

let a = "abc d   ef  g   h i j      ";
console.log(loneliest(a));
