// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Nícolas', 'Alvaro');
const pessoa2 = new Pessoa('Nicole', 'Alessandra');

console.dir(pessoa1);
console.dir(pessoa1.nomeCompleto());
console.dir(pessoa2);
console.dir(pessoa2.nomeCompleto());