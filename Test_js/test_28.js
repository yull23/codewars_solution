function palindromize(number) {
  if (number <= 9) return `0 ${number}`;
  let count = 0;

  while (true) {
    number += parseInt(`${number}`.split("").reverse().join(""));
    count++;
    if (number === parseInt(`${number}`.split("").reverse().join(""))) {
      return `${count} ${number}`;
    }
  }
}

console.log(palindromize(195));
