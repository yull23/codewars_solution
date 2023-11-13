function properFractions(n) {
  function mcd(a, b) {
    if (a == 0 || b == 0) return b;
    let c = b;
    b = a;
    a = c % a;
    console.log(a, b);
    return mcd(a, b);
  }
  let count = 0;
  let i = 1;
  while (i < n) {
    if (mcd(i, n) == 1) count += 1;
    console.log(i);
    i++;
  }
  //your code here
  return count;
}

// console.log(properFractions(2));
// console.log(properFractions(5));
// console.log(properFractions(15));
// console.log(properFractions(30));

function factorsFunction(num) {
  const factors = [];
  let d = 2;

  while (num > 1) {
    if (num % d === 0) {
      let exponent = 0;
      while (num % d === 0) {
        num /= d;
        exponent++;
      }
      factors.push(d);
    }

    if (d * d > num) {
      if (num > 1) {
        factors.push(num);
      }
      break;
    }

    d++;
  }

  return factors;
}

function factorMult(array) {
  const resultados = {};

  function combinarMultiplicaciones(actual, indice) {
    if (actual.length > 1) {
      const resultado = actual.reduce((a, b) => a * b);
      resultados[actual.length] = resultados[actual.length] || [];
      resultados[actual.length].push(resultado);
    }

    for (let i = indice + 1; i < array.length; i++) {
      combinarMultiplicaciones([...actual, array[i]], i);
    }
  }

  for (let i = 0; i < array.length; i++) {
    combinarMultiplicaciones([array[i]], i);
  }
  resultados[1] = array;

  return resultados;
}

console.log(factorMult([2, 3, 4]));

function properFractions(n) {
  //your code here
  let factors = factorsFunction(n);
  let nFactors = factorMult(factors);

  console.log(nFactors);
}
console.log(properFractions(150));
