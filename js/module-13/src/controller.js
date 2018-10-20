'use: strict';

export default class Controller  {
    constructor(view, model){
        this._view = view;
        this._model = model;
        this._view.refs.listWrapper.addEventListener('click', this.deleteItem.bind(this));
        this._view.refs.btn.addEventListener('click', this.handleAddNote.bind(this));
        document.addEventListener('DOMContentLoaded', this.handleAddList.bind(this));
        
    }
    handleAddNote(evt) {
        evt.preventDefault();
        let target = evt.target;
        this._model.addItem(this._view.links, this._view.refs.input.value);
        form.reset();
        console.log(links);
    this._view.createList([request]);
      }
   handleAddList(e){
    window.onload = function () {
       this_model.getItems();
       this_view.createList(links);
      }
   }
   deleteItem(e){
        let nodeName = event.target.nodeName;
        let parent = event.target.parentNode;
        if(nodeName = 'BUTTON'){
        parent.remove();
        }
   }
  
}