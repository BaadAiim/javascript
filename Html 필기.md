# 0. HTML에 대해서

> Html의 Element(요소)들을 Javascript를 통해 변경하고, 읽을 수 있다

# 1.1 Document

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

# 1.2 Dir

> ```dir```은 element를 더 자세하게 보여준다

- ex)
```Javascript
console.dir(title);
```

- 결과값

h1#title -> 누르면 상세하게 나온다

# 1.3 GetElementById

> Javascript에서 ```GetElementById``` 함수를 통해 HTML에서 Id를 통해 Element를 찾아준다

> 만약 찾았다면 Javascript를 통해 HTML를 수정할 수 있다.

- ex)
```Javascript
const title = document.getElementById("title");
```

