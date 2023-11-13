function trailingZeros(num, base) {
  function zerosPrim(n, prim) {
    let count = 0;
    while (n > 0) {
      n = Math.floor(n / prim);
      count += n;
    }
    return count;
  }
  ////
  function factors(num) {
    const factors = [];
    let d = 2;

    while (num > 1) {
      if (num % d === 0) {
        let exponent = 0;
        while (num % d === 0) {
          num /= d;
          exponent++;
        }
        factors.push([d, exponent]);
      }

      if (d * d > num) {
        if (num > 1) {
          factors.push([num, 1]);
        }
        break;
      }

      d++;
    }

    return factors;
  }
  ////
  function isPrim(x) {
    let count = 0;
    let maxFactor = Math.floor(x ** 0.5);
    for (let i = 2; i <= maxFactor; i++) {
      if (x % i == 0) {
        count++;
      }
      if (count > 0) return false;
    }
    return count == 0 ? true : false;
  }
  ////
  if (isPrim(base)) return zerosPrim(num, base);

  let factores = factors(base).slice(-1)[0];
  let zeros = Math.floor(zerosPrim(num, factores[0]) / factores[1]);

  return zeros;
}

console.log(trailingZeros(270627067570612, 2476062845));

//////////////////////////////
function Factors(num) {
  const factors = [];
  let count;
  let numX = num;
  for (let i = 2; i <= num; i++) {
    console.log(i, numX);
    count = 0;
    while (Number.isInteger(numX / i)) {
      numX /= i;
      numX /= i ** count;
      count++;
    }
    if (count > 0) factors.push([i, count]);
    if (numX < i) break;
  }

  return factors;
}

/////////////////////////////////////////////////////
function isPrim(x) {
  let count = 0;
  let maxFactor = Math.floor(x ** 0.5);
  for (let i = 2; i <= maxFactor; i++) {
    if (x % i == 0) {
      count++;
    }
  }
  return count == 0 ? true : false;
}

/////////////////////////////////////////////////////
function zerosPrim(n, prim) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / prim);
    count += n;
  }
  return count;
}
/////////////////////////////////////////////////////
function factorizarCanonicamente(numero) {
  const factores = [];
  let divisor = 2;

  while (numero > 1) {
    if (numero % divisor === 0) {
      let exponente = 0;
      while (numero % divisor === 0) {
        numero /= divisor;
        exponente++;
      }
      factores.push([divisor, exponente]);
    }

    divisor++;
  }

  return factores;
}
/////////////////////////////////////////////////////

// console.log(factorizarCanonicamente(3518236166));
// console.log(Factors(3518236166));

function factors(num) {
  const factors = [];
  let d = 2;

  while (num > 1) {
    if (num % d === 0) {
      let exponent = 0;
      while (num % d === 0) {
        num /= d;
        exponent++;
      }
      factors.push([d, exponent]);
    }

    if (d * d > num) {
      if (num > 1) {
        factors.push([num, 1]);
      }
      break;
    }

    d++;
  }

  return factors;
}
