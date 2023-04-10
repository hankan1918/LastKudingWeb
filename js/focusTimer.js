const timeInput = document.querySelector("#timeInput");
const achievementInput = document.querySelector("#achievementInput");
const focusInput = document.querySelector("#focusInput");
const timer = document.querySelector("#timer");
const achievement = document.querySelector("#achievement");
const focusTimer = document.querySelector('#focusTimer');
const FOCUSACHIKEY = 'achi';
const FOCUSTIMERKEY = 'times';
const FOCUSENDKEY ='endtime';
const local = window.localStorage;
const date = new Date();

if(local.getItem(FOCUSTIMERKEY)!=undefined&&local.getItem(FOCUSACHIKEY)!=undefined){
    drawTimer();
    hideInputForm();
}

function hideInputForm(){
    focusInput.classList.add('hidden');
    focusTimer.classList.remove('hidden');
}

function showInputForm(){
    focusTimer.classList.add('hidden');
    focusInput.classList.remove('hidden');
}

function drawTimer(){
    achievement.innerText = local.getItem(FOCUSACHIKEY);
    timer.innerText = local.getItem(FOCUSLEFTKEY);
}

function setStorageHandler(event){
    event.preventDefault();
    console.log(achievementInput.value, timeInput.value);
    local.setItem(FOCUSTIMERKEY,timeInput.value);
    const hours = String(date.getHours()).padStart(2,0);
    const minutes = String(date.getMinutes()).padStart(2,0);
    const seconds = String(date.getSeconds()).padStart(2,0);
    const settime = `${hours}:${minutes}:${seconds}`;
    local.setItem(FOCUSENDKEY, settime)
    local.setItem(FOCUSACHIKEY, achievementInput.value);
    drawTimer();
    hideInputForm();


    // setInterval(() => {
    //     local.setItem(FOCUSLEFTKEY)=date.getMinutes()-Number(local.getItem(FOCUSTIMERKEY));
    //     drawTimer();
    // }, 1000);
}

focusInput.addEventListener("submit", setStorageHandler);
