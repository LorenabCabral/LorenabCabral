let numIngresado: boolean = false;
let num = Number(prompt("Ingrese numero"));

let maxNum: number = num;
while (num !== 0) {
  numIngresado = true;
  //if (num > maxNum) {
  if (num > maxNum) {
    //minNum = num;
    maxNum = num;
  }
  num = Number(prompt("Ingrese numero"));
}
if (numIngresado) {
  //console.log("El numero minimoingresado es:" + minNum);
  console.log("El numero maximo ingresado es:" + maxNum);
}
/*leer valores hasta que se introduzca un cero
el usuario puede introducir valores positivos y negativos
encontrar el maximo de los elementos que se introdujeron
analizar como cambia el programa para hallar el minimo*/
