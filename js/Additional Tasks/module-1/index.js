'use strict';
// let name;
// let guest;
// name = 'Mango';
// guest = name;
// console.log( guest );

// const day = 02;
// const month = 10;
// const year = 2017;
// const date = `${day}\\${month}\\${year}`; 
// console.log(date); // 02\10\2017

// const name = prompt('Введите Ваше имя:', '')
// const message = alert(name);

// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';
// const message = `${name} прибывает на отдых ${date} в ${roomType}`;
// console.log(message); 

// const padding = Number.parseInt('20px');
// const border = Number.parseInt('5px');
// const contentWidth = Number.parseInt('100px');
// let totalWidth = padding + border + contentWidth +'px';
// console.log(totalWidth); 

// let message;
// const yearNum = prompt('Какой сейчас год?');
// if (yearNum === "2018") {
//     message = alert('Всё верно!');
// } else {
//     message = alert('Но ведь на вдоре 2018!');
// }

// let message;
// const randomNum = prompt('Введите произвольное целое число');
// const asNumber = Number(randomNum);
// const isNaN = Number.isNaN(asNumber);
// if (randomNum === null){
//     message = alert('Приходите еще!');
// } else if (isNaN === true){
//     message = alert('Необходимо было ввести целое число!');
// } else if (isNaN ===false){
//     message = alert('Спасибо!');
// }

// const num = Number.parseInt(Math.random() * 100);
// let type = num % 2 === 0 ? 'even' : 'odd';
// console.log(`${num} is ${type}`);

// 9 - ?????? let hours = 7;
//  let minutes = 3;
//  let seconds = 42;

//  const time = `${hours}:${minutes}:${seconds}`;

//  console.log('Time is: ', time);

// let message 
// let number = prompt('Введите число от 1 до 5');
// if (number === null){
//     message = alert('Очень жаль, приходите еще!')
// } else if(number === "1" || number === "2" || number === "3" || number === "4" || number === "5"){
//     switch (number){
//      case "1":
//         message = alert('Каталог хостелов');
//         break;
//      case "2":
//         message = alert('Каталог бюджетных отелей');
//         break;
//      case "3":
//         message = alert('Каталог отелей ***');
//         break;
//      case "4":
//         message = alert('Каталог отелей ****');
//         break;
//      case "5":
//         message = alert('Каталог лучших отелей');
//         break;
//     }
// } else {
//     message = alert('Неверный ввод, возможные варианты 1-5!');
// }