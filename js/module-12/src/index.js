 const form = document.querySelector('.js-form');
 const input = document.querySelector('.js-input');
 const btn = document.querySelector('.js-btn');
 const list = document.querySelector('.bookmarks-list');

btn.addEventListener('click', handlerAddNote);

let lists;
window.onload = function() {
   lists = localStorage.getItem('links') ? JSON.parse(localStorage.getItem('links')) : [];
  createList(lists);
}

function handlerAddNote (evt){

   evt.preventDefault();
   let target = evt.target;
   const request = input.value;
   lists.includes(request)? alert('Такой адрес существует!'):
   checkURL(request)? lists.push(request) : false;
   form.reset();
   localStorage.lists = JSON.stringify(lists);
   createList(request);
}

function checkURL(url) {
    let regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
    return regURL.test(url);
}

 const items = document.querySelectorAll('.list-item');

 function createList(item){
    const source = document.querySelector('#js_markup').innerHTML.trim();
     const template = Handlebars.compile(source);
     const markup = template(item);
     list.insertAdjacentHTML('afterbegin', markup);
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
