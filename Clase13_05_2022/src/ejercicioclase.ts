//Arreglo de numeros
//construya yn algoritmo que tenga un arreglo de numeros y se los muestre el usuario
//el arreglo debe ser llamado num
//debe tener los numeros :20,14,8,0,5,19 y 24
//mostrar los valores resultantes del arreglo

/*let num: number[] = new Array(7);

num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;

console.log(num); //una forma

let indice: number = 0;
while(indice <7){
  console.log("El numero en la posicio"+ indice +"es" + num[indice]);

  indice++
}
*/
/*
//NUMEROS DESEADOS
let numeroDeseado: number[] = new Array(5);
let indice: number;
let nro: number;

for (indice = 0; indice < 5; indice++) {
  nro = prompt("Ingrese el numero Deseado en la posicion", indice);
  numeroDeseado[indice] = nro;
}

for (indice = 0; indice < 5; indice++) {
  console.log(
    "El numero en la posicion" + " " + indice + " es " + numeroDeseado[indice]
  );
}
*/
// NOMBRES DESEADOS
/*
let dimensionArreglo: number = Number(prompt("Ingrese la cantidad de nombres"));

let arregloNombres: string[] = new Array(dimensionArreglo);
let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arregloNombres[indice] = prompt("Ingrese nombre para la posicion ", indice);
}

for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(
    "El nombre en la posicion " + indice + " es " + arregloNombres[indice]
  );
}
*/
//DOS ARREGLOS
/*
let arregloNombres: string[] = new Array(2);
let arregloNumeros: number[] = new Array(3);

let indice: number;

for (indice = 0; indice < 2; indice++) {
  arregloNombres[indice] = prompt("El nombre ingresado en la posicion", indice);
}
for (indice = 0; indice < 3; indice++) {
  arregloNumeros[indice] = prompt("El numero ingresado en la posicion", indice);
}
for (indice = 0; indice < 2; indice++) {
  console.log("El nombre en la posicion", indice, "es", arregloNombres[indice]);
}

for (indice = 0; indice < 3; indice++) {
  console.log("El numero en la posicion", indice, "es", arregloNumeros[indice]);
}
*/
//SUMA ELEMENTOS ARREGLOS
/*let dimensionArreglo: number = Number(
  prompt("Ingrese la dimension del arreglo")
);
let arregloNumeros: number[] = new Array(dimensionArreglo);

let indice: number;
let sumaTotal: number = 0;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arregloNumeros[indice] = Number(
    prompt("Ingrese el numero en la posicion" + indice)
  );
  sumaTotal += arregloNumeros[indice];
}
console.log("La suma de los numeros ingresados es:", " " + sumaTotal);
*/
//EJERCICIO CREAR ARREGLO CON NUMEROS RAMDOM

let arregloRandom: number[] = new Array(10);
let indice: number;

function Azar(tope: number): number {
  return Math.floor(Math.random() * tope);
}
for (indice = 0; indice < 10; indice++) {
  arregloRandom[indice] = Azar(100);
}
for (indice = 0; indice < 10; indice++) {
  console.log(
    "El numero ingresado en la posicion" +
      +indice +
      +"es" +
      " " +
      arregloRandom[indice]
  );
}
