let indice: number;
let cadena: string = "";

for (indice = 1; indice <= 100; indice++) {
  if (indice % 2 === 0 || indice % 3 === 0) {
    cadena = cadena + indice + " ";
  }
}
console.log(cadena);
/*cree un algoritmo que visualice los numeros que son multiplos de 2 o de 3 que hay entre 1 y 100
tener en cuenta que hay numeros que son multiplos de 2 y de 3 al mismo tiempo
en dichos casos , solamente indique el numero una vez*/
