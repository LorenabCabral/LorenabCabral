let titulo1 = document.getElementById("titulo1");
let titulo2 = document.getElementById("titulo2");
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let btnCalcular = document.getElementById("calcular");

titulo1.innerHTML = "Ingrese base";
titulo2.innerHTML = "Ingrese altura";

btnCalcular.addEventListener("click", () => {
  let base: number = Number(numero1.value);
  let altura: number = Number(numero2.value);
  let calcularAreaTriangulo = (base: number, altura: number): number => {
    return (base * altura) / 2;
  };

  for (let i: number = 1; i <= 7; i++) {
    console.log("El area del triangulo", calcularAreaTriangulo(i, i * 2));
  }
});
