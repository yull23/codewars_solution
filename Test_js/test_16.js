let data = [
  { id: 1, completed: true, important: false },
  { id: 2, completed: false, important: true },
  { id: 3, completed: true, important: false },
  { id: 4, completed: false, important: false },
  { id: 5, completed: false, important: true },
  { id: 6, completed: true, important: true },
  { id: 7, completed: false, important: true },
  { id: 8, completed: true, important: false },
  { id: 9, completed: true, important: false },
  { id: 10, completed: true, important: true },
];
let a = data.filter((x) => x.completed);
let b = data.filter((x) => x.important);
console.log(a.length);
console.log(b.length);

function addArray(array, arrayPush) {
  for (let i = 0; i < arrayPush.length; i++) {
    if (array.includes(arrayPush[i])) array.push(arrayPush[i]);
  }
}

function removeArray(array, arrayRemove) {
  let temporal = [...array];
  let indexIds = arrayRemove.map((x) => x.id);
  console.log(indexIds);
  temporal.forEach((element) => {
    if (!indexIds.includes(element.id)) {
      console.log(element.id);
      console.log(array.indexOf(element));
      array.splice(array.indexOf(element), 1);
      console.log(element.id);
    }
  });
}

console.log(a);
console.log(data);
removeArray(data, a);
console.log("Remove a");

console.log(a);
console.log(data);

console.log("Remove b");
removeArray(data, a);

console.log(a);
console.log(data);
