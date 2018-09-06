'use:strict';
/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/
const form = document.querySelector(".search-form");
const input = document.querySelector("input");
const submitBtn = document.querySelector(".js-submit");
const result = document.querySelector(".js-result");
const apiUrl = "https://restcountries.eu/rest/v2/name/";

submitBtn.addEventListener("click", handleSubmit);

/*
  @param {FormEvent} evt
*/

function handleSubmit(event){
    event.preventDefault();
    fetchCountryData(input.value).then(data =>{
        createTextContent(data);
    })
    form.reset();
}

function fetchCountryData() {
    
  return fetch(`${apiUrl}${input.value}`).then(response => 
    {if(response.ok) return response.json()
    throw new Error(`Error while fetching: ${response.statusText}`)
    })
    .catch(error =>{
        console.log(error);
    })
    
}

function createTextContent(data){
    
    console.log(data)
result.textContent = `Country name: ${data.name}
Capital: столица
Main currency: название денежной единицы
Flag: флаг страны`
}
