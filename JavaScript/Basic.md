# ✨ JAVASCRIPT BASIC ✨

## **배열**

```javascript
var 변수명 = [...];
```

## **조건문**

```javascript
if (조건문) { ... }
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

for() { ...}
```

## **함수**

```javascript
function 함수명(매개변수) { ...return 결과 }
객체명.변수 = function() { ... }
var 변수 = function() { ... }

>>
함수명(인자) : 메소드안에서 함수 실행
```

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

## **파일**

- css 파일을 따로 만든 것처럼 js 파일을 따로 추가하여 import하는 것

```html
<script src="파일명"></script>
```

## **library vs framework**

- 다른 사람들과 협력하는 모델
- library : 내가 사용하려는 부품을 가져오는 것, 재사용 가능
- framework : 만들고자 하는 것이 무엇인지에 따라 공통적인 부분은 framework을 만들어놓고 나머지 다른 부분만 만들어놓는 것
- 반제품 같은 느낌
  -> library = JQuery

### **JQuery**

```html
<script src="jquery url"></script>
```

```jquery
$('a') : 모든 a 태그를 다루겠다
.css('속성', 변수명);
```

## **UI vs API**
