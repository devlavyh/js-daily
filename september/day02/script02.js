// CONTAR LETRAS
const frase = document.getElementById("frase");
const botao = document.getElementById("botao");
const resultadoLetras = document.getElementById("resultadoLetras");

botao.addEventListener("click", () =>{
  const texto = frase.value;
  const apenasLetras = texto.replace(/[^a-zA-Z]/g, "");
  resultadoLetras.textContent = apenasLetras.length;
})