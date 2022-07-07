# ✨ HTML Form ✨

## **HTML Form Tag**

form

- 로그인, 구매 등 입력한 정보를 서버로 전송할 때 사용하는 글자를 입력, 선택 등을 폼이라고 부름!
- 이러한 정보들을 봬는 걸 폼을 사용!

### **태그**

<input type="text"> : input 태그 사용자에게 입력을 받겠다

- 인라인 타입
  type 속성 : 어떠한 타입의 정보를 받을 것인지
  -> 사용자가 정보를 입력할 수 있는 박스가 생김
  아이디 : <input type="text">
  비밀번호 : <input type="password"> ->비밀번호 type이 존재
  <input type = "submit"> : 제출하는 버튼이 생긴다

그ㅓㅎ다면 어디로 제출이 되는가? -> form의 action 속성 활용!

<form action = "url">
아이디 : <input type="text">
비밀번호 : <input type="password"> 
주소 : <input type="text">
<input type = "submit">
</form>
: submit 버튼을 누르면 해당 url 주소로 간다!

-> 그렇다면 아이디랑 주소랑 어떻게 구분해? -> name속성으로 이름을 정해주자!

<form action = "url"> -> 사용자에게 받은 데이터 전송되도록 하는 것
아이디 : <input type="text" name="id">
비밀번호 : <input type="password" name="pwd"> 
주소 : <input type="text" name="address">
<input type = "submit">
</form>
neme=value&name=value...등으로 url 뒤에 붙어서 결과가 나옴

-- 문자입력 방식
속성 :

1. type text
   <input type="text" name="address" value="default value"> -> 사용자가 입력하기 전 기본적으로 주는 value
2. type password
   <input type="password" name="pwd">
3. textarea
   <textarea>내용</textarea> -> 텍스트 필드 : 하나의 큰 카에서 여러 줄 작성해짐

- 속성 : cols, rows="2" 등 크기를 지정
- 내용이 defalut value의 역할을 하게 됨

-- Dropdown List : 여러개의 선택지 중 선택
<select name = "ccolor"> -> 이름으로 전송되도록

<option value = "red">붉은색</option>
<option value = "black">검은색</option> -> value가 전송되게 함
<option>붉은색</option>
</select>
<input type = "submit"> -> 제출버튼

<select name = "ccolor" multiple> -> 여러개를 선택가능하도록 (컨트롤키 + 클릭 가능)

<option value = "red">붉은색</option>
<option value = "black">검은색</option> -> value가 전송되게 함
<option>붉은색</option>
</select>
<input type = "submit"> -> 제출버튼

-- radio, checkbox
<input type="radio" name = "color" value="black"> : 여러 버튼 중 하나만 선택할 수 있도록 하는 것
<input type="radio" name = "color" value="black">
<input type="radio" name = "color" value="black">
-> name값이 같은 것들끼리 그룹핑 되고, 한 그룹 안에서 하나가 선택되면 나머지는 해제되는 형태
-> 선택한 버튼이 어떤 값을 가지는지는 value달아주기!

다중선택
<input type="checkbox" name = "size" value="black">
<input type="checkbox" name = "size" value="black">
<input type="checkbox" name = "size" value="black">
-> 여러 버튼 중 하나만 선택하는 radio와 달리 다중 선택이 가능

default로 선택되었으면 하는 경우 checked 추가!
<input type="checkbox" name = "size" value="black" checked>

-- button
<input type="submit" value="전송"> -> ubmit의 이름 바꾸려면 value
<input type="button" value="버튼"> -> submit과 다르게 정말 버튼만 만들어줌
<input type="button" value="버튼" onclick="alert('hello world')"> -> 자바스크립트와 같이 쓸 때 활용하는 버트
<input type="reset"> -> 사용자의 정보가 모두 리셋이 된다

-- hidden

- 눈에 보이는 UI가 필요없거나 몰래 서버쪽으로 보내야할 때 사용
  <input type ="hidden" name="hide" value="dsd">
  -> 눈에 보이지는 않지만, name과 value가 서버에 전송됨

-- label
<label>fd</label><input type = "text"> -> 해당 텍스트의 이름표라는 걸 표시하기 위해 label 추가

- 하지만 무어을 위한 이름표인지 모름
  <label for = "id_txt">fd</label><input type = "text" id ="id_txt">
  for과 id로 서로 연결한다
  -> id가 너무 귀찮을 경우
  <label>fd<input type = "text"></label>
  extarea와 password도 동일!
  checkbox
  <label>
  <input type="checkbox" name = "size" value="black" checked> 붉은색
  </label> -> 해당 붉은색이 자동으로 이름표가 됨!
  ->id를 달아줘도 됨!
  --> label은 두가지방법이 있는 것!

-- method
get방식과 post방식

<form action ="" methid="get or post"> -> url 뒤에 붙어서 값이 전송되게 됨
- url이 아닌 감춰서 전달 필요 : post 방식
-> 몰래 숨겨서 전송해서 안전해짐
form을 이용할 경우 -> post 사용!
나머지는 서버쪽의 역할! -> 얘기해보고 따르기

-- 파일 업로드
<input type = "file">
-> 파일을 선택할 수 있는 화면

<form action = "url 주소" method="post" enctype="multipart/form-data"> -> 해당 주소로 파일이 전송됨 -> 파일이 하나라도 있으면 enctype이 존재해야 한다
