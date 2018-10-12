import Model from './model';
import View from './view';
import Controller from './controller';

const model = new Model();
const view = new View();

new Controller(model, view);


const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const list = document.querySelector('.bookmarks-list');

document.addEventListener('DOMContentLoaded', getMarkup);

btn.addEventListener('click', handleBtnCLick);

function handleBtnCLick (evt){
    event.preventDefault();
checkValidity(input.value);
form.reset();
}

const items = document.querySelectorAll('.list-item');

function checkValidity(value){
findElem(value);
if( findElem(value) === false){
   createMarkup(value);
}
alert('Такой элемент уже существует!');
}

function findElem(elem){
   items.find(item => item.includes(elem));
}


list.addEventListener('click', deleteItem);



function saveMarkup(item){
   localStorage.setItem('bookmarks', JSON.stringify(item));
}

function getMarkup(){
   return localStorage.getItem('bookmarks');
}