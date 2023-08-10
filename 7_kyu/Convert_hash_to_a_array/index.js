function convertHashToArray(hash) {
  let keysData = Object.keys(hash).sort();
  return keysData.map((i) => [i, hash[i]]);
}
// test

let data = { name: "Jeremy", age: 24, role: "Software Engineer" };

console.log(convertHashToArray(data));
