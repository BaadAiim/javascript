# 0. HTML에 대해서

> Html의 Element(요소)들을 Javascript를 통해 변경하고, 읽을 수 있다

# 1. Document

> document(문서)는 web site다

> 만약 console에 document를 입력하면, 작성한 Html을 가져올 수 있다. 즉, document는 브라우저에 이미 존재하는 Object이다

> 이를 통해 Javascript가 Html를 읽어온다는 것을 알 수 있으며, 이를 응용하여 Javascript를 통해 Html를 변경할 수도 있다

- ex1)

- 콘솔창에 ```document.title```을 치면 HTML안의 ```<title>```이 나온다

- 만약, 콘솔창에 ```document.title = "hi"```라고 치면 HTML안의 ```<title>```이 ```hi```로 나온다.

- 하지만, HTML안의 ```<title>```은 바뀌지 않는다

- ex2)

- 만약, Javscript에서 ```document.title = "I Love It"```이라고 친 후 HTML에서 ```<title>```을 ```I Hate It```으로 친다면 

- 결과값는 ```I Love It```으로 나온다

# 2. Dir

> ```dir```은 element를 더 자세하게 보여준다

- ex)
```Javascript
console.dir(title);
```

- 결과값

h1#title -> 누르면 상세하게 나온다

# 3. GetElementById

> Javascript에서 ```GetElementById``` 함수를 통해 HTML에서 Id를 통해 Element를 찾아준다

> 만약 찾았다면 Javascript를 통해 HTML를 수정할 수 있다.

- ex)
```Javascript
const title = document.getElementById("title");
```

# 4 GetElementsByClassName

> ```getelementsbyclassname()```은 ()(괄호)의 이름을 가지고 있는 Class들을 array로 답해준다

- ex)

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>I Hate It</title>
</head>
<body>
    <h1 class="hello">Grab me!</h1>>
    <h1 class="hello">Grab me!</h1>>
    <h1 class="hello">Grab me!</h1>>
    <h1 class="hello">Grab me!</h1>>
    <h1 class="hello">Grab me!</h1>>    
    <script src="app.js"></script>
</body>
</html>
```


```javascript
const hellos = document.GetElementsByClassName("hello");

console.log(hellos);
```

- 결과값

HTMLCollection(5) [h1.hello, h1.hello, h1.hello, h1.hello, h1.hello]

# 5 QuerySelector

> ```querySelector```는 element를 CSS 방식을 검색할 수 있다. 이는 class 내부에 있는 정보도 가지고 올 수 있다는 것을 의미한다

> ```querySelector```를 사용할 시 . 를 사용해야한다.

- ex1) ```querySelector("```.``` hello h1")```

- ex2)

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
        <h1>Grab me!</h1>
      </div>
    <script src="app.js"></script>
</body>
</html>
```

```javascript
const title = document.qeurySelector(".hello h1");

console.log(title);
```

- 결과값

`<h1>Grab me!</h1>`

> 또한, 같은 이름이 여러가지인 경우는 첫번째 1가지만 출력된다. 이를 해결하는 방법은 ```querySelectorAll```를 이용하면 array로 출력된다

- ex) 조건 : 같은 이름이 3가지일 경우
```querySelectorAll("```.``` hello h1")```

- 결과값

NodeList(3) [h1 ,h1 ,h1]

> 만약, ID를 통해 값을 찾고 싶다면 ```qeurySelector("#Id")```로 하면 된다. 즉, 찾고자 하는 값의 id 앞에 # 을 추가하면 된다.

- ex1) 
```javascript
const title = document.querySelector("#hello");
```

- ex2)
```javascript
const title = document.getElementById("hello");
```

- 결과값

ex1와 ex2 둘 다 같다.

# 6.1 Events

> 모든 event들을 Javascriptsms Listen할 수 있다.

> event란 예를 들어 마우스의 행동, 클릭, 또는 Wifi 변경 등 값이 변화하거나 영향을 주거나 하는 것이다.

> event를 추가하기 위해서는 ```addEventListener()```이라는 것을 사용해야함. 또한, 어떤 event를 Listen하고 싶은지도 지정해줘야함.

- ex) - Click event
```javascript
const title = document.querySelector(".hello h1");

function handleTitleClick(){
    console.log("title was clicked");
}

title.addEventListener("click", handleTitleClick); - "click"이 어떤 event를 Listen할 것인지 지정한 것이다.
```

- 결과값 

title was clicked - 숫자 추가되며 카운트 된다.

# 6.2 Events

> ```dir```을 통해 볼 수 있는 property(성질) 중 앞에 'on'이 붙어 있다면 그것은 event Listner이다.

> event Listner 중 ```mouseenter```은 마우스가 올라갈 때를 의미한다.

> event Listner 중 ```mouseleave```은 마우스가 내려갈 때를 의미한다.

> ```title.innerText = "";```은 글씨를 넣을 때 사용한다.

> ```title.style.color = "";```은 글씨의 색깔을 바꿀 때 사용한다.
ex)
```javascript
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
```

- 결과값

마우스는 여기있다. -----------> 마우스가 올라갈 때
마우스는 사라졌다. -----------> 마우스가 내려갈 때

(마우스를 클릭하면 blue(파란색)이 나온다)