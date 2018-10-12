function createMarkup(item){
    const source = document.querySelector('#js_markup').innerHTML.trim();
     const template = Handlebars.compile(source);
     const markup = template(item);
     list.insertAdjacentHTML('afterbegin', markup);
     saveMarkup(list);
   return list;
  }
  function deleteItem(event){
    let nodeName = event.target.nodeName;
    let parent = event.target.parentNode;
    if(nodeName = 'BUTTON'){
    parent.remove();
    }
 }