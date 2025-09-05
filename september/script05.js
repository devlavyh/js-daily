// 1. Crie uma função que retorna a soma de 2 números.
function soma(number1, number2){
  return number1 + number2;
}

console.log(soma(455, 670)); // 1125

// 2. Função que retorna o maior de 3 números.
function maiorDeTres(a, b, c){
  if (a > b && a > c){
    return `${a} é maior`
  }else if (b > a && b > c){
    return `${b} é maior`
  }else if (a === b && b === c){
    return `Os três são iguais!`
  }else {
    return `${c} é maior`
  }
}

console.log(maiorDeTres(7, 4, 2));
console.log(maiorDeTres(2, 8, 5));
console.log(maiorDeTres(1, 7, 9));
console.log(maiorDeTres(7, 7, 7));

// OU

function maior(a, b, c){
  if (a === b && b === c){
    return `Os três são iguais!`
  }else{
    return Math.max(a, b, c);
  }
}

console.log(maior(7, 4, 2));
console.log(maior(2, 8, 5));
console.log(maior(1, 7, 9));
console.log(maior(7, 7, 7));

// 3. Função que retorna se um número é primo.
function ehPrimo(number){
  if (number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++){
    if (number % i === 0){
      return false;
    }
  }

  return true;
}

console.log(ehPrimo(7));  // true
console.log(ehPrimo(10)); // false
console.log(ehPrimo(13)); // true

// 4. Use função anônima em uma variável.
let saudacao = function(nome){
  return `Bem-vinda ${nome}!`
}

console.log(saudacao('Lavinia'));

// 5. Use arrow function.
let saudacao2 = (nome) => `Bem-vinda ${nome}!`;

console.log(saudacao2('Maria'));