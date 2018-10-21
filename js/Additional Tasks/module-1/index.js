'use strict';
const arr = [1,2,3,4,5];

const x = 5;

function find(arr,x){
        const result = arr.includes(x);
        return result;
}
console.log(find(arr,x))
