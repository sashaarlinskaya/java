// Простые числа до N: вывести все простые числа до числа N с
// использованием цикла `for`

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите число N: ', (input) => {
    const N = parseInt(input, 10); // Преобразуем ввод в число
    
    for (let num = 2; num <= N; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) { //  проверяем до корня из num
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
        }
    }

    rl.close(); 
});
