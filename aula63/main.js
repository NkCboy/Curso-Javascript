const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, el1, el2, el3);
// 
let removidos = nomes.splice(4, 1);
console.log(nomes, removidos);

removidos = nomes.splice(3, 2, 'Luiz');
console.log(nomes, removidos);