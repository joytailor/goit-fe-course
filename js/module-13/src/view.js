'use: strict';

export default class View {
     
    constructor(){
        this.refs = {};
        this.refs.form = document.querySelector('.js-form');
        this.refs.input = document.querySelector('.js-input');
        this.refs.btn = document.querySelector('.js-btn');
        this.refs.list = document.querySelector('.bookmarks-list');
    }
    initItems(items){
    const markup = items.reduce((string,item)=>{
        return string + this.createMarkup(item), '';
    })
     this.refs.list.insertAdjacentHTML('afterbegin', markup);
    }

    addItem(item){
    const markup = this.createMarkup(item);
    this.refs.list.insertAdjacentHTML('afterbegin', markup);
    }

    createMarkup(item){
        return `
        <li class="list-item">${item}
          <button class="del-btn">Удалить</button>
        </li>`
    }

     
}