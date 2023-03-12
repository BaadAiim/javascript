# 1. GitHub 명령어
- git init (맨 처음 프로젝스 올릴 시)
> git add . ('.'은 전부란 뜻)

> git status (업로드 파일 확인)

> git commit -m "first commit" (git commit = 히스토리 만드는 것, "" = 히스토리 이름)
- git remote add origin git@github.com:BaadAiim/javascript.git (이 위치로 주소와 연결, 한번만 연결하면 됨)
- git emote -v (연결확인)
> git push origin master (보내기)

# 2. HTML과 CSS, Java의 상관관계
- 브라우저는 HTML을 연다.
- HTML은 CSS와 Java를 가져온다.
- 즉, CSS와 Java로 브라우저를 열 수 없다.

# 3. Javascript는 위에서 아래로 읽는다

# 4. 가장 기본적인 두 가지 데이터 타입
> 1. 숫자

```integer``` = (정수, full number) 
- ex) 1, 2, 3, 4

```float``` = (부동소수점, 떠돌이 소수점, floating point) 
- ex) 1.5, 2.5, 3.5, 4.5
- 숫자는 사칙연산이 가능
> 2. 글자

```text``` = (문자) - ex) "hello", "안녕"

```string``` = (처음부터 끝까지 모두 글자로 이뤄져있는 것, 글자로 이루어진 문장) 
- ex) "my name is BaadAiim"

- 글자는 "" 또는 ''를 이용해 사용
- 만약 "" 또는 ''를 사용하지 않을 시 글자로 인식X
- 글자는 서로 + 사용 가능 ex) - "안녕" + " my name is BaadAiim" = "안녕 my name is BaadAiim"

# 4. Variable(변수)

> ```console.log();``` = (Java 콘솔에 ()내용 보내기) 
- ex) ```console.log(2323);``` -> Java콘솔창에 2323

> ```const``` = (상수, constant, 변하지 않는 값)

- ex) ```const``` a = 5;
```console.log(a + 2)```;     
결과값 = 7

> 변수명 선언 중 언어마다 다른 띄어쓰기 사용법(가독성용, 변수명에는 띄어쓰기 사용 못함)
- Javascript
```javascript
const myName = a
```
    a = my name

- Python

```python
const my_name = a
        or
    myName = a
```
     a = my name

> ```let``` = (상수의 값을 바꿀 때 사용함, 값을 업데이트 할 때 사용함)

```Javascript
let myName = "BaadAiim";

console.log("hello " + myName) ;

myName = "BadAim";

console.log("your new name is " + myName);
```

결과값 = your new name is badaim

# 5. True, False, Null, Undefined

> ```true``` = 1(켜져있음)

> ```false``` = 0(꺼져있음)

> ```null``` = 비어있음(없다)

> ```undefined``` = 정의되지 않음(변수값은 존재하지만 값은 정의되지 않음)

- 이 4가지는 문자가 아닌 데이터 타입이다

# 6. Arrays

> ```Array```는 배열을 의미함

> ```array``` 사용시 []안에 배열을 넣어야함

- ex) 
```Javascript 
const mon = "mon";    
const tue = "tue";    
const wed = "wed";    
const thu = "thu";    
const fri = "fri";    
const sat = "sat";    
const sun = "sun";

const daysOfWeek = [mon , tue , wed , thu , fri , sat , sun];

console.log(daysOfWeek);
```

> 또한, ```array```안의 순서를 찾을 수 있으며 ```console.log()```의 괄호 안에 []을 이용하여 순서를 표시함(순서는 0부터 시작함)

 
- ex) 
```Javascript
console.log(daysOfWeek[0]);
  
            or
  
console.log(daysOfWeek[1]);
```
> ```push```는 array안에 다른 단어를 넣을 때 사용

- ex)
```Javascript 
const mon = "mon";    
const tue = "tue";    
const wed = "wed";    
const thu = "thu";    
const fri = "fri";    
const sat = "sat";    
const sun = "sun"; 

const daysOfWeek = [mon , tue , wed , thu , fri , sat , sun];

console.log(daysOfWeek);

daysOfWeek.push("일요일");
```

- 결과값
```javascript
const daysOfWeek = [mon , tue , wed , thu , fri , sat , sun];
 
->

const daysOfWeek = [mon , tue , wed , thu , fri , sat , sun, "일요일"];
```

> 마지막으로 특정 순서의 값을 바꿀 수 있음

- ex) 
```javascript
const daysOfWeek = [mon , tue , wed , thu , fri , sat , sun, "일요일"];

daysOfWeek[0] = "월요일"
```

- 결과값

```javascript

const daysOfWeek = [mon , tue , wed , thu , fri , sat , "일요일"];
 
->

const daysOfWeek = ["월요일" , tue , wed , thu , fri , sat , sun, "일요일"];
```




# 7. Objects

> ```array```를 대신할 때 사용함(예측 가능한 값(일주일)이 아닌 예측 불가능한 값을 넣을 때 사용)
- 단, []가 아닌 {}를 사용하며 ;가 아닌 ,로 줄을 나뉘 정리함

