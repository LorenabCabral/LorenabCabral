let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnviar = document.getElementById("enviar");

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Por favor ingrese el usuario";
rotulo2.innerHTML = "Por favor ingrese la clave";

btnEnviar.addEventListener("click", () => {
  let usuario: string = "Juan";
  let clave: string = "claveJuan";
  let usuarioingresado : string = dato1.value;
  let claveingresada : string = dato2.value;
      if (usuario == usuarioingresado && clave ==claveingresada) {
        console.log("Bienvenido");
      } else { 
        console.log("El usuario o clave son incorrectos");
      };
