# CSS (Cascading Style Shetts)

: HTML 웹 문서의 스타일을 표현하는 언어로 HTML 코드로 작성된 웹 요소들이 어떻게 푯되어야 할지를 정의한다

# CSS 구성

: 화면상의 HTML로 이루어진 요소들에 대응하여 스타일 세트를 각각 적용
선택자 (selector) : 어느 부분의 요소 스타일을 지정할 것인가
CSS 속성 : 글자 크기 등 스타일 속성
CSS 속성 값

선택자 {
속성이름 : 값;
속성이름 : 값;
... }
-> 속성을 정의하는 문법

- 여러개 지정할 수있다 = 하나의 속성 세트

CSS 확장자로 파일로 저장 -> HTML 파일에 import 가능!

CSS 선언하기

- 3가지 방법 존재
- 인라인 스타일
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

주석
/\* \*/

# 폰트 스타일 속성과 색상

글자와 관련된 스타일

- color : 글자 색 (빛의 3원색 기준, 16진수 코드, rgb(x,x,x), rgba(x,x,x,x) 형태)
- font-family : 글씨체 (띄어쓰기가 있을 경우 쌍따옴표 사용)
- font-size : 글씨 크기 (pt, px, em 등 단위)
- font-seight : 글자 굵기
  (100~900 값 & 굶은 굴기 (bold) 사용 가능)
- line-height : 줄간격 (%, px 등의 단위)

색 표현 방법

- color, background-color, border-color 등의 값에 대입하여 사용
  hexcode : 빛의 3원색 값을 16진수로 2자리씩 표현해서 6자리의 코드를 만든다
  #000000~#ffffff
  각 자리는 0~f (0~9, a, b, c, d, e, f)
  3원색을 각각 0부터 15까지 값의 2자리로 0~255까지의 값으로 표현
