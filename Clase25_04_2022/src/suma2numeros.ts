//suma de dos numeros:realizamos la operacion
//suma con las variables, guardando el resultado en
//otra variable numerica y luego mostramos el valor
//de dicha variable(resulatdo)por consolar

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el primer número: ";
rotulo2.innerHTML = "Ingrese el segundo número: ";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let primerNumero: number = Number(dato1.value);
  console.log("el primer número es ", primerNumero);
  let segundoNumero: number = Number(dato2.value);
  console.log("el segundo número es ", segundoNumero);
  let resultado: number = primerNumero + segundoNumero;
  console.log("El resultado de la suma es ", resultado);
});
