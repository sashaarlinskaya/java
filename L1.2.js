const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите число N: ', (input) => {
    const max = parseInt(input, 10); // Преобразуем ввод в число

    let a = 0, b = 1;

console.log(a);
while (b < max) {
    console.log(b);
    let next = a + b;
    a = b;
    b = next;
}

    rl.close(); // Закрываем интерфейс после завершения
});
