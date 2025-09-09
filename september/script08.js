// 1. Conte o número de caracteres.
const palavra = 'Paralelepipedo'

console.log(palavra.length)

// 2. Transforme em maiúsculas.
console.log(palavra.toUpperCase())

// 3. Substitua palavras com .replace().
const saudacao = 'Hello World, greeting!'

console.log(saudacao.replace('greeting', 'hi'));

// 4. Verifique se contém uma substring.
console.log(saudacao.includes('World'));

// 5. Inverta a string.
let invertida = Array.from(palavra).reverse().join('');

console.log(invertida);