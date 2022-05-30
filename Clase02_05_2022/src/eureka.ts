let contador: number = 1;
let claveIngresada: string;

while (contador <= 3 && claveIngresada !== "eureka") {
  claveIngresada = prompt("Ingrese clave");
  contador++;
}
if (claveIngresada === "eureka") {
  console.log("Ingreso Correcto");
} else {
  console.log("Lo siento no tiene mas intentos");
}
