// 1. Crie um array de frutas e exiba o primeiro e último item.
const frutas = ['maça', 'banana', 'maracujá', 'pera', 'laranja'];

console.log(`A fruta em primeiro é ${frutas[0]} e a última é ${frutas[frutas.length - 1]}`);
console.log(`A fruta em primeiro é ${frutas[0]} e a última é ${frutas.at(-1)}`); // A fruta em primeiro é maça e a última é laranja

// 2. Adicione e remova elementos com push e pop.
console.log(frutas.push('butiá')); // 6
console.log(frutas); // [ 'maça', 'banana', 'maracujá', 'pera', 'laranja', 'butiá' ]

const users = ['Lavinia', 'Maria', 'Jose'];

console.log(users.pop()); // Jose
console.log(users); // [ 'Lavinia', 'Maria' ]

// 3. Inverta um array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const invertido = [...numbers].reverse();
console.log(invertido); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// 4. Filtre números pares com .filter().
const pares = numbers.filter(numero => {
  return numero % 2 === 0
});

console.log(pares); // [ 2, 4, 6, 8, 10 ]

// 5. Some todos os números com .reduce().
const soma = numbers.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(soma); // 55