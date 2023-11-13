function josephus(items, k) {
  //your code here
  let indexSuicide = 0;
  let lenInit = items.length;
  let len = items.length;
  console.log(len);
  let count = 0;
  let result = [];
  while (count <= lenInit - 1) {
    console.log(count);
    indexSuicide += k;
    indexSuicide = (indexSuicide - 1) % len;
    console.log(indexSuicide);
    result.push(items[indexSuicide]);
    items.splice(indexSuicide, 1);
    len = items.length;
    count++;
  }
  console.log(result);
  return result;
}
josephus([1, 2, 3, 4, 5, 6, 7], 3);
