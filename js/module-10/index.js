'use:strict';
/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/
const apiUrl = "https://test-users-api.herokuapp.com/users/"

const form = document.querySelector("form");

const getAllDataBtn = document.querySelector("button[data-action=get-all-data]"); 
const getIdDataBtn = document.querySelector("button[data-action=get-id-data]"); 
const postDataBtn = document.querySelector("button[data-action=post-data]"); 
const removeDataBtn = document.querySelector("button[data-action=remove-data]"); 
const updateDataBtn = document.querySelector("button[data-action=update-data]"); 

const inputName = document.querySelector("input[name=name]");
const inputId = document.querySelector("input[name=id]");
const inputAge = document.querySelector("input[name=age]");

const result = document.querySelector(".result");

getAllDataBtn.addEventListener('click', handleGetAllDataBtnClick);
getIdDataBtn.addEventListener('click', handleGetIdDataBtnClick);
postDataBtn.addEventListener('click', handlePostDataClick);
removeDataBtn.addEventListener('click', handleRemoveUserClick);
updateDataBtn.addEventListener('click', handleUpdateUserClick);

function handleGetAllDataBtnClick(evt){
  result.innerHTML = "";
  event.preventDefault();
getAllUsers().then(data =>{
  data.data.forEach(item => createTextContent(item));
}); 
};

function handleGetIdDataBtnClick(evt){
  result.innerHTML = "";
  event.preventDefault();
  getUserById(inputId.value).then(data =>{createTextContent(data.data)});
  form.reset();
}

function handlePostDataClick(evt){
  result.innerHTML = "";
  event.preventDefault();
  addUser(inputName.value, inputAge.value);
  form.reset();
}

function handleRemoveUserClick(evt){
  result.innerHTML = "";
  event.preventDefault();
  removeUser(inputId.value);
  form.reset();
}

function handleUpdateUserClick(evt){
  result.innerHTML = "";
  event.preventDefault();
  updateUser(inputId.value, inputName.value, inputAge.value);
  form.reset();
}

function getAllUsers(){
    return fetch(apiUrl).then(
      response =>{if(response.ok) return response.json()
      throw new Error(`Error while fetching: ${response.statusText}`)}
    ).catch(error =>{
      console.log(error);
    })
}

function getUserById(id){
  return fetch(`${apiUrl}${inputId.value}`).then(response => 
    {if(response.ok) return response.json()
    throw new Error(`Error while fetching: ${response.statusText}`)
    })
    .catch(error =>{
        console.log(error);
    })
}

function addUser(name,age){
 try {
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ name: name, age: age}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });
 } catch (error) {
   console.log(`Error while fetching: ${error}`);
 } 
}

function removeUser(id){
  try {
    fetch(apiUrl + id,{
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  } catch (error) {
    console.log(`Error while fetching: ${error}`);
  }
}

function updateUser(id, name, age){
  try {
    fetch(apiUrl + id, {
      method: 'PUT',
      body: JSON.stringify({ name: name, age: age}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });
   } catch (error) {
     console.log(`Error while fetching: ${error}`);
   } 
}

function createTextContent(item){
  console.log(item)
  const resultItem = document.createElement('p');
  resultItem.classList.add('result_item');
  resultItem.innerHTML = `User ID: ${item.id}<br>
  User name: ${item.name}<br>
  User age: ${(item.age !== null) ? item.age : "Unknown"}`;
 result.appendChild(resultItem);
 return result;
} 