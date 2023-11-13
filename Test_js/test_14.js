let charStart = ["1", "6", "8", "9"];
let charValid = ["0", "1", "6", "8", "9"];
let charMid = ["0", "1", "8"];

let data = "123432";
function isReverse(array) {
  let data = {
    0: 0,
    1: 1,
    6: 9,
    8: 8,
    9: 6,
  };
  let indexMid = array.length / 2;
  for (let i = 0; i < indexMid; i++) {
    console.log(i, array.length - 1 - i);
    if (array[i] != data[array[array.length - 1 - i]]) {
      return false;
    }
  }

  return true;
}

console.log(isReverse(""));
console.log(isReverse(data));

function rightLimit(x) {
  let indexRigth = x;
  while (!isReverse(indexRigth.toString())) {
    indexRigth++;
  }
  return indexRigth;
}
function leftLimit(x) {
  let indexRigth = x;
  while (!isReverse(indexRigth.toString())) {
    indexRigth--;
  }
  return indexRigth;
}
console.log(rightLimit(100000));
console.log(leftLimit(1000));

function indexNext(x, array = ["0", "1", "6", "8", "9"]) {
  if (array.includes(x)) return array.indexOf(x);
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i]) > parseInt(x)) {
      return i;
    }
  }
}
function upsideDown(x, y) {
  let data = ["0", "1", "6", "8", "9"];
  let a = x.toString();
  let b = y.toString();
  let resultIndex = [];
  let result = [];
  let index;

  for (let i = 0; i <= (a.length - 1) / 2; i++) {
    if (i == 0) {
      index = indexNext(a[i], ["1", "6", "8", "9"]);
      resultIndex.push(index);
      result.push(["1", "6", "8", "9"][index]);
    } else if (i == (a.length - 1) / 2) {
      index = indexNext(a[i], ["0", "1", "8"]);
      resultIndex.push(index);
      result.push(["0", "1", "8"][index]);
    } else {
      index = indexNext(a[i], ["0", "1", "6", "8", "9"]);
      resultIndex.push(index);
      result.push(["0", "1", "6", "8", "9"][index]);
    }
  }
  console.log(resultIndex);
  console.log(result);
}

function printResult(array, aLen) {
  let init = ["1", "6", "8", "9"];
  let intermediate = ["0", "1", "6", "8", "9"];
  let end = ["0", "1", "8"];
  let result = "";
  let midIndex = aLen;

  return result;
}
console.log(printResult([1, 2, 2], 5));

function closestValid(number) {
  let a = number.toString();
  let resultIndex = [];
  let result = [];

  for (let i = 0; i <= (a.length - 1) / 2; i++) {
    if (i == 0) {
      index = indexNext(a[i], ["1", "6", "8", "9"]);
      resultIndex.push(index);
      result.push(["1", "6", "8", "9"][index]);
    } else if (i == (a.length - 1) / 2) {
      index = indexNext(a[i], ["0", "1", "8"]);
      resultIndex.push(index);
      result.push(["0", "1", "8"][index]);
    } else {
      index = indexNext(a[i], ["0", "1", "6", "8", "9"]);
      resultIndex.push(index);
      result.push(["0", "1", "6", "8", "9"][index]);
    }
  }
  return [resultIndex, a.length];
}

console.log(closestValid(999));

function nextValue(array, aLen) {
  let a = 3;
  let b = 4;
  let c = 2;
  let end = aLen % 2 == 0 ? b : c;
  // console.log(end);
  for (let i = array.length - 1; i >= 0; i--) {
    if (i == array.length - 1) {
      console.log(i);
      array[i] += 1;
      if (array[i] <= end) {
        return array;
      } else {
        array[i - 1] += 1;
        array[i] = 0;
      }
    } else if (i == 0) {
      if (array[i] <= a) {
        return array;
      } else {
        return false;
      }
    } else {
      console.log(i);
      if (array[i] < b) {
        return array;
      } else {
        array[i - 1] += 1;
        array[i] = 0;
      }
    }
  }
}

function beforeValue(array, aLen) {
  let a = 3;
  let b = 4;
  let c = 2;
  let end = aLen % 2 == 0 ? b : c;
  // console.log(end);
  for (let i = array.length - 1; i >= 0; i--) {
    if (i == array.length - 1) {
      array[i] -= 1;
      if (array[i] >= 0) {
        return array;
      } else {
        array[i - 1] -= 1;
        array[i] = end;
      }
    } else if (i == 0) {
      if (array[i] >= 0) {
        return array;
      } else {
        return false;
      }
    } else {
      console.log("3");
      if (array[i] >= 0) {
        return array;
      } else {
        array[i - 1] -= 1;
        array[i] = b;
      }
    }
  }
}

console.log(beforeValue([0, 1, 2], 6));
console.log(nextValue([0, 1, 2], 6));
// upsideDown(115240, 1111125320);

// function remainingValues(x, array) {
//   return array.length - array.indexOf(x);
// }
// console.log(remainingValues("6", ["0", "1", "6", "8", "9"]));
// console.log(remainingValues("6", ["0", "1", "8"]));
// console.log(remainingValues("6", ["1", "6", "8", "9"]));
