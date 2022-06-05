let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let suma: number[] = new Array(6);

let indice: number;

for (indice = 0; indice < 6; indice++) {
  arreglo1[indice] = Number(prompt("Ingrese numero en la posicion", indice));
}
for (indice = 0; indice < 6; indice++) {
  arreglo2[indice] = Number(prompt("Ingrese numero en la posicion", indice));
}
for (indice = 0; indice < 6; indice++) {
  suma[indice] = arreglo1[indice] + arreglo2[indice];
  console.log(suma[indice]);
}
