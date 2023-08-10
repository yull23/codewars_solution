var Ball = function (ballType) {
  this.ballType = ballType != null ? ballType : "regular";
};
// test

console.log(new Ball().ballType);
console.log(new Ball("super").ballType);
