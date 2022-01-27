//Some todos os números (reduce)
//Retorne um array com os pares (filter)
//Retorne um array com o dobro dos valores (map)
//
const numeros= [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const soma = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    console.log(acumulador);
    return acumulador;
}, 0);

const pares = numeros.filter(function (valor){
    if(valor % 2 === 0) return valor;
});
console.log(pares);

const dobro = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2)
    return acumulador;
}, []);
console.log(dobro);

//Retorne apenas a pessoa mais velha
const pessoas =  [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const older = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})