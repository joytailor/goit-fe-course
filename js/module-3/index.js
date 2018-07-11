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
if(!checkLoginValidity(login)){return alert('Ошибка! Логин должен быть от 4 до 16 символов');
} else if(!checkIfLoginExists(logins,login)){
    logins.push(login)
    alert('Логин успешно добавлен!');
    return logins;
} else {alert('Такой логин уже используется!');
return logins;
}

}

addLogin(logins,login);