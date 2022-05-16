let rotulo1 = document.getElementById ("rotulo1");
let dato1 = document.getElementById ("dato1");
let btnEnv = document.getElementById ("enviar");

rotulo1.innerHTML = ("Ingresar altura");

btnEnv.addEventListener ("click" , () => {
    let altura : number = Number(dato1.value);
    if (altura >= 1.30) {
   console.log ("Puede pasar al juego:" , altura);
   } else {
     console.log ("Lo sentimos, no puede participar");
   });

