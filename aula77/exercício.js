// 705.484.450-52
// '070987720' 03  
// '705484450' 52
/*

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  45 32 56 24 20 15 0  =  237 % 11 = 5

5 é o primeiro dígito
*/
const cpfIn = '105.028.649-90'
const cpfVerificado = cpfIn.replace(/\D/g, '');

const cpf = '105028649'

function descobrir (cpf) {
    const contaDigito1 = (((cpf[0]*10 + cpf[1]*9 + cpf[2]*8 + cpf[3]*7 + cpf[4]*6 + cpf[5]*5 + cpf[6]*4 + cpf[7]*3 + cpf[8]*2)%11-11)*-1);

    const cpf1 = contaDigito1 > 9 ? cpf + 0 : cpf + contaDigito1

    const contaDigito2 = (((cpf1[0]*11 + cpf1[1]*10 + cpf1[2]*9 + cpf1[3]*8 + cpf1[4]*7 + cpf1[5]*6 + cpf1[6]*5 + cpf1[7]*4 + cpf1[8]*3 + cpf1[9]*2)%11-11)*-1)

    return contaDigito2 > 9 ? cpf1 + 0 : cpf1 + contaDigito2
};

console.log(descobrir(cpf) == cpfVerificado)