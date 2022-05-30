let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese Primer Numero";
rotulo2.innerHTML = "Ingrese Segundo Numero";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnv = document.getElementById("enviar");

btnEnv.addEventListener("click", () => {
  let primerNumero: number = Number(dato1.value);
  let segundoNumero: number = Number(dato2.value);

  let actual, suma: number;
  actual = primerNumero;
  suma = 0;
  while (actual <= segundoNumero) {
    suma += actual++;
  }
  console.log("El resultado de la suma es:", suma);
});
/*escriba un programa que pida al usuariodos numeros
enteros, y luego retorne la suma de todos los numeros que estan entre ellos
por ejemplo, si los numeros son 2 y 7 debe entregar como resultado 2+3+4+5+6+7=27
*/
