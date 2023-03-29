const clock = document.querySelector("#clock");

function getClock() {
    const Date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock()
setInterval(getClock, 1000);