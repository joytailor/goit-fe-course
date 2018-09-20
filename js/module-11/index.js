'use:strict';

/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/

const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
]

const form = document.querySelector('.js-form');
const checkBoxesSize = document.querySelectorAll('.size');
const checkBoxesColor = document.querySelectorAll('.color');
const checkBoxesReleaseDate = document.querySelectorAll('.release_date');
const submitBtn = document.querySelector('button[type=submit]');
const resetBtn = document.querySelector('button[type=reset]');

 
 const root = document.querySelector('.js_info').innerHTML.trim();
 const source = document.querySelector("#js_markup").innerHTML.trim();
 const template = Handlebars.compile(source);


function handleResetBtnClick(event){
 event.preventDefault();
 parent.innerHTML = "";
 form.reset();
}

function createMarkup(arr){
 
 const markup = arr.reduce((acc, laptop) => acc + template(laptop), "");
 root.insertAdjacentHTML("afterbegin", markup);
}

function filterInfo(obj){
console.log('obj', obj)
const sizePattern = obj.size;
const colorPattern = obj.color;
const releaseDatePattern = obj.release_date;
const filteredArray =  laptops.filter(el=> sizePattern.length !== 0 ? sizePattern.includes(el.size) : true 
              && colorPattern.length !== 0 ? colorPattern.includes(el.color) : true 
              && releaseDatePattern.length !== 0 ? releaseDatePattern.includes(el.release_date) : true)
createMarkup(filteredArray);
}

function getCheckedInfo(size, color, release_date){
 let filterValue = {
   size : size,
   color: color,
   release_date: release_date,
 }
 filterInfo(filterValue);
}
function handleSubmitBtnClick(event) {
  event.preventDefault();
  parent.innerHTML = "";
  let size = [];
  let color = [];
  let release_date = [];
  checkBoxesSize.forEach(el =>{
    if(el.checked){
      size.push(el.value);
    }
    });
  checkBoxesColor.forEach(el =>{
  if(el.checked){
    color.push(el.value);
  }
  });
  checkBoxesReleaseDate.forEach(el =>{
    if(el.checked){
      release_date.push(el.value);
    }
    });
    console.log(size, color, release_date);
    getCheckedInfo(size, color, release_date);
    form.reset();
  };