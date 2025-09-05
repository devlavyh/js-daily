// 1. Verifique se um número é par ou ímpar.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(numero => {
  return numero % 2 === 0; // filtrar pares
});

const impares = numeros.filter(numero => {
  return numero % 2 !== 0; // filtrar impares
});

console.log(pares);
console.log(impares);

// 2. Valide se a pessoa pode votar (idade >= 16).
function podeVotar(idade){
  return idade >= 16 ? 'Pode votar' : 'Não pode votar'
};

console.log(podeVotar(15));
console.log(podeVotar(19));

// 3. Implemente um sistema de notas (A, B, C…).
function valorNota(nota){
  if (nota >= 90){
    return 'Nota A'
  }else if (nota >= 80){
    return 'Nota B'
  }else if (nota >= 70){
    return 'Nota C'
  }else if (nota >= 60){
    return 'Nota D'
  }else {
    return 'Nota F'
  }
};

console.log(valorNota(91)); // A
console.log(valorNota(83)); // B
console.log(valorNota(76)); // C
console.log(valorNota(69)); // D
console.log(valorNota(35)); // F

// 4. Use operador ternário para checar maioridade.
function maioridade(idade){
  return idade >= 18 ? 'Maior de idade' : 'Menor de idade'
};

console.log(maioridade(18)); // Maior de idade
console.log(maioridade(12)); // Menor de idade

// 5. Crie uma condicional com switch/case.
function notaSwitch(nota){
  switch(Math.floor(nota / 10)){
    case 10:
    case 9:
      return 'A';
    case 8:
      return 'B';
    case 7:
      return 'C';
    case 6:
      return 'D';
    default:
      return 'F';
  }
}

console.log(valorNota(91)); // A
console.log(valorNota(83)); // B
console.log(valorNota(76)); // C
console.log(valorNota(69)); // D
console.log(valorNota(35)); // F