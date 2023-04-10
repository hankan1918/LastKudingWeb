const timeInput = document.querySelector("#timeInput");
const achievementInput = document.querySelector("#achievementInput");
const focusInput = document.querySelector("#focusInput");
const timer = document.querySelector("#timer");
const achievement = document.querySelector("#achievement");
const focusTimer = document.querySelector('#focusTimer');
const FOCUSACHIKEY = 'achi';
const FOCUSTIMERKEY = 'times';
const local = window.localStorage;
const date = new Date();

function setStorageHandler(event){
    event.preventDefault();
    console.log(achievementInput.value, timeInput.value);
    local.setItem(FOCUSTIMERKEY,timeInput.value);
    local.setItem(FOCUSACHIKEY, achievementInput.value);
    focusInput.classList.add('hidden');
    focusTimer.classList.remove('hidden');
}

function drawTimer(){
    achievement.innerText = local.getItem(FOCUSTIMERKEY);
    timer.innerText = local.getItem(focusTimer)
}

focusInput.addEventListener("submit", setStorageHandler);