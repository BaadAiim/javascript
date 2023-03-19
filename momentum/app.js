const title = document.querySelector(".hello h1");

function handle () {
    title.style.color = "blue";
}

function handle2 () {
    title.innerText = "마우스는 여기있다";
}

function handle3 () {
    title.innerText = "마우스는 사라졌다";
}

title.addEventListener("click", handle);
title.addEventListener("mouseenter", handle2) ;
title.addEventListener("mouseleave", handle3) ;