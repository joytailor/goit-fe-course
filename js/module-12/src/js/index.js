const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const listWrapper = document.querySelector('.bookmarks-list');
const source = document.querySelector('#js_markup').innerHTML.trim();
const template = Handlebars.compile(source);

let links;
window.onload = function () {
  links = localStorage.getItem('links') ? JSON.parse(localStorage.getItem('links')) : [];
  createList(links);
}

function checkURL(url) {
  let regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
  return regURL.test(url);
}


function createList(items) {

  const markup = items.reduce( (acc, el) => acc + template( {
    name: 'Site:' + el,
    url: el,
    descr: 'descr',
    img: '...'
  }), "" );
  listWrapper.insertAdjacentHTML(
    "afterbegin",
    markup
  );
  console.log('CreateList');
}


function handlerAddNote(evt) {
  evt.preventDefault();
  let target = evt.target;
  const request = input.value;
  links.includes(request) ? alert('Такой адрес существует!') :
  checkURL(request) ? links.push(request) : false;
  checkURL(request) ? createList([request]) : false;
  form.reset();
  localStorage.links = JSON.stringify(links);
  console.log(links);
}


listWrapper.addEventListener('click', deleteItem);

function deleteItem(event) {
  let nodeName = event.target.nodeName;
  let parent = event.target.parentNode;
  let link = event.target.previousSibling.href;
  let indexOfLink = links.indexOf(link);
  if (nodeName = 'BUTTON') {
    parent.remove();
  }
  localStorage.removeItem(links.splice(indexOfLink, 1));
  console.log(links);
  console.log(link);
  console.log(indexOfLink);
  localStorage.links = JSON.stringify(links);
}


btn.addEventListener('click', handlerAddNote);
