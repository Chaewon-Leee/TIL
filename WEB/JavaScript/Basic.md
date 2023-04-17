# ✨ JAVASCRIPT BASIC ✨

## **template literals (string)**

`hi ${변수명}`

- f string 가능

## **null vs undefined**

|          null           |         undefined          |
| :---------------------: | :------------------------: |
| 아예 만들어지지 않은 것 | 아직 값이 주어지지 않은 것 |
|    취소하면 null 값     |                            |

## **let vs var**

|     let      |                           var                            |
| :----------: | :------------------------------------------------------: |
| mutable type | 선언을 하기 전에 먼저 할당할 수 있다 (var hoisting) <br> |

- hoisting : 선언하기 전에 위로 올라가서 만들어지는 것

## **const**

- 상수 지정 (immutable data type) : 변경이 불가능한 타입
- 보안상 이유, flexibe
  - 동시에 값을 변경하는 걸 없앨 수 있으니까 다른 개발자랑 내가 동시에 건들이는 일을 방지

## **배열**

- join : 배열 중간중간 구분자 추가해주는 것

```javascript
var 변수명 = [...];
var 변수명 = new Array();
.indexOf() : index 찾기
.includes() : 포함하는지 아닌지 말해주는 것
lastIndexOf() : 동일한 게 여러개 들어가있을 때 마지막이 몇번째 인덱스인지
.join(',') : 객체 사이사이 , 추가
.split(',', 개수) : 구분자로 끊음 / 몇개까지 나타나게 할건지
.reverse() : 배열 안 아이템 거꾸로 만들어줌
.splice(0,2) : 어디서부터 몇개를 지울건지
-> 0부터 2개를 지우겠다 (3~5개까지 나온다)
.slice(2,5) : 2부터 시작해서 4 (5-1)번쨰까지 받아온다
.find : 첫번쨰로 찾아진 요소를 가져와라
students.find(function (student, index) {
  return student.score === 90; // 90점인 사람들= true / find -> 첫번째로 true인 사람 출력
});
>> arror function
students.find((student) => student.score === 90);

.filter : true인 아이들만 리턴 받아서 출력해주는 것
.filter((student) => student.enrolled); // 등록된 (enrolled===true)인 학생들만 출력
.map : 배열안 모든 요소들을 리턴되어진 값으로 배열로 만들어짐
.map((student) => student.score *2); // 2배된 점수 배열 출력함
.some : 배열에서 조건문이 하나라도 true가 되는 지 불리언 출력
.some((student) => student.score < 50); // 50점 이하인 애가 한명이라도 있으면 true 출력
.reduce((prev, curr) => {
}) : 현재는 curr, prev로 해서 순차적으로 돌아간다
.sort : 정렬
```

## **병합**

```javascript
a ?? b;
// a가 null도 아니고 undefined도 아니면 a, 그 외의 경우는 b
```

## **조건문**

```javascript
if (조건문) { ... }
else if { ... }
else { ... }
```

## **리펙토링 중복의 제거**

리펙토링 : 비효율적인 코딩 부분 (중복된 코드)

- this 사용하여 현재 이번트 구조 안에서만 사용되도록 함!

## **반복문**

- 반복되는 태그 등을 간결하게 줄일 수 있음

```javascript
while(조건문) { ... }
>>
while(i<co.length) {
    document.write('<li><a href="http://a.com'+co[i]+'">'+co[i]+'</a></li>')
}

// for
for(let i=0; i<fruots.length; i++>) {
}
// for of
for(let fruit of fruots) {
} : 하나씩 대응해서 집어넣음
// forEach
fruits.forEach((fruit) => );

fruits.push() : 마지막에 추가
fruits.pop() : 마지막에 있는 거 꺼내기

fruits.unshift() : 첫부분에 추가
fruits.shift() : 첫부분에 시작

fruits.splice() : 이덱스 포지션에 있는 거 제거
- 인덱스에 몇개를 지울건지 확인
```

## **함수**

- 리턴이 안들어간 함수는 return undefined와 동이ㅣㄹ

```javascript
function 함수명(매개변수) { ...return 결과 } --> 함수 선언문
객체명.변수 = function() { ... }
var 변수 = function() { ... } --> 함수 표현식

>>
함수명(인자) : 메소드안에서 함수 실행
```

- 함수 선언문의 경우 어디에서든 호출 가능! 먼저 함수를 사용하고 함수 정의해ㅗ 가능
- **callback function** 매개변수에 함수를 추가하여서 변수처럼 사용할 수 있는 것

### **화살표 함수**

-

```javascript
let 함수명 = (매개변수) => {
  return ...
}

let 함수명 = (num1, num2) => {num1 + num2;}
let 함수명 = (num1, num2) => num1 + num2;
let 함수명 = name => 'Hello, ${name}'; --> 까지도 간결하게 줄일 수 있다
```

### **IIFE**

-함수를 괄호 ()로 묶어서 바로 선언과 동시에 실행시킬 수 있음

## **클래스 vs 객체**

- 클래스 : 틀

```javascript
class Person {
  함수명() {...}
}
```

- 객체 : 틀로 만들어낸 결과물

## **객체**

```javascript
var 변수명 = [
    "변수" : "값 ",
    ...
];

>>
객체.객체 접근 operator
변수명[변수]
key
```

## **getter & setter**

- 사용자가 입력한 이상한.. 값을 getter로 받아서 setter로 제대로 지정해주는 것

```javascript
Person(Name, age) {
  this.age = age;
  // 메모리에 저장하는 것이 아니라 this.age는 get을 호출, =age는 set을 호출해서 사용한다
}

get age() {
  return this._age;
}

set age() {
  this._age = vaule;
  //무한반복될 수 있어서 변수 이름을 _을 붙여 다르게 함
}
```

## **파일**

- css 파일을 따로 만든 것처럼 js 파일을 따로 추가하여 import하는 것

```html
<script src="파일명"></script>
```

## **library vs framework**

- 다른 사람들과 협력하는 모델

|               library (= JQuery)                |                                                 framework                                                  |
| :---------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
| 내가 사용하려는 부품을 가져오는 것, 재사용 가능 | 만들고자 하는 것이 무엇인지에 따라 공통적인 부분은 framework을 만들어놓고 나머지 다른 부분만 만들어놓는 것 |

### **JQuery**

```html
<script src="jquery url"></script>
```

```jquery
$('a') : 모든 a 태그를 다루겠다
.css('속성', 파라미터); : css 속성을 파라미터 값으로 처리한다
```

## **UI vs API**

|                UI (User Interface)                |                   API(Application Programming Interface)                    |
| :-----------------------------------------------: | :-------------------------------------------------------------------------: |
| 사용자가 시스템을 제어하기 위해 사용하는 조작장치 |                 사용자 차원에서 개발자 차원으로 넘어간 개념                 |
|                                                   |            소프트웨어를 제어, 개발하기 위해 사용하는 인터페이스             |
|                                                   |      웹 브라우저가 가지고 있는 기능을 문법을 위해 사용하는 조작장치들       |
|                                                   | 이렇듯 application을 위해 프로그래밍 할 때 사용하는 조작장치들을 API라고 함 |
