# ✨ JAVASCRIPT OVERVIEW ✨

## **Javascript**

- 객체 기반의 스크립트 언어
  - 웹 문서에서 사용자와 다양한 상호작용을 하기 위해 만들어짐
  - 각각의 웹 브라우저용 전용 스크립트 존재 &rarr; 현재 Javascript로 표준화
  - 현재는 웹 브라우저에서만 사용되지 않고 Node.js를 통해 다양한 프로그램에 응용된다
- HTML (웹 페이지 생성) &rarr; Javascript (사용자와의 상호작용 추가)
  - HTML은 정적, Javascript은 동적이다

## **HTML와 접목**

- script 태그
  - 태그 안 javascript 코드를 집어넣음

```html
<script>
  ...
</script>
```

- 이벤트
  - 웹브라우저 위에서 발생되는 이벤트를 javascript 코드로 처리
  - 마우스 이벤트, 키 이벤트, 폼 이벤트, 로드 및 기타 이벤트 존재

```html
<input type="button" onclick="alert('hi')" />
```

- 콘솔 : 콘솔창에서 편집하여 바로 실행 가능

## **CSS를 동적으로 사용**

```javascript
document.querySelector("선택할 태그").속성.속성 = "값";
document.querySelector("선택할 태그").style.backgroundColor = "black";
```
