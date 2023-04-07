const body = document.querySelector("body");
const darkMode = document.querySelector("#darkMode");
const local = window.localStorage.getItem('darkmode');
const button = document.querySelectorAll("button")[1];

body.classList.remove('hidden');

if(local==undefined) window.localStorage.setItem('darkmode','off');
if(local=='off'){
    body.id = 'day';
    darkMode.innerText = '🌙';
    button.style.color = 'rgb(26,26,26)';
}
else if(local=='on'){
    body.id = 'dark';
    darkMode.innerText = '☀️';
    button.style.color = 'white';
}

function handler(){
    const local = window.localStorage.getItem('darkmode');
    if(local=='off'){
        body.id = 'dark';
        darkMode.innerText = '☀️';
        button.style.color = 'white';
        window.localStorage.setItem('darkmode','on');
    }
    else{
        body.id = 'day';
        darkMode.innerText = '🌙';
        button.style.color = 'rgb(26,26,26)';
        window.localStorage.setItem('darkmode','off');
    }
}

darkMode.addEventListener("click", handler);