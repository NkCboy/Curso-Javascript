// IIFE -> Immediately invoked function expression
/*
Autoexec an function and not polute the global scope:
(function() {
    console.log(123456)
})();
*/

(function(idade, peso, altura){
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);