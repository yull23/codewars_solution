function spacey(array) {
  let array2 = [1, 2, 3, 4];
  let x = ""; //valor inicial
  let arreglo = array.map((element) => {
    // Inicio del manejo de X
    x = x + element;
    // Fin  del manejo de X
    return x; // lo que añado a lista del map
  });
  return arreglo;
}
// console.log(spacey(["kevin", "has", "no", "space"]));
// [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']

function sumArray(array) {
  let suma = 0;
  // for (let i = 0; i < array.length; i++) {
  //   console.log(`La suma antes de comenzar es ${suma}`);
  //   suma = suma + array[i];
  //   console.log(
  //     `Estamos en la iteración i=${i}, osea el elemento array[i]=${array[i]}, y la suma acumulada hasta el momento es ${suma}`
  //   );
  // }

  // array.forEach((base) => {
  //   suma = suma + base;
  // });

  let array2 = array.map((element) => {
    suma = suma + element;
    return suma;
  });
  console.log(array2);

  return array2.slice(-1)[0];
}

console.log(sumArray([4, 5, 6, 7]));

function lostSheep(friday, saturday, total) {
  let allDays = [...friday, ...saturday];
  let sum = 0;
  allDays.forEach((element) => (sum += element));
  return total - sum;
}

console.log(lostSheep([1, 2], [3, 4], 15));

console.log([1, 2, 3, 1].includes(1));
