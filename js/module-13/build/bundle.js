!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/joytailor/goit-fe-course/tree/master/js/module-13/build",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._links=t}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,[{key:"getItems",value:function(){return this._links=localStorage.getItem("links")?JSON.parse(localStorage.getItem("links")):[]}},{key:"addItem",value:function(e,t){this._links.includes(t)?alert("Такой адрес существует!"):this.checkURL(t)&&this._links.push(t),localStorage.links=JSON.stringify(this._links)}},{key:"checkItem",value:function(e){var t,n=this._links.includes(e);return!1===n&&(t=!!this.checkURL(e)),console.log(n),console.log(t),!0===t?e:null}},{key:"checkURL",value:function(e){return/^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i.test(e)}},{key:"updateLocalStorage",value:function(){localStorage.links=JSON.stringify(this._links)}}]),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.refs={},this.refs.form=document.querySelector(".js-form"),this.refs.input=document.querySelector(".js-input"),this.refs.btn=document.querySelector(".js-btn"),this.refs.listWrapper=document.querySelector(".bookmarks-list"),this.refs.source=document.querySelector("#js_markup").innerHTML.trim(),this.refs.template=Handlebars.compile(this.refs.source)}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,[{key:"createList",value:function(e){var t=this,n=e.reduce(function(e,n){return e+t.refs.template({name:"Site:"+n,url:n,descr:"descr",img:"..."})},"");this.refs.listWrapper.insertAdjacentHTML("afterbegin",n),console.log("CreateList")}}]),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._view=n,this._model=t,this._view.refs.listWrapper.addEventListener("click",this.deleteItem.bind(this)),this._view.refs.btn.addEventListener("click",this.handleAddNote.bind(this)),document.addEventListener("DOMContentLoaded",this.handleAddList.bind(this))}return function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(e,[{key:"handleAddNote",value:function(e){e.preventDefault();e.target;var t=this._model.links,n=this._view.refs.input.value;this._view.refs.form.reset(),console.log(t);var r=this._model.checkItem(n);console.log(r),null!==r&&this._view.createList([n]),this._model.addItem(t,n)}},{key:"handleAddList",value:function(e){var t=this;window.onload=function(){t._model.getItems(),t._view.createList(t._model._links)}}},{key:"deleteItem",value:function(e){event.target.nodeName;var t=event.target.parentNode,n=event.target.previousSibling.href,r=this._model._links.indexOf(n);"BUTTON"&&t.remove(),localStorage.removeItem(this._model._links.splice(r,1)),console.log(this._model._links),console.log(n),console.log(r),this._model.updateLocalStorage()}}]),e}())(new i,new l)}]);