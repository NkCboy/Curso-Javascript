// defineProperty - defineProperties

function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preco = preço;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        value: estoque,
        writable: true,
        configurable: false
    })

    Object.defineProperties(this, {
        nome:{
            enumerable:true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco:{
            enumerable:true,
            value: preco,
            writable: true,
            configurable: true
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.nome);