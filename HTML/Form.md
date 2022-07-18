# ✨ HTML Form ✨

## **HTML Form Tag**

- 로그인, 구매 등 입력한 정보를 서버로 전송할 때 사용하는 글자를 입력, 선택 등을 폼이라고 부름!

### **type 속성**

- type 속성 : 어떠한 타입의 정보를 받을 것인지 지정

```html
<input type="text" /> : text 입력을 받음 <input type="password" /> :
비밀번호타입 <input type="submit" value="전송" /> : 값 전송
<input type="reset" /> : 사용자 입력 값 리셋
```

### **textare**

- textarea : 여러 text 줄 입력

```html
<textarea> ... </textarea>
```

### **action 속성**

- action : submit될 경우, 해당 url 주소로 전송

```html
<form action="url">
  <input type="..." />
</form>
```

### **name 속성**

- name : id를 지정하여 name=value&... 형식으로 전송

```html
<input type="..." name="..." value="..." />
```

### **Dropdown List**

- 여러개의 선택지를 나열하여 선택할 수 있도록 함

```html
<select name="ccolor">
  : 이름 지정
  <option value="red">붉은색</option>
  <option value="black">검은색</option>
  : value로 전송
  <option>붉은색</option>
</select>

<select name="ccolor" multiple>
  : 다수 선택 가능 (컨트롤키 + 클릭)
</select>
```

### **radio & checkbox**

- name값이 같은 것들끼리 그룹핑 되고, 한 그룹 안에서 하나가 선택되면 나머지는 해제되는 형태

```html
<input type="radio" name="color" value="black" /> : 여러 버튼 중 하나만 선택할
수 있도록 하는 것 <input type="radio" name="color" value="black" /> : 선택한
버튼이 어떤 값을 가지는지는 value로 지정
<input type="radio" name="color" value="black" />

다중선택
<input type="checkbox" name="size" value="black" />
<input type="checkbox" name="size" value="black" />
<input type="checkbox" name="size" value="black" checked /> : default로
선택되었으면 하는 경우 checked 추가! <br />
&rarr; 여러 버튼 중 하나만 선택하는 radio와 달리 다중 선택이 가능
```

### **button**

- 버튼 요소

```html
<input type="button" value="버튼" />
<input type="button" value="버튼" onclick="alert('hello world')" />
onclick 속성 : 자바스크립트와 같이 쓸 때 활용하는 버튼
<button></button> &rarr; 버튼 태그 존재! 디자인적으로나 자바스크립트 적으로 우세
```

### **hidden**

- 눈에 보이는 UI가 필요없거나 몰래 서버쪽으로 보내야할 때 사용

```html
<input type="hidden" name="hide" value="dsd" /> &rarr; 눈에 보이지는 않지만,
name과 value가 서버에 전송
```

### **label**

- id 만들어주는 것

```html
1. label의 for과 id로 서로 연결
<label for="id_txt"></label
><input type="text" id="id_txt" /> 2.
<label
  >로 감싸줌
  <label></label>
    <input type="checkbox" name="size" value="black" checked /> </label
></label>
```

### **method**

- get방식과 post방식
  |get방식과|post방식|
  |url 뒤에 붙어서 값이 전송|몰래 숨겨서 전송 = 안전|

```html
<form action="..." methid="get or post"></form>
```

### **파일 업로드**

- 파일이 하나라도 있으면 enctype 존재 필요

```html
<input type="file" /> : 파일 선택 폼

<form action="url 주소" method="post" enctype="multipart/form-data"></form>
: 해당 url 주소로 파일이 전송
```
