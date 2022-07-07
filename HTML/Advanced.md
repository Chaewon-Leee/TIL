정보로서 HTML

- HTML 이후로 모두 웹 화가 됨
- 왜 HTML이 정보인가?

<font> 태그
<font size="" color=""> 사이즈와 색상을 바꿀 수 있다

- 해당 폰트는 아무런 의미도 없다 오직 시각적인 디자인
- 어떠한 정보도 표현해주지 않는다
- 계속 쌓이게 될 경우, 해석도 어려워짐
  -> 디자인 같은 경우는 CSS가 담당!

<meta> 태그
- 어떠한 정보를 가질 때 해당 정보를 설명하는 태그 = meta data
<meta charset="utf-8">
-> 파일을 저장할 때 어떤 방식을 사용할지 저장하는 것 -> 브라우저에 따라 다름
인코딩 : 컴퓨터에 저장하는 것
디코딩 : 저장된 정보를 꺼내오는 것
- 실제 화면에 나오진 않지만 해당 페이지를 설명하는 것!
<meta name = "description" content= "dsa">
등 설명들을 저장하는 것!
<meta http-equiv="refresh" content="30"> -> 30초 간격으로 리프래쉬하는 것

의미론적인 (semantic) 태그

- HTML5에서 추가된 의미론적인 태그들 적용해서 더 잘 보이도록 함
- 어떠한 기능 및 변화가 없지만 의미를 파악하도록 함
<header></header> 가장 상단의 중요한 제목
<footer></footer> 가장 하단에 있는 정보들을 의미함을 나타냄
<article></article> 본문 : 반복되는 아이들
<section></section> : 다른것들도 모두 섹션임!
하지만 뭔가 header 이런것들로 나누기 애매한 것들을 section으로 분류하면 됨

검색엔진 최적화

- 사용자들로 하여금 잘 볼 수 있도록, 해석할 수 있도록 하는 것 = 적정한 수준으로 의미론적으로 타당하게 표현하는 것

웹 개발자 도구
모바일 지원

HTML5

box

- header footer nav aside main section article : 재사용 가능한 코드, 여러개가 들어갈 수 있음 div : 묶어서 스타일링을 할 때 div로 묶음 span form

item : 사용자에ㅔ게 보여지는 아이템

- block : 한줄에 하나씩 차지하는 것
- inline : 공간이 괜찮으면 옆에 배치 가능 = 한줄로 배치
- a video button audio input map label canvas img table
<b> <span> 같은 경우 인라인 -> bold로 강조 해주고 하는 정도니까
<div> 같은 경우 다음줄로 넘어가니까 block

<!-- 주식-- > 주석방법
