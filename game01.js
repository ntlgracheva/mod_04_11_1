'use strict'

//Определение диапазона
let n = +prompt('Введите первое целое число для ограничения диапазона:', 1);
let m = +prompt('Введите второе целое число для ограничения диапазона:', 10);

//Определение меньшего и большего значений
let max = n > m ? n : m;
let min = m < n ? m : n;

//определение случайного числа
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\nrandomNum = ${randomNum}`);

//массив введеных чисел
let userNumbers = [];

//количество попыток
const userNumbersLength = Math.floor((max - min) * 0.3);

//функция запроса числа у пользователя и его валидация
const userNum = () => {

    let N = prompt(`Введите целое число в диапазоне от ${min} до ${max}:`, 3);
    if (N === null) { console.log('Действие отменено'); } else { N = +N }
    if (isNaN(N)) { console.error('Введи число!'); userNum(); }
    if (N < min || N > max) { console.error(`Число должно находиться в диапазоне от ${min} до ${max}.\nПовторите ввод.`); userNum(); }

    return N;
}

const game = (array) => {

    //1. проверка количества попыток
    if (userNumbers.length === userNumbersLength) { console.error('Ваши попытки закончились!'); return }

    //2.если не все попытки использованы, то запрашиваем число у пользователя
    let N = userNum();

    //3. если число пользователя совпало с загаданным, то игра завершается
    if (N === randomNum) { console.log('Правильно!'); return }

    //3.1 если не совпало, то проверяем, вводилось ли оно ранее и повторяем запрос
    if (array.includes(N)) {
        console.error("Это число вы уже вводили"); game(array);
    }

    //3.2 если число ранее не вводилось, то добавляем его в массив
    else {
        array.push(N);  //заносим число в массив
        N < randomNum ? console.log('Больше!') : console.log('Меньше!');
        game(array);
    }
}

game(userNumbers);
