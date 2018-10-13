'use: strict';

export default class Controller  {
    constructor(view, model){
        this._view = view;
        this._model = model;
        this._view.refs.list.addEventListener('click', this.deleteItem.bind(this));
        this._view.refs.btn.addEventListener('click', this.handleAddNote.bind(this));
        document.addEventListener('DOMContentLoaded', this.handleAddList.bind(this));
        
    }
   handleAddNote(e){
       e.preventDefault();
       const text = this._view.refs.input.value;
       model.setItem(text).then(text => view.addItem(text));
   }
   handleAddList(e){
    e.preventDefault();
     model.getItems().then(lists => view.initItems(lists));
   }
   deleteItem(e){
        let nodeName = event.target.nodeName;
        let parent = event.target.parentNode;
        if(nodeName = 'BUTTON'){
        parent.remove();
        }
   }
  
}