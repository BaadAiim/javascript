const h1 = document.querySelector(".hello h1");

function handle () {
    const currentColor = h1.style.color;
    let NewColor;
    if(currentColor === "blue") {
        NewColor = "red";
    }   else {
        NewColor = "blue";
    }
    h1.style.color = NewColor;
}

h1.addEventListener("click", handle);