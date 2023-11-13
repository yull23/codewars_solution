let values = {
  init: ["1", "6", "8", "9"],
  mid: ["0", "1", "6", "8", "9"],
  end: ["0", "1", "8"],
};

// para todos los valores len <= n-1
function countNumber(data) {
  let a = 4;
  let b = 5;
  let c = 3;
  let sum = 0;

  for (let i = 1; i <= data; i++) {
    if (i == 1) {
      sum += 3;
      continue;
    }
    if (i == 2) {
      sum += 4;
      continue;
    }
    if (i == 3) {
      sum += 12;
      continue;
    }
    if (i == 4) {
      sum += 20;
      continue;
    }
    if (i >= 5) {
      if (i % 2 == 0) {
        sum += a * b ** (i / 2 - 1);
      } else {
        sum += a * c * b ** ((i + 1) / 2 - 2);
      }
    }
  }
  return sum;
}

function indexNext(x, array = ["0", "1", "6", "8", "9"]) {
  if (array.includes(x)) return array.indexOf(x);
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i]) >= parseInt(x)) {
      return i;
    }
  }
  return 2;
}
