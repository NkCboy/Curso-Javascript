// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar valores
// Reduzir (somar tudo)

const num = [5, 50 ,80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pares = num.filter(function(valor) {
    if (valor % 2 ===0) return valor
});

const somapar = pares.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador
}, 0);

const dobro = num.reduce(function(acumulador, valor) {
    acumulador += valor * 2
    return acumulador
}, 0);

console.log(pares, somapar, dobro);