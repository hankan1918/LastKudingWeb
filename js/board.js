const inputField = document.querySelector("#inputField");
const inputButton = document.querySelector("#inputButton");
const board = document.querySelector("#board");

function addlist(event){
    event.preventDefault();
    const ul = document.createElement("ul");
    const check = document.createElement("input");
    check.type = 'checkbox';
    ul.appendChild(check);
    //ul.innerText = inputField.value;
    board.appendChild(ul);
    ul.addEventListener('click', function(){
        li.style.textDecoration = "line-through";
    })
    ul.addEventListener('dblclick', function(){
        board.removeChild(li);

    })
}

window.localStorage
inputButton.addEventListener("click",addlist);