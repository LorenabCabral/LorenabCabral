//Implementar un algoritmo que calcule y muestre por pantalla
//el precio final de un producto despues de aplicarle un descuento
//el precio inicial del producto es 450.50
//el descuento a aplicar es el 10%
//el precio y el descuento deben ser guardados en variables(no ingresados por teclado)

let producto: number = 450.5;
let porcentaje: number = 0.1;
let descuento: number = producto * porcentaje;
let resultado: number = producto - descuento;
console.log(resultado);
