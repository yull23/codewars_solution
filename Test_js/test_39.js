function sumOfDivided(lst) {
  function factorsFunction(num) {
    let numNew = Math.abs(num);
    const factors = [];
    let d = 2;

    while (numNew > 1) {
      if (numNew % d === 0) {
        let exponent = 0;
        while (numNew % d === 0) {
          numNew /= d;
          exponent++;
        }
        factors.push(d);
      }

      if (d * d > numNew) {
        if (numNew > 1) {
          factors.push(numNew);
        }
        break;
      }

      d++;
    }

    return factors;
  }
  //your code

  let factorsArray = [];

  lst.forEach((element) => {
    let factors = factorsFunction(element);
    factors.forEach((e) => {
      if (!factorsArray.includes(e)) {
        factorsArray.push(e);
      }
    });
  });
  factorsArray.sort((a, b) => a - b);
  let result = [];

  factorsArray.forEach((i) => {
    let sum = 0;
    lst.forEach((j) => {
      if (j % i == 0) sum += j;
    });

    result.push([i, sum]);
  });
  console.log(result);
  return result;
}

// let data = [12, 15];
let data = [15, 21, 24, 30, -45];

console.log(sumOfDivided(data));
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
console.log(factorsFunction(29));
