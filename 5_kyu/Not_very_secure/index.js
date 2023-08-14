function alphanumeric(string) {
  if (string == "") return false;
  let letter = "abcdefghijklmnñopqrstuvwxyz";
  let letterUp = letter.toUpperCase();
  let numbers = "0123456789";
  for (let i of string.split("")) {
    if (
      letter.includes(i) == false &&
      letterUp.includes(i) == false &&
      numbers.includes(i) == false
    )
      return false;
  }
  return true;
}

// test

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("     "));
