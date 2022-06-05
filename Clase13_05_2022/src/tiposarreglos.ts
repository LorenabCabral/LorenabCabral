let dimesionIngresada: number = Number(
  prompt("Ingrese la Dimension del arreglo")
);
let nroarreglo: number[] = new Array(dimesionIngresada);
let indice: number;

for (indice = 0; indice < dimesionIngresada; indice++) {
  nroarreglo[indice] = Number(prompt("Ingrese", nroarreglo[indice]));
}
let numNegativo: number = 0;
let numPositivo: number = 0;
let numCero: number = 0;
for (indice = 0; indice < dimesionIngresada; indice++) {
  if (nroarreglo[indice] === 0) {
    numCero++;
  } else if (nroarreglo[indice] > 0) {
    numPositivo++;
  } else {
    numNegativo++;
  }
}
console.log(
  "Hay",
  numPositivo + "Positivo",
  numNegativo + "Negativo",
  numCero + "Ceros"
);
