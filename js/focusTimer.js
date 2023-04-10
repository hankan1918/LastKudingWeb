const timeInput = document.querySelector("#timeInput");
const achievementInput = document.querySelector("#achievementInput");
const timer = document.querySelector("#timer");
const achievement = document.querySelector("#achievement");
const focusInput = document.querySelector("#focusInput");
const date = new Date();
let leftTime;
const STORAGEKEY = 'setTime'
const setTime = window.localStorage.getItem(STORAGEKEY);

if(setTime == undefined){
    waitFocusMode();
}

function waitFocusMode(){
    focusInput.classList.remove("hidden");
    achievement.classList.add("hidden");
    timer.classList.add("hidden");
}

function OnFocusMode(event){
    event.preventDefault();
    console.log(timeInput.value, achievementInput.value);
    achievement.innerText = achievementInput.value;
    window.localStorage.setItem(STORAGEKEY,timeInput.value);
    drawLeftTime();
    focusInput.classList.add("hidden");
    achievement.classList.remove("hidden");
    timer.classList.remove("hidden");

    if(leftTime==0){
        alert(`Time for Focus on ${achievementInput.value} is over!`);
        waitFocusMode();
    }
}
function drawLeftTime(){
    // setTime = window.localStorage.getItem(STORAGEKEY);
    timer.innerText = `${abs(date.getMinutes() - Number(setTime))}M`;
}
focusInput.addEventListener("submit", OnFocusMode);

setInterval(() => {
    
    drawLeftTime();
}, 1000);