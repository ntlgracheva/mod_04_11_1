'use strict'

let myArray = [25,20];

const foo = (array, max = 10, min = 1) => {

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(randomNum);

    let sumOfItems = array.reduce((acc, item) => {
        return acc + item;
    }, 0)

    if (sumOfItems >= 50) { return array; }

    else { foo(array) }

    return array
}


console.log(foo(myArray));