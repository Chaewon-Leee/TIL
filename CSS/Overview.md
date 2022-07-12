# CSS (Cascading Style Shetts)

: HTML 웹 문서의 스타일을 표현하는 언어로 HTML 코드로 작성된 웹 요소들이 어떻게 푯되어야 할지를 정의한다

# CSS 구성

: 화면상의 HTML로 이루어진 요소들에 대응하여 스타일 세트를 각각 적용
선택자 (selector) : 어느 부분의 요소 스타일을 지정할 것인가
CSS 속성 : 글자 크기 등 스타일 속성
CSS 속성 값

## Cascading

- Author style (우리가 작성하는 스타일) -> User style (브라우저에서 사용자가 변경) -> Browser (기보 스타일) 순 우선순위
  -> important로 해당 cascading으 끊고 순위를 바꿀 수 있음! (연결고리 무시))
  -> 다른 개발자와 사용하는 경우 잘 쓰지 않음

# 구조

선택자 {
태그이름 : 값;
태그이름 : 값;
... }
-> 속성을 정의하는 문법

## 선택자

- Universal **\*** : 모두에게 적용
  - { ... }
- Type **tag, div** ... : 하나의 속성타입만 적용
- ID **#id** : 해당 아이디만 적용
  li#special { ... } : li 태그 special이란 아이디를 가진 경우만 적용
- Class **.class** : 클래스 적용
- State **:** : 어떤 상태일 경우에 스타일 적용
  butoon:hover { ... } : butoon 위에 마우스 올릴 때만 적용
- Attribute **[]** : 해당 속성을 지니는 요소만 적용
- 태그 안 태그는 태그 태그로 설정
  <plate><apple></plate> : plate apple { ... }
- 태그, 태그 해서 여러개 선택
  a[href] : href 속성이 있는 a 태그만 스타일 적용
  -> 전체 적용 스타일보다 태그로 작성한 것이 더 우선순위가 높음
  --> 이런식으로 좁은 범위로 갈수록 더 우선순위가 높아짐

- 여러개 지정할 수있다 = 하나의 속성 세트

CSS 확장자로 파일로 저장 -> HTML 파일에 import 가능!

# CSS 선언하기

- 3가지 방법 존재
  - 인라인 스타일 (inline)
    - 각 html 태그에 직접 style 속성을 이용해서 선언
    <p style="font-size: 11pt"> -> 여러개의 속성을 사용하고 싶을 경우, 세미콜론 (;)으로 이어서 계속 사용!
    <p style="font-size: 11pt; color:white;">
    -> 분리 어렵고, 큰 프로젝트면 고치기도 어렵, 하나하나 해주기도 힘들다는 단점
  - 내부 스타일 시트
    - 같은 html파일 내에 style 태그를 사용해서 태그 내부에 선언, 보통 head 태그 내에 style 태그를 작성, 선택자라는 문법을 사용해서 문서 내의 요소 (HTML 태그로 생성된 화면 요소)를 선택해 스타일을 지정
      <head>
          <style>
          p {
              font-size: 11pt;
          }
          </style>
      </head>
    - CSS 시트 적용
    - 얘도 큰 프로젝트일 경우, 각 파일마다 동일하게 작성해야한다는 점이 단점이 됨
  - 외부 스타일 시트
    - 내부 스타일 선언에 선언된 스타일 세트들을 외부파일 (.css 확장자를 가진)에 선언하고 linke 태그로 적용하려는 html에 불러오는 방법
      <head>
          <link rel="stylesheet" type="text/css" href="CSS 파일명">
      <head>

* CSS 규칙의 우선순위는 어떻게 결정될까요?
* Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
* CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?

# 주석

/\* \*/
