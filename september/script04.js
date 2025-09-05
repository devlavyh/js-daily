// 1. Imprima números de 1 a 10 com for.
for (let i = 1; i <= 10; i++){
  console.log(i);
};

// 2. Some números de 1 a 100 com while.
let numero = 1;
let soma = 0;

while (numero <= 100){
  soma += numero;
  numero++;
}

console.log(`A soma é: ${soma}.`);

// 3. Crie a tabuada do 5.
const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let resultado of tabuada){
  console.log(`5 x ${resultado} = ${5 * resultado}`);
};

// 4. Liste elementos de um array com for...of.
const users = ['Lavinia', 'Ingrid', 'Bianca', 'Thais', 'Bruna'];

for(let usuario of users){
  console.log(usuario);
};

// 5. Interrompa um loop ao encontrar certo valor.
let soma2 = 0;

for(let i = 1; i <= 100; i++){
  soma2 += i;
  if (soma2 >= 50){
    console.log(`Interrompido! Soma chegou a ${soma2} no número ${i}!`);
    break;
  }
}