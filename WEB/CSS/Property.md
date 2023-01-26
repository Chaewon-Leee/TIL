# ✨ CSS Property ✨

## **Basic Property**

### **폰트 스타일 속성과 색상**

- color : 글자 색 (빛의 3원색 기준, 16진수 코드, rgb(x,x,x), rgba(x,x,x,x) 형태)
- font-family : 글씨체 (띄어쓰기가 있을 경우 쌍따옴표 사용)
- font-size : 글씨 크기 (pt, px, em 등 단위)
- font-seight : 글자 굵기 (100~900 값 & 글자 굵기 (bold) 사용 가능)
- line-height : 줄간격 (%, px 등의 단위)

### **크기 조정**

- witdh, height : 숫자로 조정 (%, px 등의 단위)

### **border**

- border-style, border-color 등 폰트 스타일과 동일하게 존재
  `border : 20px dashed red; 와 같이 한번에 지정 가능`

### **padding & margin**

- padding : 내부 contents끼리의 공간, 숫자로 조정 (%, px 등의 단위)
  ```
  padding-top : 20px; 와 같이 하나의 방향을 지정 가능하며,
  padding : (top) (right) (down) (left); 와 같이 여러 숫자를 입력하여 네 방향을 동시에 지정 가능하다
  ```
- margin : contents 가장자리와 바깥 공간, padding과 동일한 방식으로 지정 가능

### **색 표현 방법**

- color, background-color, border-color 등의 값에 대입하여 사용

|                            hexcode                            |                       rgb                       |                  rgba                  |
| :-----------------------------------------------------------: | :---------------------------------------------: | :------------------------------------: |
| 빛의 3원색 값을 16진수로 2자리씩 표현해서 6자리의 코드를 만듦 | 16진수가 아닌 10진수로 직접 각 색의 강도를 표현 |        rgb에 투명도를 추가한 것        |
|                     #000000~#ffffff (RGB)                     |          rgb(0,0,0) ~ rgb(255,255,255)          | rgba(0,0,0,0) ~ rgba(255,255,255, 1.0) |
