# 1 style 작업

> CSS는 Style 작업에 적합한 도구이다.

> 기본 색깔을 변경할 시 해당 항목 안에 설정값을 추가하면 된다.

> ```active```는 눌렀을 때 작동하는 명령어다. 사용법은 ```'.'active```이다.

ex)
```CSS
body {
    background-color: beige;
}

h1 {
    color: blue;
    transition: color 0.5s ease-in-out;
}

.active {
    color:red;
}
```

```javascript
const h1 = document.querySelector(".hello h1");

function handle () {
    if(h1.className === "active") {
        h1.className = "";
    } else {
        h1.className = "active";         
    }
}

h1.addEventListener("click", handle);
```

> 이처럼 색을 추가하거나 색이 변하는 속도 등을 설정할 수 있다.

- 오류

> 또한, 위 코딩은 오류를 범할 수 있기 때문에 ```const```를 통해 ```click```을 변수로 바꾼다.

ex)
```javascript
const h1 = document.querySelector(".hello h1");

function handle () {
    const clickhandel = "active"
    if(h1.className === clickhandel) {
        h1.className = "";
    } else {
        h1.className = clickhandel;         
    }
}

h1.addEventListener("click", handle);
```

> 이를 통해 ```click```을 2번 사용하여 오류를 범하는 것보다 ```const```를 통해 변수 ```clickhandel```를 사용하는 것이 더 효과적이다.

> 만약, HTML에서 ```class```를 선언한 상태라면 ```Javascript```에 코딩한 내용이 결과에 적용된다.

ex)
```javascript
const h1 = document.querySelector(".hello h1");

function handle () {
    const clickhandel = "active";
    if(h1.className === clickhandel) {
        h1.className = "";
    } else {
        h1.className = clickhandel;         
    }
}

h1.addEventListener("click", handle);
```

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Momentum App</title>
</head>
<body>
      <div class="hello">
        <h1 class="sexy-font">Grab me!</h1>
      </div>
    <script src="app.js"></script>
</body>
</html>
```

```CSS
body {
    background-color: beige;
}

h1 {
    color: blue;
    transition: color 0.5s ease-in-out;
}

.active {
    color:red;
}

.sexy-font{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
```

- 결과값

클릭 전 -> <h1 class="sexy-font">Grab me!</h1>

클릭 후 -> <h1 class="active">Grab me!</h1>

> 이를 해결하려면 ```javascript```를 수정하여 해결 할 수 있다.

```javascript
const h1 = document.querySelector(".hello h1");

function handle () {
    const clickhandel = "active";
    if(h1.className === clickhandel) {
        h1.className = "";
    } else {
        h1.className = clickhandel;         
    }
}

h1.addEventListener("click", handle);
```

> 이렇게 ```javascript```에서 ```className```을 사용하는 것은 좋지 않다.

> ```className```은 모든걸 교체하기 때문에 이를 대신하여 사용하는 게 ```classList```이며 그 뒤에 ```contains```이라는 ```function```을 사용한다.

> ```classList```는 ```element```의 ```class``` 내용물을 조작하는 것을 허용한다.

> ```contains```은 사용자가 명시한 ```class```에 ```HTML element```의 ```class```에 포함되어 있는지 말해주는 것이다.

> ```remove```와 ```add```도 있으며 뜻 그대로 제거와 추가이다.

ex)
```javascript
const h1 = document.querySelector(".hello h1");

function handle () {
    const clickhandel = "active";
    if(h1.classList.contains(clickhandel)) {
        h1.classList.remove(clickhandel);
    } else {
        h1.classList.add(clickhandel);         
    }
}

h1.addEventListener("click", handle);
```

- 결과값 

클릭 전 -> <h1 class="sexy-font">Grab me!</h1>

클릭 후 -> <h1 class="sexy-font active">Grab me!</h1>

> 하지만 ```javascript```에서 하나의 ```function```을 통해 간결하게 해결할 수 있는데 그것이 ```toggle```이다.

> ```toggle``` 사용 시 ```const```를 사용하여 변수를 지정할 필요는 없다. 그 이유는 ```"active"```라는 ```string```를 반복하는 순간, ```constant```를 생성할 순간이기 때문이다.

> ```toggle```은 지정한 곳의 ```classList```에 ```active class```가 이미 있는지 확인해서 만약 있다면, ```toggle```이 ```active```를 제거해준다.

> 정반대로 ```classList```에 ```active class```가 존재하지 않는다면, ```toggle```은 ```active```를 ```classList```에 추가를 해줄 것이다.

> 예시로는 스마트폰에 달린 한번 누르면 스크린을 잠그고 다시 한번 누르면 스크린을 켜주는 버튼과도 같다. = ```toggle```

ex1)
```javascript
const h1 = document.querySelector(".hello h1");

function handle () {
    const clickhandel = "active";
    if(h1.classList.contains(clickhandel)) {
        h1.classList.remove(clickhandel);
    } else {
        h1.classList.add(clickhandel);         
    }
}

h1.addEventListener("click", handle);
```

ex2)
ex)
```javascript
const h1 = document.querySelector(".hello h1");

function handle () {
    h1.classList.toggle("active");
}

h1.addEventListener("click", handle);
```

- 결과값

클릭 전 -> <h1 class="sexy-font">Grab me!</h1>

클릭 후 -> <h1 class="sexy-font active">Grab me!</h1>