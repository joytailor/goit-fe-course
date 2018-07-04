'use strict';
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('login pls');
const checkLoginValidity = function(login){
    return login.length >= 4 && login.length <= 16
};
const checkIfLoginExists = function(logins,login){
    return logins.includes(login)
    };
const addLogin = function(logins,login){
if(checkLoginValidity = false){ break;
console.log('Ошибка! Логин должен быть от 4 до 16 символов');
} else if(checkIfLoginExists = false){
    login.push(logins)
    console.log('Логин успешно добавлен!');
} else {console.log('Такой логин уже используется!');}
}