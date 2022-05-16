let dato1 = document.getElementById ("dato1");
let dato2 = document.getElementById ("dato2");

let btnEnviar = document.getElementById ("enviar");
let rotulo1 = document.getElementById ("rotulo1");
let rotulo2 = document.getElementById ("rotulo2");

rotulo1.innerHTML = ("Ingrese cantidad de productos");
rotulo2.innerHTML = ("Ingrese precio de producto");

btnEnviar.addEventListener("click", () => {
      let cantidad : number = Number(dato1.value);
      let precio : number = Number(dato2.value);

      let compra : number = precio * cantidad;

      if (compra > 1000) {
         compra = compra * 0.90;

      console.log ("Felicitaciones obtuviste un descuento:" , compra);
      } else {
        console.log ("Su compra es:" , compra);
      });