'use: strict';
/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

const clockface = document.querySelector(".js-time");
const lapBtn = document.querySelector('.js-take-lap');
const startBtn = document.querySelector(".js-start");
const resetBtn = document.querySelector(".js-reset");


const laps = {
    id: null,
    startTime: null,
    isActive: false,
    deltaTime: 0,
    laps: [],
    start(){
        if(this.isActive) return;

        this.isActive = true;
        this.startTime = Date.now() - this.deltaTime;
        console.log(this.startTime),

        this.id = setInterval(() => {
            const currentTime = Date.now();
            this.deltaTime = currentTime - this.startTime;

            
            updateClockFace(this.deltaTime);
        }, 100)

    },
    stop(){
        clearInterval(this.id);
        this.isActive = false;
    },
    reset(){
        clearInterval(this.id);
        this.deltaTime = 0;
        updateClockFace(this.deltaTime);
        this.isActive = false;
    },

    lap(){
        const lapTime = formatTime(this.deltaTime);
        this.laps.push(lapTime);
        
        console.log(this.laps);
        const ul = document.querySelector('.js-laps');

        console.log(this.laps);
        const li = document.createElement('li');
        li.textContent = this.laps[this.laps.length -1];
 
    ul.appendChild(li);
   
   return ul;
    },
};

function updateClockFace (time) {
    const formattedTime = formatTime(time);
    clockFace.textContent = formattedTime;
}

function formatTime (ms){
    const newDate = new Date(ms);

    let minutes = newDate.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = newDate.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;


    const mseconds = String(newDate.getMilliseconds()).slice(0, 1);

    return`${minutes}:${seconds}.${mseconds}`;
}

startBtn.addEventListener('click', handleStartBtnClick);
lapBtn.addEventListener('click', handleLapBtnClick);
resetBtn.addEventListener('click', handleResetBtnClick);

function handleStartBtnClick(){
    if(!laps.isActive){
        laps.start();
        this.textContent = 'Pause';
    } else{
        laps.stop();
        this.textContent = 'Continue';
    };
}
function handleResetBtnClick(){
    laps.reset();
    startBtn.textContent = 'Start';
}

function handleLapBtnClick(){
   laps.lap();
}