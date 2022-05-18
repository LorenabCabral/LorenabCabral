let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Ingrese Primer Numero";
rotulo2.innerHTML = "Ingrese Segundo Numero";
rotulo3.innerHTML = "Ingrese Tercer Numero";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let btnEnv = document.getElementById("enviar");

btnEnv.addEventListener("click" , () => {
let numero1 : number = dato1.value;
let numero2 : number = dato2.value;
let numero3 : number = dato3.value;

if (numero1 > numero2 && numero1 > numero3) {
  console.log("El numero" + numero1 + "es el mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log("El numero" + numero2 + "es el mayor");
} else if (numero3 > numero1 && numero3 >numero2) {
  console.log("El numero" + numero3 + "es el mayor");
});