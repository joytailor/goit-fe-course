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

 function createMarkup(item){
    const source = document.querySelector('#js_markup').innerHTML.trim();
     const template = Handlebars.compile(source);
     const markup = template(item);
     list.insertAdjacentHTML('afterbegin', markup);
     saveMarkup(list);
   return list;
  }

list.addEventListener('click', deleteItem);

function deleteItem(event){
    let nodeName = event.target.nodeName;
    let parent = event.target.parentNode;
    if(nodeName = 'BUTTON'){
    parent.remove();
    }
}

function saveMarkup(item){
    localStorage.setItem('bookmarks', JSON.stringify(item));
}

function getMarkup(){
    return localStorage.getItem('bookmarks');
}