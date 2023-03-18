const title = document.querySelector(".hello h1");

function handle () {
    console.log("title was clicked!");
}

title.addEventListener("click", handle);