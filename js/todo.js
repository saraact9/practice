const toDoForm = document.getElementById('todoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todoList');

const TODOS_KEY = 'todos'

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement('li');
    li.id = newToDo.id;
    const span = document.createElement('span');
    span.innerText = newToDo.text;
    const btn = document.createElement('button');
    btn.type = 'button'
    btn.innerText = '❌';
    btn.addEventListener('click', deleteToDo)
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit() {
    event.preventDefault();
    const newToDo = toDoInput.value; 
    toDoInput.value = '';
    const newToDoObj = {
        id : Date.now(),
        text : newToDo,
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null ) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}