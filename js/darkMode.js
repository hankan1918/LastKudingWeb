const body = document.querySelector("body");
const darkMode = document.querySelector("#darkMode");
const local = window.localStorage.getItem('darkmode');
const button = document.querySelectorAll("button");
const input = document.querySelector('input');

body.classList.remove('hidden');

if(local==undefined) window.localStorage.setItem('darkmode','off');
if(local=='off'){
    body.id = 'day';
    darkMode.innerText = '🌙';
    changeForm(local);
}
else if(local=='on'){
    body.id = 'dark';
    darkMode.innerText = '☀️';
    changeForm(local);
}

function changeForm(mode){
    for (const i of button) {
        if(mode=='off'){
            button[i].style.color='white';
            input[i].style.color='white';
        }
        else{
            button[i].style.color='rgb(26,26,26)';
            input[i].style.color='rgb(26,26,26)';
        }
    }
}

function handler(){
    const local = window.localStorage.getItem('darkmode');
    if(local=='off'){
        body.id = 'dark';
        darkMode.innerText = '☀️';
        changeForm(local);
        window.localStorage.setItem('darkmode','on');
    }
    else{
        body.id = 'day';
        darkMode.innerText = '🌙';
        changeForm(local);
        window.localStorage.setItem('darkmode','off');
    }
}

darkMode.addEventListener("click", handler);