function fb (num) {
    isNaN(num)? console.log('Não é um número.'):console.log('É um número.');

    if (num%3 ===0 && num%5 ===0) return 'fizzbuzz';

    if (num%3 ===0) return 'fizz';

    if (num%5 ===0) return 'buzz';

    if (num%3 !=0 && num%5 !=0) return num;
}

for (let i = 0; i<=100; i++) {
    console.log(i, fb(i))
}