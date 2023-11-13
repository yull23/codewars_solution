function nextBigger(n) {
  // Methods
  function isGrowing(array) {
    return array.some((element, index) => {
      if (index == array.length - 1) {
        return false;
      } else {
        return element < array[index + 1];
      }
    });
  }

  function nextDigit(array, x) {
    return array[array.indexOf(x) + 1] || array[0];
  }

  /// Code
  let digits = String(n)
    .split("")
    .map((x) => parseInt(x));
  //    Return ♫
  if (!isGrowing(digits)) return -1;
  //    Return ♫
  let list = [...digits].sort((a, b) => a - b);
  let digitsReverse = [...digits].reverse();
  console.log(digits);

  let i = 1;
  let result;
  while (i != 2) {
    let digitsCurrent = [...list];
    result = [];
    console.log(digitsCurrent);
    digitsReverse.forEach((element) => {
      let temporal = nextDigit(digitsCurrent, element);
      result.unshift(temporal);
      digitsCurrent.splice(digitsCurrent.indexOf(temporal), 1);
      console.log([digitsCurrent, element, temporal]);
    });
    i++;
  }
  console.log(result);
}

console.log(nextBigger(423859));

function nextDigit(array, x) {
  return array[array.indexOf(x) + 1] || array[0];
}
console.log(nextDigit([3, 4, 5], 5));

function isGrowing(array) {
  return array.some((element, index) => {
    if (index == array.length - 1) {
      return false;
    } else {
      return element < array[index + 1];
    }
  });
}

console.log(isGrowing([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function permutaciones(array) {
  const resultado = [];

  function permutar(arr, temp = []) {
    if (!arr.length) {
      resultado.push([...temp]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const elemento = arr.splice(i, 1)[0];
      temp.push(elemento);
      permutar(arr, temp);
      temp.pop();
      arr.splice(i, 0, elemento);
    }
  }

  permutar(array);

  return resultado;
}

const personas = ["A", "B", "C", "D", "E"];
const asientos = 5;

const combinacionesPosibles = permutaciones(personas);
console.log(combinacionesPosibles);
