const a = [1,2,3,4];
let total = 0;
for(let valor of a) {
    console.log(valor);
};

a.forEach(function(valor, indice, array){
    total += valor;
});
console.log(total);