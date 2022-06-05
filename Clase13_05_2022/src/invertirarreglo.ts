let dimensionArreglo: number = Number(prompt("Ingresela dimension del numero"));
let numArreglo: number[] = new Array(dimensionArreglo);

let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  numArreglo[indice] = Number(prompt("Ingrese", numArreglo[indice]));
}
let cadena: string = "";
for (indice = dimensionArreglo - 1; indice >= 0; indice--) {
  cadena += numArreglo[indice] + " ";
}
console.log(cadena);
