'use strict';
let message;
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
const messageBanned = 'Доступ запрещён!';
const messageDeclined ='Отменено пользователем';

let userLogin = prompt('Введите Ваш логин');

if (userLogin === null){
    message = alert(messageDeclined);
}
else if (userLogin === ADMIN_LOGIN){
let userPassword = prompt('Введите Ваш пароль');
if (userPassword === null){
    message = alert(messageDeclined);
} else if(userPassword === ADMIN_PASSWORD){
    message = alert('Добро Пожаловать!');
} else{
    message =  alert(messageBanned);
}
} else {
    message =  alert(messageBanned);
}
