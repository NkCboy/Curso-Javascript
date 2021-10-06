// Filter

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function maior (value) {
    if (value > 10) return value;
}

const maiorQue10 = numeros.filter(maior)
/*
const maiorQue10 = numeros.filter(valor => return valor > 10);
*/
// console.log(maiorQue10)

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas =  [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
function maior5letras (obj) {
    return obj.nome.length >= 5;
}

function older50 (obj) {
    return obj.idade > 50;
}

function lastLetter (obj) {
    return obj.nome[-1] = 'a';
}

const maior5 = pessoas.filter(maior5letras);
const maisVelhoQue50 = pessoas.filter(older50);
const ultimaLetraA = pessoas.filter(lastLetter);
console.log(`Nomes com 5 ou mais letras:`, maior5);
console.log(`Com mais de 50 anos:`, maisVelhoQue50);
console.log(`Nomes que terminam com a:`, ultimaLetraA);