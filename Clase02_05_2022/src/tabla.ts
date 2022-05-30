let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el Numero";
rotulo2.innerHTML = "Ingrese hasta que numero quiere";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnv = document.getElementById("enviar");

btnEnv.addEventListener("click", () => {
  let numtabla: number = Number(dato1.value);
  let numhasta: number = Number(dato2.value);
  let resultado: number = 0;
  for (let contador: number = 1; contador <= numhasta; contador++) {
    resultado = numtabla * contador;
    console.log(numtabla + "x" + contador + "=" + resultado);
  }
});
/*diseñar un algoritmo que muestre por pantalla la tabla de multiplicacion del numero ingresado por el usuario
para definir hastq ue numero desea que muestre la tabla de multiplicacion, el usuario tambien debera ingresar dicho valor
*/
