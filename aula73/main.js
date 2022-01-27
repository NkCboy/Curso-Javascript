const produto = { nome:'Caneca', preco: 2};
const outroProduto = {
    ...produto,
    material: 'vidro'
};
// const copo = Object.assign({}, produto, { material: 'vidro});

outroProduto.nome = 'Copo';
outroProduto.preco = 3;
console.log(produto);
console.log(outroProduto);

/*
object.values
Object.entries
Object.assign            ->Atribue ao objeto
Object.freeze            ->Congela o objeto
Object.defineProperty    ->Define uma propriedade
Object.defineProperties  ->Define várias propriedades
Object.getOwnPropertyDescriptor(produto, 'nome);  -> Mostra as propriedades de um objeto.
*/

console.log(Object.keys(produto));

