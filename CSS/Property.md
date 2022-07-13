# Property

## 폰트 스타일 속성과 색상

글자와 관련된 스타일

- color : 글자 색 (빛의 3원색 기준, 16진수 코드, rgb(x,x,x), rgba(x,x,x,x) 형태)
- font-family : 글씨체 (띄어쓰기가 있을 경우 쌍따옴표 사용)
- font-size : 글씨 크기 (pt, px, em 등 단위)
- font-seight : 글자 굵기
  (100~900 값 & 굶은 굴기 (bold) 사용 가능)
- line-height : 줄간격 (%, px 등의 단위)

### 색 표현 방법

- color, background-color, border-color 등의 값에 대입하여 사용

  - hexcode : 빛의 3원색 값을 16진수로 2자리씩 표현해서 6자리의 코드를 만든다
    #000000~#ffffff (RGB)
    각 자리는 0~f (0~9, a, b, c, d, e, f)
    -> fa : 16^1 _ 15 + 16^0 _ 10
    3원색을 각각 0부터 15까지 값의 2자리로 0~255까지의 값으로 표현
    0 -> 색상이 아무것도 없는 것

- rgb, rgba : 16진수가 아닌 10진수로 직접 각 색의 강도를 표현
  rgb(0,0,0) ~ rgb(255,255,255)
  투명도를 표현하고 싶다면 rgba(0,0,0,0)~rgba(255,255,255,1.0)

## Basic Property

witdh : 100ps
height : 20px

- padding : 내부 contents안 공간
  padding : 20px;
  padding : 20px(위) (오른쪽) (밑) (왼쪽) ;
  -> 순서에 따라 지정가능
  padding-top : 20px --> 이렇게 지정도 가능
- margin : contents 가장자리와 바깥 공간
  margin : 20px
  -> padding과 동일하게 위옆아래 다 가능
  border-style
  border-color ...도 가능하지만
  border : 20px dashed red; 도 가능
  background :

(CSS reference)[https://developer.mozilla.org/en-US/docs/Web/CSS/Reference]

게임
https://flukeout.github.io/

class 와 id 차이점

- class는 여러개를 그룹핑
- id는 하나만 지정!
  - id는 중복되면 안됨!
