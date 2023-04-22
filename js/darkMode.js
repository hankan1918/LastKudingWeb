const body = document.querySelector("body");
const darkMode = document.querySelector("#darkMode");
const local = window.localStorage.getItem('darkmode');
const button = document.querySelectorAll("button");
const input = document.querySelectorAll('input');

body.classList.remove('hidden');

if(local==undefined) window.localStorage.setItem('darkmode','off');

if(local=='off'){
    body.id = 'day';
    darkMode.innerText = '🌙';
    ModeChange(local);
}
else if(local=='on'){
    body.id = 'dark';
    darkMode.innerText = '☀️';
    ModeChange(local);
}

function ModeChange(mode){
    if(mode == 'off'){
        body.id = 'day';
        darkMode.innerText = '🌙';
        for (let i = 0; i<button.length; i++) button[i].style.color='rgb(26,26,26)';
        for (let i = 0; i<input.length; i++) input[i].style.color='rgb(26,26,26)';
    }
    else{
        body.id = 'dark';
        darkMode.innerText = '☀️';
        for (let i = 0; i<button.length; i++) button[i].style.color='white';
        for (let i = 0; i<input.length; i++) input[i].style.color='white';
    }
}

function handler(){
    const local = window.localStorage.getItem('darkmode');
    if(local=='off'){
        window.localStorage.setItem('darkmode','on');
        const local = window.localStorage.getItem('darkmode');
        ModeChange(local);
    }
    else{
        window.localStorage.setItem('darkmode','off');
        const local = window.localStorage.getItem('darkmode');
        ModeChange(local);
    }
}

darkMode.addEventListener("click", handler);