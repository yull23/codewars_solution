const ecuacion = "2x+8.56=-4.56y";

function getIndependt(ecuacion) {
  const regexNumero = /^[0-9]$/;
  ecuacion.split("").forEach((element) => {
    console.log(regexNumero.test(element));
    console.log(element);
  });
}
console.log(getIndependt(ecuacion));
console.log();
