// find the elements
const container = document.querySelector('.container');
const toDoForm = document.querySelector('.todo_form');
const inputToDo = document.querySelector('#input_todo');
const addTodoButton = document.querySelector('#addTodoButton');
const todoLists = document.querySelector('#lists');
const message = document.querySelector('#message');

// create Todo
const createTodo = (todoId, todoValue) => {
  const todoElement = document.createElement('li');
  todoElement.id = todoId;
  todoElement.classList.add("li_style");
  todoElement.innerHTML = `
                        <span class= "todovalue">${todoValue}</span>
                        <span>
                          <button class= "btn"id="deleteButton">
                            <i class = "fa fa-trash"></i>
                          </button> 
                        </span>
                        `
  todoLists.appendChild(todoElement);
}


// showmessage
const showmessage = (text, status) => {
  message.textContent = text;
  message.classList.add(`bg_${status}`);

  setTimeout(() => {
    message.textContent = '';
    message.classList.remove(`bg_${status}`);
  }, 1000)
}

// add todo
const addTodo = (event) => {
  event.preventDefault();
  const todoValue = inputToDo.value;

  // unick id
  const todoId = Date.now().toString();
  inputToDo.value = '';

  // function call
  createTodo(todoId, todoValue);
  showmessage('Todo is created', 'success');
}

// adding listeners
toDoForm.addEventListener("submit", addTodo);