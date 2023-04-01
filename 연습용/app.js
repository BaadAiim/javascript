const link = document.querySelector("a");
const link2 = document.querySelector("b");
const loginForm = document.querySelector("#폼");
const clock = document.querySelector("#h1");

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart("2", 0);
    const minutes = String(date.getMinutes()).padStart("2", 0);
    const seconds = String(date.getSeconds()).padStart("2", 0);
    clock.innerText = `${hours}:${minutes}:${seconds}`; 
}

getClock()
setInterval(getClock, 1000);

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