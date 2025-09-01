// VARIAVEIS
function pegarValor1(){
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;

  document.getElementById("resultadoVariaveis").innerHTML = `Olá ${firstName} ${lastName}! Você tem ${age} anos.`
}
// VARIAVEIS

// OPERACOES
function pegarValor2(){
  let number1 = Number(document.getElementById("number1").value) || 0;
  let number2 = Number(document.getElementById("number2").value) || 0;

  let soma = number1 + number2;
  let subtracao = number1 - number2;
  let multiplicacao = number1 * number2;
  let divisao = number1 / number2;

  let resultado1 = document.getElementById("resultadoOperacoes");
  let mensagem1 = "";

  resultado1.innerHTML = `A soma é ${soma}<br>
  A subtração é ${subtracao}<br>
  A multiplicação é ${multiplicacao}<br>
  A divisão é ${divisao}`
}
// OPERACOES

// STRING
let numero = "42"
let numeroSoma = Number(numero) + 8

console.log(numeroSoma)
// STRING

// BOOLEAN
let nome = "Lavinia";
let idade = 19;
let gostaProgramar = true;

console.log(`Meu nome é ${nome}, tenho ${idade} anos! E se eu gosto de programação? ${gostaProgramar}!`)
// BOOLEAN