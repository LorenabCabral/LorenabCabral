let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click" , () => {

    let numeroDeseado: number = Number(dato.value);

    if (numeroDeseado > 20) {
      console.log("el numero es mayor a 20:");
    } else {
      console.log("el numero es menor o igual a 20:");
    }
  })
