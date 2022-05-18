let rotulo1 = document.getElementById("rotulo1");
let dato1 = document.getElementById("dato1");
let btnEnv = document.getElementById("enviar");

rotulo1.innerHTML = "Ingrese numero";

btnEnv.addEventListener("click" , () => {

  let numeroingresado : number = dato1.value;

  if (numeroingresado == 0) {
    console.log("El numero ingresado es 0");
  } else if (numeroingresado%2 ==0) {
    console.log("Es numero es par");
  } else if (numeroingresado%2 !=0) {
    console.log("El numero ingresado es impar");
  });
