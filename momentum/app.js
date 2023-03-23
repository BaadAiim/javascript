const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handle1() {
    console.log(loginInput.value);
}

loginButton.addEventListener("click", handle1);