# ✨ HTML Form ✨

## **HTML Form Tag**

form

- 로그인, 구매 등 입력한 정보를 서버로 전송할 때 사용하는 글자를 입력, 선택 등을 폼이라고 부름!
- 이러한 정보들을 봬는 걸 폼을 사용!

### **태그**

<input type="text"> : input 태그 사용자에게 입력을 받겠다
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

<form action = "url">
아이디 : <input type="text" name="id">
비밀번호 : <input type="password" name="pwd"> 
주소 : <input type="text" name="address">
<input type = "submit">
</form>
neme=value&name=value...등으로 url 뒤에 붙어서 결과가 나옴
