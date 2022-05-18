let dato = document.getElementById ("dato");
let rotulo1 = document.getElementById ("rotulo1");
let btnEnv = document.getElementById ("enviar");

rotulo1.innerHTML = "Ingrese la posicion de llegada del competidor:";

btnEnv.addEventListener ("click" , () => {
  let posicionLlegada: number = Number (dato.value);
  if (posicionLlegada == 1) { 
  console.log ("Entregar Medalla de Oro");
  } else {
  if (posicionLlegada == 2) {
  console.log ("Entregar Medalla de Plata");
  } else {
  if (posicionLlegada == 3) {
  console.log ("Entregar Medalla de Bronce");
  } else {
  if (posicionLlegada =>4) {
  console.log ("Entregar Mencion de participacio");
  }