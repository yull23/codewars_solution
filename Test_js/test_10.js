function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = [];
  for (const i of birds) {
    if (!geese.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

let data = [
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
];
console.log(gooseFilter(data));
