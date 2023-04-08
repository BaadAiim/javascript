const 로그인_폼 = document.querySelector("#로그인_폼");
const 로그인_정보 = document.querySelector("#로그인_폼 input");
const 두번째 = document.querySelector("#숨기기");


function 서브밋핸들(event) {
    event.preventDefault();
    console.log(로그인_폼);
}

로그인_폼.addEventListener("submit", 서브밋핸들);