const loginForm = document.querySelector("#login form");
const input = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function login(event) {
  event.preventDefault();
  const name = input.value;
  localStorage.setItem("name", name);
  loginForm.classList.add("hidden");
  greet(name);
}

function greet(name) {
  greeting.innerHTML = `Hello, ${name}`;
  greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", login);

const savedName = localStorage.getItem("name");

if (savedName) {
  loginForm.classList.add("hidden");
  greet(savedName);
}
