const clock = document.querySelector("#clock");

function getClock() {
    const Date = new Date();
    clock.innerText = console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock()
setInterval(getClock, 1000);