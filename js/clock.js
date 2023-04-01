const bodyset = document.querySelector('body');
const clock = document.querySelector("#clock");
const clockMode = document.querySelector("#clockMode");
let cur = 1;

function setClock(){
    if(cur<0){
        clock.innerText = new Date().toLocaleTimeString();
        clockMode.innerText = '12h';
    }
    else{
        const date = new Date();
        const hours = String(date.getHours()).padStart(2,0);
        const minutes = String(date.getMinutes()).padStart(2,0);
        const seconds = String(date.getSeconds()).padStart(2,0);
        clock.innerText = `${hours}:${minutes}:${seconds}`;
        clockMode.innerText = '24h';
    }
}
function change(){
    cur*=-1;
}

setClock();
bodyset.classList.remove('hidden');
setInterval(setClock, 1000);

clockMode.addEventListener("click", change);