// 1. Gere um número aleatório entre 1 e 10.
function gerarNumero(number){
  return Math.floor(Math.random(number) * 10) + 1;
};

console.log(gerarNumero());

// 2. Arredonde um número para cima e para baixo.
function arredondaPraBaixo(number){
  return Math.floor(number);
};

function arredondaPraCima(number){
  return Math.ceil(number);
};

console.log(arredondaPraBaixo(2.7)); // 2
console.log(arredondaPraCima(3.1)); // 4

// 3. Crie a data atual formatada (DD/MM/AAAA).
const dataAtual = new Date();

const dia = String(dataAtual.getDate()).padStart(2, '0');
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
const ano = dataAtual.getFullYear();

console.log(`${dia}/${mes}/${ano}`); // 09/09/2025

// 4. Calcule a idade a partir do ano de nascimento.
const anoAtual = dataAtual.getFullYear();

function idade(anoNascimento){
  return anoAtual - anoNascimento;
};

console.log(idade(2006));

// 5. Mostre o dia da semana atual.
const dataSemana = new Date();

// function semana(dia){
//   if (dia === 0){
//     return `Domingo`
//   }else if (dia === 1){
//     return `Segunda-Feira`
//   }else if (dia === 2){
//     return `Terça-Feira`
//   }else if (dia === 3){
//     return `Quarta-Feira`
//   }else if (dia === 4){
//     return `Quinta-Feira`
//   }else if (dia === 5){
//     return `Sexta-Feira`
//   }else if (dia === 6){
//     return `Sábado`
//   };
// };

function semana(dia){
  const dias = [
    'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'
  ]
  return dias[dia];
}

console.log(dataSemana.getDay()); // 2
console.log(semana(dataSemana.getDay())); // Terça-Feira