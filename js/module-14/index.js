'use: strict';

const elem = document.querySelector('.text');

const x = true;

function testFunction(elem, x){
      elem.textContent = x;
      console.log(elem);
}
testFunction(elem, x);
