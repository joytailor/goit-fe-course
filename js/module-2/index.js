'use strict';
let arrayOfNumbers = [];
let currentInput;
let currentNumber;
do {
    currentInput = prompt('Введите произвольное число');
    currentNumber = Number(currentInput);
        arrayOfNumbers.push(currentNumber);
} while(currentInput !== null);

let sumArray = 0;
if (arrayOfNumbers.length > 0){
    for(let Number of arrayOfNumbers){
        sumArray += Number;
    }
}
console.log(`Общая сумма чисел равна ${sumArray}`);