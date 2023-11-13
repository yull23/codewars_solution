function dblLinear(n) {
  function insertValue(arr, value) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === value) {
        // Valor ya existe, no es necesario agregarlo nuevamente
        return;
      } else if (arr[mid] < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    // Insertar el valor en la posición correcta
    arr.splice(left, 0, value);
  }
  // your code
  let count = 0;
  let result = [1];
  let x;
  const y = (x) => 2 * x + 1;
  const z = (x) => 3 * x + 1;
  while (count < n - 1) {
    x = result[count];
    insertValue(result, y(x));
    insertValue(result, z(x));
    count++;
  }
  return result[n];
}
console.log(dblLinear(10));
