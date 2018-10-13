'use: strict';

export default class Model {
    constructor(lists = []){
 this._lists = lists;
    }
    getItems(){
        return lists = localStorage.getItem('links') ? JSON.parse(localStorage.getItem('links')) : [];
    }

  setItem (value){
   const checkedURL = checkURL(value);
  lists.includes(value)? alert('Такой адрес существует!'):
  checkedURL? this._lists.push(request) : false;
  localStorage.lists = JSON.stringify(this._lists);
  return value;
}

  checkURL(url) {
   let regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
   return regURL.test(url);
}
}
