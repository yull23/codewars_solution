function upsideDown(x, y) {
  let right = parseInt(y);
  let left = parseInt(x);
  //your code goes here. you can do it!
  let xLen = x.length;
  let yLen = y.length;
  let isPairX = xLen % 2 == 0;
  let isPairY = yLen % 2 == 0;
  console.log(isPairX, isPairY);
  let a = 3;
  let b = 4;
  let c = 2;
  let values = {
    init: ["1", "6", "8", "9"],
    mid: ["0", "1", "6", "8", "9"],
    end: ["0", "1", "8"],
  };

  let data = {
    0: 0,
    1: 1,
    6: 9,
    8: 8,
    9: 6,
  };
  function isReverse(array) {
    let indexMid = array.length / 2;
    for (let i = 0; i < indexMid; i++) {
      if (array[i] != data[array[array.length - 1 - i]]) {
        return false;
      }
    }
    return true;
  }
  // console.log(isReverse("1961"));

  function indexNext(x, array = ["0", "1", "6", "8", "9"]) {
    if (array.includes(x)) return array.indexOf(x);
    for (let i = 0; i < array.length; i++) {
      if (parseInt(array[i]) >= parseInt(x)) {
        return i;
      }
    }
    return 2;
  }
  console.log(indexNext("1", ["1", "6", "8", "9"]));

  function closestValid(number) {
    let numberString = number.toString();
    let lenNumber = numberString.length;
    let isPair = numberString.length % 2 == 0 ? true : false;
    let resultIndex = [];
    let result = [];
    let arrayValues;
    let index;

    for (let i = 0; i < numberString.length / 2; i++) {
      if (i == 0) {
        arrayValues = values.init;
      } else if (i == Math.floor(lenNumber / 2) && lenNumber % 2 != 0) {
        arrayValues = values.end;
      } else {
        arrayValues = values.mid;
      }
      console.log(arrayValues);
      console.log(numberString[i]);
      console.log(indexNext(numberString[i], arrayValues));
      index = indexNext(numberString[i], arrayValues);
      resultIndex.push(index);
      result.push(arrayValues[index]);
    }

    return [result, isPair];
  }

  console.log(closestValid(1661));
  console.log(closestValid(1689));
}

upsideDown("0", "10");

let data = ["6", "6"];

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

console.log(countNumber(1));
console.log(countNumber(2));
console.log(countNumber(3));
console.log(countNumber(4));
console.log(countNumber(5));
console.log(countNumber(6));
console.log(countNumber(16));

console.log("12345678900000000".length);
