// 1. Crie uma calculadora básica (soma, subtração…).
function calculadora(number1, number2, operacao){
  if (operacao === '+'){
    return number1 + number2;
  }else if (operacao === '-'){
    return number1 - number2;
  }else if (operacao === '*'){
    return number1 * number2;
  }else if (operacao === '/'){
    return (number1 / number2).toFixed(2);
  }else {
    return 'Operação inválida! Digite novamente.'
  }
}

console.log(calculadora(56, 44, '+')); // 100
console.log(calculadora(56, 44, '-')); // 12
console.log(calculadora(56, 44, '*')); // 2464
console.log(calculadora(56, 44, '/')); // 1.27
console.log(calculadora(56, 44, '%')); // Operação inválida! Digite novamente.

// 2. Inverta um array sem usar .reverse().
function inverterArray(arr){
  const novoArray = [];
  for (let i = arr.length - 1; i >= 0; i--){
    novoArray.push(arr[i]);
  }
  return novoArray;
}

const arrayNormal = [1, 2, 3, 4, 5];
console.log(arrayNormal);
console.log(inverterArray(arrayNormal));

// 3. Conte quantas vogais tem uma palavra.
function vogais(palavra){
  let contador = 0;

  for (let i = 0; i < palavra.length; i++){
    if ('aeiouAEIOU'.includes(palavra[i])){
      contador++;
    }
  }
  return contador;
}

console.log(vogais('Empreendedor')); // 5
console.log(vogais('JavaScript')); // 3

// 4. Verifique se um número é palíndromo.
function palindromo(numero){
  let reversedString = numero.toString().split('').reverse().join('');
  let reversedNum = parseFloat(reversedString);

  if (reversedNum === numero){
    return `O número é palíndromo!`
  }else {
    return `O número não é palíndromo...`
  }
}

console.log(palindromo(121)); // O número é palíndromo!
console.log(palindromo(789)); // O número não é palíndromo...

// 5. Crie um sistema simples de login (usuário/senha fixos).
const usuario = 'Gerente123';
const senha = 1234;

function login(admin, senha){
  if (usuario === 'Gerente123' && senha === 1234){
    return 'Login aprovado!';
  }else{
    return 'Login reprovado!';
  }
}

console.log(login('Gerente123', 1234)); // Login aprovado!
console.log(login('Gerente321', 4321)); // Login reprovado!
console.log(login('Gerente421', 1234)); // Login reprovado!
console.log(login('Gerente123', 4321)); // Login reprovado!