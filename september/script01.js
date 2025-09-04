// 1 - Crie 3 variáveis (nome, idade, cidade) e imprima em uma frase.
const nome = 'Lavinia';
const idade = 19;
const cidade = 'Estância Velha';

console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}!`) // Olá, meu nome é Lavinia, tenho 19 anos e sou de Estância Velha!

// 2 - Some dois números e mostre o resultado.
function soma(number1, number2){
  const result = number1 + number2;
  return result;
}

console.log(soma(10, 21)); // 31

// 3 - Calcule o resto da divisão entre dois números.
function resto(number1, number2){
  const result = number1 % number2;
  return result;
}

console.log(resto(24, 8)); // 0

// 4 - Converta um número em string.
function numberToString(numero){
  const string = String(numero);
  return string;
}

console.log(numberToString(7)); // string

// 5 - Inverta o valor de um booleano.
let estaAtivo = true;
estaAtivo = !estaAtivo;