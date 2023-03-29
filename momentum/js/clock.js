const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    clock.innerText = console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock()
setInterval(getClock, 1000);