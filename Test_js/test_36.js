// circleIntersection = (a, b, r) =>
//   Math.floor(
//     ((t = 2 * Math.acos(Math.hypot(a[0] - b[0], a[1] - b[1]) / (2 * r))) -
//       Math.sin(t)) *
//       r *
//       r
//   ) || 0;
circleIntersection = (a, b, r) =>
  (((t = 2 * Math.acos(Math.hypot(a[0] - b[0], a[1] - b[1]) / (2 * r))) -
    Math.sin(t)) *
    r *
    r) |
  0;

console.log(circleIntersection([0, 0], [7, 0], 5));

// circleIntersection=(a,b,r)=>(t=2*Math.acos(((a[0]-b[0])**2+(a[1]-b[1])**2)**0.5/(2*r))||0,t===0?0:Math.floor((t-Math.sin(t))*r**2));
// circleIntersection=(a,b,r)=>(t=2*Math.acos(((a[0]-b[0])**2+(a[1]-b[1])**2)**0.5/(2*r)),Math.floor((t-Math.sin(t))*r**2)||0)
// circleIntersection=(a,b,r)=>Math.floor((t=2*Math.acos(Math.hypot(a[0]-b[0],a[1]-b[1])/(2*r)))-Math.sin(t)*r*r)||0;
// circleIntersection=(a,b,r)=>Math.floor(((t=2*Math.acos(Math.hypot(a[0]-b[0],a[1]-b[1])/(2*r)))-Math.sin(t))*r*r)||0
// circleIntersection=(a,b,r)=>(2*Math.acos(Math.hypot(a[0]-b[0],a[1]-b[1])/(2*r))-Math.sin(2*Math.acos(Math.hypot(a[0]-b[0],a[1]-b[1])/(2*r)))*r*r+.5|0
// circleIntersection=(a,b,r)=>((t=2*Math.acos(Math.hypot(a[0]-b[0],a[1]-b[1])/(2*r)))-Math.sin(t))*r*r|0

let numero = 7.5;
let resultado = (numero / 1) | 0; // resultado será 1
console.log(resultado);
