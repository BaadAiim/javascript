const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function submithandle(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function clickhandle() {
    alert("Go To GitHub");
}

loginForm.addEventListener("submit", submithandle);
link.addEventListener("click", clickhandle);