- ex) 비효율적이며 의미하는 바를 알 수 없음
```javascript
const playerName = "badaim";
const playerPoints = 121212:
const playerHandsome = false;
const playerFat = "little bit";

const player = ["badaim", 1212,false, "little bit"];
```

- ex) 효율적이며 의미하는 바를 알 수 있음

```javascript
const player = {
    name: "badaim",
    points: 10,
    fat: true,
};
```

- 이를 통해 세부적인 설계가 가능하며 변경 및 추가도 가능함

- 설계 ex)

```javascript
const player = {
    name: "badaim",
    points: 10,
    fat: true,
};

console.log(palyer) - 1번
console.log(player.name) - 2번
```

- 결과값

1번 = {name: 'badaim', points: 10, fat: true}

2번 = badaim

- 변경 ex)

```javascript
const player = {
    name: "badaim",
    points: 10,
    fat: true,
};

console.log(palyer) - 1번
player.fat = false;
console.log(player) - 2번
```

- 결과값

1번 = {name: "badaim", points: 10, fat: ```true```}

2번 = {name: "badaim", points: 10, fat: ```false```}

- 추가시 사칙연산도 가능함 ex)

```javascript
const player = {
    name: "badaim",
    points: 10,
    fat: true,
};

console.log(palyer) - 1번
player.lastName = "user";
console.log(player) - 2번
```

- 추가 결과값

1번 = {name: "badaim", points: 10, fat: true}

2번 = {name: "badaim", points: 10, fat: true, ```lastName: "user"```}

- 사칙연산 결과값


```javascript
const player = {
    name: "badaim",
    points: 10,
    fat: true,
};

console.log(palyer) - 1번
player.points = player.points + 15;
console.log(player) - 2번
```

1번 = {name: "badaim", ```points: 10```, fat: true}

2번 = {name: "badaim", ```points: 25```, fat: true}

# 8. Funcctions

> ```function```은 반복할 구역을 지정함

- ```function``` 이후 원하는 이름 ex)a 을 적은 후 {}를 이용, {}안에 반복하고자 하는 내용을 작성

- ex) 

```javascript
function a() {
    console.log("hello!")
}

a();
a();
a();
```

- 결과값 

    = hello! hello! hello!

> 응용방법

- ex) 

```javascript
function min(일, 이) {
    console.log(일 + 이);
}

min(1, 2);
```

- 결과값 

    = 3

- ex) 

```javascript
function min(일) {
    console.log(일);
}

min(1, 2, 3, 4, 5, 6);
```

- 결과값

    = 1

- ex)

```javascript
function min(일) {
    console.log(일 - 5);
}

min(1, 2, 3, 4, 5, 6);
```

- 결과값

    = -4

> 단, 이런 경우는 불가능함

- ex)

```javascript
function min(일) {
    console.log(일 - 5);
}

consloe.log(일)

min(1, 2, 3, 4, 5, 6);
```

- 이유는 ```{}```안의 값만 적용되기 때문임, 즉 ```{}```밖의 ```console.log(일)```은 정의된 값이 없음

> 마지막으로 ```const``` 안에 ```function```을 사용할 때 순서를 바꿔서 작성해야함

- ex)

```javascript
const min = {
    max: function (일, 이) {
        console.log(일, 이);
    };
};
```

- ```function max(일, 이)```가 아닌 ```max: function(일, 이)```임

# 8.1 Return

> ```return```은 ()가 필요없음

> ```return```은 값을 계산 후 반환 값을 저장하여 가지고 있음

> 주된 사용방법으로는 사용자가 데이터 값을 주게 되면 그 값을 계산한 후 반환해줌

> ```function```안에```return```이 있으면 모든 계산의 마지막이고 보여주는 값임(이유는 계산하여 값을 반환해주기 때문)

- ex) 1번
```javascript
const age = 96;

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
    
}

const krAge = calculateKrAge(age);

console.log(krAge);
```

- 결과값 

    = 98

- ex) 2번
```javascript
const age = 96;

function calculateKrAge(ageOfForeigner){
    ageOfForeigner + 2;
    return "hello"
}

const krAge = calculateKrAge(age);

console.log(krAge);
```

- 결과값 

    = hello

응용방법

- ex)
```javascript
const calculator = {
    plus: function (a, b){
        return a+b;
    },
    minus: function (a, b){
        return a-b;
    },
    times: function (a, b){
        return a*b;
    },
    divide: function (a, b){
        return a/b;
    },
    power: function (a, b){
        return a**b;
    }
}

const plusResult = calculator.plus(2,3)
const minusResult = calculator.minus(plusResult,10)
const timesResult = calculator.times(10,minusResult)
const multiResult = calculator.divide(timesResult,plusResult)
const powerResult = calculator.power(multiResult,minusResult)
```

- 결과값(콘솔창에 직접 입력)

    = plusResult
    > 5

    = minusResult
    > -5

    = timesResult
    > -50

    = divideResult
    > -10

    = powerResult
    > -0.000009999999999999999

    # 8.2 Return