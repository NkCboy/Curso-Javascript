/*
const data = new Date

let diaSemana = data.getDay();
switch (diaSemana) {
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Segunda-feira';
        break ;
    case 2:
        diaSemana = 'Terça-feira';
        break;
    case 3:
        diaSemana = 'Quarta-feira';
        break;
    case 4:
        diaSemana = 'Quinta-feira';
        break;
    case 5:
        diaSemana = 'Sexta-feira';
        break;
    case 6:
        diaSemana = 'Sábado-feira';
        break;
}

const dia = data.getDate();
const mes = month();
function month (data) {
    data = new Date ();
    mesNome = ['Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return mesNome[data.getMonth()];
}

const ano = data.getFullYear();

function leftZero (num) {
    return num >= 10 ? num :`0${num}`;
}
const horas = data.getHours();
const minutos = data.getMinutes();

console.log(diaSemana, dia, mes, ano, horas, minutos)
*/
let h1 = document.querySelector('#data');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});