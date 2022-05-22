let rotulo1 = document.getElementById("rotulo1");
let dato1 = document.getElementById("dato1");

rotulo1.innerHTML = "Ingrese el salario actual del empleado:";
let nuevoSueldo: number = 0;

let btnEnv = document.getElementById("enviar");

btnEnv.addEventListener("click", () => {
  let sueldoActual: number = Number(dato1.value);

  if (0 < sueldoActual && sueldoActual <= 15000) {
    nuevoSueldo = sueldoActual * 1.2;
    console.log("Ud.tiene un aumento de 20%");
  } else if (15001 <= sueldoActual && nuevoSueldo <= 20000) {
    nuevoSueldo = sueldoActual * 1.1;
    console.log("Ud.tiene un aumento de 10%");
  } else if (20001 <= sueldoActual && nuevoSueldo <= 25000) {
    nuevoSueldo = sueldoActual * 1.05;
    console.log("Ud.tiene un aumento de 5%");
  } else {
    nuevoSueldo = sueldoActual;
    console.log("Ud. no tiene aumento");
  }
});
