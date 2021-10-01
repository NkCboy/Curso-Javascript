const nomes = ['Eduardo', 'Maria', 'Joana'];
//const nomes = new Array('Eduardo', 'Maria', 'Joana');
const removido = nomes.pop();
nomes.push('Miguel'); // adiciona no final do array
nomes.unshift('Rafael'); //adiciona no início do array
nomes.push('Gabriel');

console.log(nomes, removido);

const name = 'Nicolas Alvaro Reinhold';
let names = name.split(' ');
console.log(names);
let nameArray = names;
let nameRestore = nameArray.join(' ');
console.log(nameRestore);