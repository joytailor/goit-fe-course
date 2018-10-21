'use: strict';

export default class Controller  {
    constructor(model, view){
        this._view = view;
        this._model = model;
        this._view.refs.listWrapper.addEventListener('click', this.deleteItem.bind(this));
        this._view.refs.btn.addEventListener('click', this.handleAddNote.bind(this));
        document.addEventListener('DOMContentLoaded', this.handleAddList.bind(this));
        
    }
    handleAddNote(evt) {
        evt.preventDefault();
        let target = evt.target;
        let links = this._model.links;
        let request = this._view.refs.input.value;
        this._view.refs.form.reset();
        console.log(links);
        const result = this._model.checkItem(request);
        console.log(result);
        if(result !== null){this._view.createList([request])};
        this._model.addItem(links, request);
      }
      handleAddList(e){
        window.onload = () => {
           this._model.getItems();
           this._view.createList(this._model._links);
          };
       }
   deleteItem(e){
        let nodeName = event.target.nodeName;
        let parent = event.target.parentNode;
        let link = event.target.previousSibling.href;
        let indexOfLink = this._model._links.indexOf(link);
        if(nodeName = 'BUTTON'){
        parent.remove();
        }
        localStorage.removeItem(this._model._links.splice(indexOfLink, 1));
    console.log(this._model._links);
    console.log(link);
    console.log(indexOfLink);
    this._model.updateLocalStorage()
   }
  
}