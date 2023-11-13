const LIPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.";

function reverseNumber(n, b) {
  // Input n and b are provided as BigInt values
  let rest;
  let result = [];
  if (b == 1n) return n;
  while (n >= b) {
    rest = n % b;
    result.push(rest);
    n = (n - rest) / b;
  }
  result.push(n);
  return result.reduce(
    (acc, element, index) =>
      acc + BigInt(element) * b ** BigInt(result.length - 1 - index),
    BigInt(0)
  );
}

console.log(reverseNumber(12n, 2n));
console.log(reverseNumber(10n, 5n));
console.log(reverseNumber(45n, 30n));
console.log(reverseNumber(3n, 4n));
console.log(reverseNumber(5n, 1n));
