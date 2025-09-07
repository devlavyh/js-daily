// 1. Crie um objeto pessoa com nome, idade e cidade.
const pessoa = { nome: 'Lavinia', idade: 19, cidade: 'Estância Velha' };

console.log(pessoa);

// 2. Acesse e altere propriedades.
pessoa.nome = 'Maria';

console.log(pessoa.nome);

// 3. Liste todas as chaves com Object.keys().
console.log(Object.keys(pessoa));

// 4. Liste todos os valores com Object.values().
console.log(Object.values(pessoa));

// 5. Crie um array de objetos (produtos).
const produtos = [
  { produto: 'Notebook', marca: 'Acer', preco: 3999.90 },
  { produto: 'Computer', marca: 'Ryzen', preco: 5699.99 },
  { produto: 'Celular A36', marca: 'Samsung', preco: 1599.90 }
];

console.log(produtos);