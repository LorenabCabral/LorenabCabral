let numeroIngresado = Number(prompt("Ingrese un numero"));
while (numeroIngresado <= 0) {
  numeroIngresado = Number(prompt("Ingrese otro numero"));
}
if (numeroIngresado % 2 === 0) {
  console.log("Numero Par");
} else {
  console.log("Numero Impar");
}
