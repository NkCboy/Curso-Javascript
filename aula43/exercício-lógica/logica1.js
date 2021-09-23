// Escreva uma função que recebe 2 números e retorne o maior deles
const n1 = Math.floor(Math.random(0)*10);
console.log(n1);
const n2 = Math.floor(Math.random(0)*10);
console.log(n2);

const bigger = (x ,y) => x > y ? x : y;

const biggerNum = bigger(n1, n2)
console.log(`${biggerNum} é o maior.`)