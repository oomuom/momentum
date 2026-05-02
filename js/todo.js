const todoDiv = document.getElementById("todo-list");
const todoForm = todoDiv.querySelector("form");
const todoInput = todoForm.querySelector("input");
const todoList = todoDiv.querySelector("ul");

let todos = [];

function saveTodoList() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodoList();
}

function printTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;

  const span = document.createElement("span");
  span.innerText = todo.name;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.id = "btn-todo";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  todoList.append(li);
}

function inputTodo(event) {
  event.preventDefault();

  const todoId = Date.now();
  const todoName = todoInput.value;
  const todo = { id: todoId, name: todoName };

  todos.push(todo);
  printTodo(todo);
  saveTodoList();

  todoInput.value = "";
}

todoForm.addEventListener("submit", inputTodo);

const savedTodoList = localStorage.getItem("todos");

if (savedTodoList) {
  const parsedTodoList = JSON.parse(savedTodoList);
  todos = parsedTodoList;
  todos.forEach(printTodo);
}
