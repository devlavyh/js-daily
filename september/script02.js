// 1. Verifique o tipo de cada variável com typeof.
const number = 7;
const string = '7';
const boolean = true;

console.log(`Este é um ${typeof number}, esta é uma ${typeof string}, já este o valor é ${typeof boolean}`); // Este é um number, esta é uma string, já este o valor é boolean

// 2. Converta string para número (Number).

const stringToNumber = Number('7');

console.log(typeof stringToNumber); // number

// 3. Crie uma constante imutável.

const variavelImutavel = 'Imutável';

// 4. Trabalhe com null e undefined.

let vazio = null;
let vazio2;

console.log(vazio);
console.log(vazio2);

// 5. Teste o operador === vs ==.

const numero = 7;

console.log(numero == '7'); // true
console.log(numero === '7'); // false