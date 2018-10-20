'use: strict';

export default class View {
     
    constructor(){
        this.refs = {};
        this.refs.form = document.querySelector('.js-form');
        this.refs.input = document.querySelector('.js-input');
        this.refs.btn = document.querySelector('.js-btn');
        this.refs.listWrapper = document.querySelector('.bookmarks-list');
        this.refs.source = document.querySelector('#js_markup').innerHTML.trim();
        this.refs.template = Handlebars.compile(source);

    }

    createList(items) {

        const markup = items.reduce( (acc, el) => acc + template( {
          name: 'Site:' + el,
          url: el,
          descr: 'descr',
          img: '...'
        }), "" );
        this.refs.listWrapper.insertAdjacentHTML(
          "afterbegin",
          markup
        );
        console.log('CreateList');
      }
}