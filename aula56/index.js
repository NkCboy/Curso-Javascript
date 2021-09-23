// Factory function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return this.nome + ' ' + this.sobrenome;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura,

        peso,

        // Getter
        get imc() {
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Nícolas', 'Alvaro', 1.78, 75);
p1.nomeCompleto = 'Nícolas Alvaro Reinhold';
console.log(p1.nomeCompleto);
