const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_USERNAME = "hidden";

function submithandle(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_USERNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username} you can do it`;
    greeting.classList.remove(HIDDEN_USERNAME);
}

loginForm.addEventListener("submit", submithandle);