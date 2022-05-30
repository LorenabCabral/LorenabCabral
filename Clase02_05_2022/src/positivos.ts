let cantTotal: number = 0;
let cantPositivos: number = 0;
let porcPositivos: number = 0;

let num: number = Number(prompt("Ingrese un número"));
while (num !== 0) {
  if (num > 0) {
    cantPositivos++;
  }
  cantTotal++;
  num = Number(prompt("Ingrese un número"));
}
if (cantTotal > 0) {
  porcPositivos = (cantPositivos * 100) / cantTotal;
  console.log(cantPositivos + " positivos. " + porcPositivos + "% del total.");
}
/* leer valores del usuario hasta que introduzca un 0
el usuario puede introducir valores numericos,tanto positivos como negativos
contar lacantidad de valores introducidos que sean mayores a 0 y el porcentaje de positivos respcto al total*/
