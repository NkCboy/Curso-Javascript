function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preco = preço;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number'){
                throw new TypeError('Não é um número');
            }
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 'Banana'
console.log(p1.estoque);