function myFunction() {
  function MyObject() {
    this.objProperty = "string";
    this.objMethod = function () {
      return this.objProperty;
    };
  }
  return new MyObject();
}
// test

console.log(myFunction().objMethod());
