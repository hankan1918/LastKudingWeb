//입력부
const timeInput = document.querySelector("#timeInput");
const achievementInput = document.querySelector("#achievementInput");
const focusInput = document.querySelector("#focusInput");

//줄력부
const timer = document.querySelector("#timer");
const achievement = document.querySelector("#achievement");
const focusTimer = document.querySelector('#focusTimer');
const quiteButton = document.querySelector('#quitButton')

const localtimer = window.localStorage;

const SETTIMEKEY = 'settime';
const TIMERKEY = 'timer';
const ACHIEVEMENTKEY = 'achievement';

let time=0;

function DrawTimer(){
    achievement.innerText = localtimer.getItem(ACHIEVEMENTKEY)
    const curTime = new Date();
    time = Number(localtimer.getItem(TIMERKEY))-((curTime.getTime() - new Date(localtimer.getItem(SETTIMEKEY)).getTime())/(1000*60));
    timer.innerText = `${Math.ceil(time)}M left.`;

}

function forceQuit(){
    time = -1;
}

function whileRunningTimer(state){
    if(state){
        focusInput.classList.add('hidden');
        focusTimer.classList.remove('hidden');
        DrawTimer();
    }
    else{
        focusInput.classList.remove('hidden');
        focusTimer.classList.add('hidden');
    }
}

function inputHandler(event){
    event.preventDefault();
    localtimer.setItem(ACHIEVEMENTKEY, achievementInput.value);
    localtimer.setItem(TIMERKEY, timeInput.value);
    localtimer.setItem(SETTIMEKEY, new Date());
    whileRunningTimer(1);

}
focusInput.addEventListener("submit", inputHandler);
quiteButton.addEventListener("click",forceQuit);

if(localtimer.getItem(SETTIMEKEY)==undefined){
    whileRunningTimer(0);
}
else{
    whileRunningTimer(1);
}

setInterval(() => {
    if(time<0){
        whileRunningTimer(0);
        alert(`${localtimer.getItem(ACHIEVEMENTKEY)} is over!`);
        localtimer.removeItem(ACHIEVEMENTKEY);
        localtimer.removeItem(TIMERKEY);
        localtimer.removeItem(SETTIMEKEY);
        time = 0;
    }
    else{
        if(localtimer.getItem(SETTIMEKEY)!=undefined){
            DrawTimer();
            //console.log(time);
        }
    }
}, 1000);