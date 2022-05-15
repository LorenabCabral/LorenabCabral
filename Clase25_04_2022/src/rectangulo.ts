//volvamos a implementar el proceso que calcula el area de un
//rectangulo pero para cualquier base o altura;
//el usuario debe ingresar la base y altura por teclado
//el area debe guardarse en una variable
//el resultado debe ser mostrado por pantalla

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let base: number = Number(dato1.value);
  let altura: number = Number(dato2.value);
  let area: number = base * altura;
  console.log("El resultado es", area);
});
