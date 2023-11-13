function justify(text, width) {
  let arrayStrings = text.split(" ");
  let count = 0;
  let result = [];
  let arrayRow = [];
  let lenCurrent;
  let resultString = "";

  function resultRow(array, widht) {
    let rest = widht - array.join("").length;
    let q = array.length - 1;
    for (let i = 0; i < rest; i++) {
      array[i % q] += " ";
    }
    return array.join("") + "\n";
  }

  arrayStrings.forEach((element) => {
    // console.log(element);
    lenCurrent = element.length;

    count += lenCurrent + 1;

    if (count - 1 > width) {
      result.push(arrayRow);
      count = lenCurrent + 1;
      arrayRow = [element];
    } else {
      arrayRow.push(element);
    }
  });
  resultString = result.map((element) => resultRow(element, width));
  resultString.push(arrayRow.join(" "));
  // console.log(resultString);
  return resultString.join("");
}

const LIPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.";

console.log(justify(LIPSUM, 30));

let data = ["Lorem", "ipsum", "dolor", "sit", "amet,"];
// let data = ["123", "45"];

function resultRow(array, widht) {
  let rest = widht - array.join("").length;
  let q = array.length - 1;
  for (let i = 0; i < rest; i++) {
    array[i % q] += " ";
  }
  return array.join("") + "\n";
}

console.log(resultRow(data, 30));
// console.log(resultRow(data, 7));

// Lorem--ipsum--dolor--sit-amet,
// Lorem  ipsum  dolor  sit amet,
// Lorem--ipsum--dolor--sit-amet,
