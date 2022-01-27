const pessoa = {
    nome: 'Nícolas',
    sobrenome: 'Reinhold'
};
console.log(pessoa.sobrenome);
console.log(pessoa['sobrenome']);

const chave = 'nome'
console.log(pessoa[chave]);

// ---------------------------------------------

const pessoa2 = new Object();
pessoa2.nome = 'Quentin';
pessoa2.sobrenome = 'Coldwater';
console.log(pessoa2.nome, pessoa2.sobrenome);

// ---------------------------------------------

const pessoa3 = new Object();
pessoa3.nome = 'Benedict';
pessoa3.sobrenome = 'Cumberbatch';
pessoa3.idade = 30;

delete pessoa3.nome;
console.log(pessoa3);

for (let chave in pessoa3) {
    console.log(chave);
};
for (let chave in pessoa3) {
    console.log(pessoa3[chave]);
};

// --------------------------------------------

// Factory Function /-/ Constructor functions

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa(`Nícolas`, `Reinhold`);
console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p5 = new Pessoa('Benedict', 'Cumberbatch');
console.log(p5);