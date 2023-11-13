let a = 3;
let b = 4;
let c = 2;

function nextValue(array, aLen) {
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

console.log(nextValue([0, 1, 2], 6));
console.log(beforeValue([0, 1, 2], 6));
