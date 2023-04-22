// 게시글을 저장할 배열
let boardData = [];

// DOM 객체
const inputForm = document.querySelector('#list form');
const inputField = document.querySelector('#inputField');
const board = document.querySelector('#board ul');

// 로컬스토리지에 저장된 게시글 불러오기
if(localStorage.getItem('boardData')) {
  boardData = JSON.parse(localStorage.getItem('boardData'));
  renderBoard();
}

// 게시글 추가 함수
function addBoardItem(event) {
  event.preventDefault();
  const inputValue = inputField.value.trim();

  if(inputValue === '') return;

  const newBoardItem = {
    id: Date.now(),
    content: inputValue
  };

  boardData.push(newBoardItem);
  inputField.value = '';
  renderBoard();
  saveData();
}

// 게시글 삭제 함수
function deleteBoardItem(event) {
  if(!event.target.classList.contains('delete')) return;

  const deleteId = parseInt(event.target.parentNode.dataset.id);
  boardData = boardData.filter(item => item.id !== deleteId);
  renderBoard();
  saveData();
}

// 게시글 렌더링 함수
function renderBoard() {
  let html = '';
  boardData.forEach(item => {
    html += `
      <li data-id="${item.id}">
        <button class="delete">✅</button>
        <span class="content">${item.content}</span>
      </li>
    `;
  });
  board.innerHTML = html;
}

// 데이터 저장 함수
function saveData() {
  localStorage.setItem('boardData', JSON.stringify(boardData));
}

// 이벤트 리스너 등록
inputForm.addEventListener('submit', addBoardItem);
board.addEventListener('click', deleteBoardItem);
