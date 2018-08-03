'use: strict';
/*
  Напишите функцию-конструктор StringBuilder.
  
  На вход она получает один параметр string - строку.
  
  Добавьте следующие методы в prototype функции-конструктора.
  
    - getValue() - выводит в консоль текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/


function StringBuilder(string = "") {
  this.value = string;
}
StringBuilder.prototype.showValue = () => {console.log(`Current value : ${this.value}`)};

StringBuilder.prototype.append = (str) => {str + this.value};

StringBuilder.prototype.prepend = (str) => {this.value + str};

StringBuilder.prototype.pad = (str) => {str + this.value + str};

const myString = new StringBuilder('.');

myString.append('^'); 
myString.showValue(); // '.^'

myString.prepend('^'); 
myString.showValue(); // '^.^'

myString.pad('='); 
myString.showValue(); // '=^.^='
