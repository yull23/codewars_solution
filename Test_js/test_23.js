// function sumIntervals(intervals) {
//   let result = [];
//   let array2;

//   intervals.forEach((element) => {
//     array2 = Array.from(
//       { length: element[1] - element[0] },
//       (_, i) => i + element[0]
//     );
//     array2.forEach((element) => {
//       if (!result.includes(element)) {
//         result.push(element);
//       }
//     });
//   });
//   return result.length;
// }

function sumIntervals(intervals) {
  //TODO
}

let data = [
  [1, 4],
  [7, 10],
  [3, 5],
];

sumIntervals(data);

let a = [1, 4];
let b = [7, 10];
let c = [-5, 2];
let d = [2, 3];
let e = [-50, 50];

function evaluation(array1, array2) {
  if (array1 == undefined) return false;
  let [a, b] = array1;
  let [c, d] = array2;
  if (a <= c && c <= b) return [Math.min(a, c), Math.max(b, d)]; // c esta dentro de [a,b] y d esta afuera o adentro
  if (a <= d && d <= b) return [Math.min(a, c), Math.max(b, d)]; // d esta dentro de [a,b] y c esta afuera o adentro
  if (a <= c && c <= b && a <= d && d <= b) return [a, b]; // Si [c,d] esta dentro de [a,b]
  if (c <= a && a <= d && c <= b && b <= d) return [c, d]; // Si [a,b] esta dentro de [c,d]
  return false;
}
console.log(evaluation(a, b));
console.log(evaluation(b, a));
console.log(evaluation(a, c));
console.log(evaluation(c, a));
console.log(evaluation(a, d));
console.log(evaluation(d, a));
console.log(evaluation(a, e));
console.log(evaluation(e, a));

let data2 = [
  [1, 4],
  [7, 10],
  [3, 5],
  [6, 7],
  [10, 20],
];
