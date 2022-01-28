function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100))
}

const produto1 = new Produto('Copo', 50);
console.log(produto1);
produto1.desconto(10);
console.log(produto1);
produto1.aumento(10);
console.log(produto1);

const produto2 = {
    nome: 'Caneca',
    preco: 30
}
Object.setPrototypeOf(produto2, Produto.prototype);

console.log(produto2);
produto2.desconto(10);
console.log(produto2);

const produto3 = Object.create(Produto.prototype);
produto3.nome = 'Camisa';
produto3.preco = 60
console.log(produto3)

produto3.aumento(15);
console.log(produto3);