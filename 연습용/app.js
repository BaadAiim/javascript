const link = document.querySelector("a");
const link2 = document.querySelector("b");
const loginForm = document.querySelector("#폼");
const loginForm2 = document.querySelector("#폼2");

function handle1() {
    alert("Go To Git Hub");
}

function handle2() {
    alert("Go To JS Crome");
}

function handle3(event) {
    event.preventDefault();
}

link.addEventListener("click", handle1);
link2.addEventListener("click", handle2);
loginForm.addEventListener("submit", handle3);