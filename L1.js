// Определить, является ли число простым: пользователь вводит число,
// программа проверяет, простое оно или нет

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите число N: ', (input) => {
    let number = parseInt(input);
    let isPrime = true;

    if (isNaN(number) || number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    console.log(isPrime ? "Число простое" : "Число не простое");
    rl.close();
});


