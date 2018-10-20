'use strict';

var form = document.querySelector('.js-form');
var input = document.querySelector('.js-input');
var btn = document.querySelector('.js-btn');
var listWrapper = document.querySelector('.bookmarks-list');
var source = document.querySelector('#js_markup').innerHTML.trim();
var template = Handlebars.compile(source);

var links = void 0;
window.onload = function () {
  links = localStorage.getItem('links') ? JSON.parse(localStorage.getItem('links')) : [];
  createList(links);
};

function checkURL(url) {
  var regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
  return regURL.test(url);
}

function createList(items) {

  var markup = items.reduce(function (acc, el) {
    return acc + template({
      name: 'Site:' + el,
      url: el,
      descr: 'descr',
      img: '...'
    });
  }, "");
  listWrapper.insertAdjacentHTML("afterbegin", markup);
  console.log('CreateList');
}

function handlerAddNote(evt) {
  evt.preventDefault();
  var target = evt.target;
  var request = input.value;
  links.includes(request) ? alert('Такой адрес существует!') : checkURL(request) ? links.push(request) : false;
  form.reset();
  localStorage.links = JSON.stringify(links);
  console.log(links);
  createList([request]);
}

listWrapper.addEventListener('click', deleteItem);

function deleteItem(event) {
  var nodeName = event.target.nodeName;
  var parent = event.target.parentNode;
  if (nodeName = 'BUTTON') {
    parent.remove();
  }
}

btn.addEventListener('click', handlerAddNote);