const nome = 'Luiz Otávio Miranda'
let idade = 30
let peso = 84
const altura = 1.80
const imc = peso/(altura**2)
const dataAtual = new Date
const ano = dataAtual.getFullYear()
const anoDeNascimento = ano-idade
console.log(nome, 'tem', idade, ',pesa', peso, 'tem', altura, 'de altura e seu IMC é de', imc)
console.log(`${nome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc}. ${nome} nasceu em ${anoDeNascimento}`)