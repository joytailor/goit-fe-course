'use: strict';

export default class Model {
    constructor(links = []){
      this._links = links;
    }
    getItems(){
      return this._links = localStorage.getItem('links') ? JSON.parse(localStorage.getItem('links')) : [];
    }

      addItem(links, request) {
        this._links.includes(request) ? alert('Такой адрес существует!') :
      this.checkURL(request) ? this._links.push(request) : false;
      localStorage.links = JSON.stringify(this._links);
    }

    checkItem(request){
      let itemAvailability = this._links.includes(request);
      let itemValidity;
      if(itemAvailability === false){this.checkURL(request) ? itemValidity = true : itemValidity = false;}
      console.log(itemAvailability);
      console.log(itemValidity);
      if(itemValidity === true){return request;}
        return null;
    }

  checkURL(url) {
   let regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
   return regURL.test(url);
}
updateLocalStorage(){
  localStorage.links = JSON.stringify(this._links);
}
}
