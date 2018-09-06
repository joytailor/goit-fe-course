'use:strict';

/*
  Дан спан и кнопки +1, -1, которые будут увеличивать 
  и уменьшать на 1 значение спана. Сделайте так, чтобы 
  это значение не могло стать меньше нуля.
*/
const addBtn = document.querySelector('.js-add');

const subBtn = document.querySelector('.js-sub');

const value = document.querySelector('.js-value');



addBtn.addEventListener('click', handleBtnClick);


function handleBtnClick(event) {
  let num = Number(value.textContent);
 num += 1;
  value.innerHTML = num;
};

subBtn.addEventListener('click', handleSubBtnClick);

function handleSubBtnClick(event){
    let num = Number(value.textContent);
    if(num<=0){return;}
    num -= 1;
     value.innerHTML = num;

}