const nameinput = document.querySelector("#nameinput");
const namebutton = document.querySelector("#namebutton");
const nameForm = document.querySelector("#nameForm");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logOut");
const GREETINGKEY = 'nickname';
const NAME = window.localStorage.getItem(GREETINGKEY);

if(NAME != undefined){
    nameForm.classList.add('hidden');
    greeting.classList.remove('hidden');
    logout.classList.remove('hidden');
    greeting.innerText = `Hello, ${window.localStorage.getItem(GREETINGKEY)}`;
}

function logOutHandler(){
    window.localStorage.removeItem(GREETINGKEY);
    nameForm.classList.remove('hidden');
    greeting.classList.add('hidden');
    logout.classList.add('hidden');
    greeting.innerText = '';
}

function greetingHandler(event){
    event.preventDefault();
    window.localStorage.setItem(GREETINGKEY, nameinput.value);
    nameForm.classList.add('hidden');
    greeting.classList.remove('hidden');
    logout.classList.remove('hidden');
    greeting.innerText = `Hello, ${window.localStorage.getItem(GREETINGKEY)}`;
    
}

logout.addEventListener("click", logOutHandler);
namebutton.addEventListener("click", greetingHandler);