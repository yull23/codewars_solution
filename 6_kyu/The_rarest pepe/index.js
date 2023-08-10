function findRarestPepe(pepes) {
  let dictionaryPepes = {};

  for (let item of pepes) {
    if (dictionaryPepes[item]) {
      dictionaryPepes[item]++;
    } else {
      dictionaryPepes[item] = 1;
    }
  }

  let rarePepe = Math.min(...Object.values(dictionaryPepes));
  // console.log(rarePepe);
  let result = Object.keys(dictionaryPepes).filter(
    (key) => dictionaryPepes[key] === rarePepe
  );
  // console.log(result);

  if (result.length == pepes.length || rarePepe < 5) {
    if (result.length == 1) {
      return result[0];
    } else {
      return result.sort();
    }
  } else {
    return "No rare pepes!";
  }
}

// test
let pepe;

pepes = [
  "Donald Trump Pepe",
  "Melania Trump Pepe",
  "Clown Pepe",
  "Clown Pepe",
  "Donald Trump Pepe",
];
console.log(findRarestPepe(pepes));
pepes = [
  "Go Pepe",
  "Deep Learning Pepe",
  "Machine Learning Pepe",
  "Machine Learning Pepe",
  "Machine Learning Pepe",
];
console.log(findRarestPepe(pepes));
pepes = [
  "Codewars Pepe",
  "Codewars Pepe",
  "Codewars Pepe",
  "Codewars Pepe",
  "Codewars Pepe",
];
console.log(findRarestPepe(pepes));
