let numeroIngresado = Number(prompt("Ingrese un numero"));
while (numeroIngresado <= 0) {
  numeroIngresado = Number(prompt("Ingrese otro numero"));
}
if (numeroIngresado % 2 === 0) {
  console.log("Numero Par");
} else {
  console.log("Numero Impar");
}
/*realizar un algoritmo que dado un numero entero ingresado por el usuario, viasualice en pantalla si es par o impar
en el caso de ingresar un cero, se debe volver a pedir el numero por teclado (hasta que se ingrese un numero mayor que cero)*/
