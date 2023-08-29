function getCount(str) {
  let letters = str.split("");
  let values = ["a", "e", "i", "o", "u"];
  let count = 0;
  //   console.log(letters)
  //   letters.map((letter)=> values.includes(letter)? count+=1:count+=0)
  letters.map((letter) => {
    if (values.includes(letter)) {
      count += 1;
    }
  });

  return count;
}

// test

console.log(getCount("abracadabra"));
