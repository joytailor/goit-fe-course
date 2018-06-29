'use strict';
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const checkLoginValidity = function(login){
if(login.length >= 4 && login.length <= 16){
    return true;
} return false;
};
const checkIfLoginExists = function(logins,login){
 if(logins.includes(login)){
     return true;
 } return false;
};
