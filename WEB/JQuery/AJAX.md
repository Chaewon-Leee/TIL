# ✨ JQUERY AJAX ✨

## **API 가이드란**

- API서버 주소로 데이터를 달라고 요청하여 받음
- 이런 요청과 응답은 API의 각 형식에 따라 작성됨
- 해당 형식을 API 가이드라고 함!

### **API 가이드**

- API마다 다르게 나와있음
- 요청 : 주소, 전송방식, 보낼 것
- 응답 : 형식 (JSON, sml...), 응답 의미 설명

* JSON : Javascript object Notation
  - 배열이나 또다른 JSON이 포함될 수 있음

### **AJAX**

- 페이지가 새로고침되지 않아도 서버랑 계속 데이터를 주고 받는 것
- load 함수의 콜백함수

```

responseText : 요청결과
statusText : 요청의 상태
xhr : 요청한 오브젝트
xhr.status : 파일의 응답 상태

$("name").load("url주소")
, function(responseText){
    console.log(responseTex)
}

$("name").click(function() {
   $("name").load("url주소")
}) // 해당 주소창에 있는 데이터를 클릭시 가져온다 -> url 뒤에 태그 띄어쓰기해서 붙일 경우 해당 페이지에 해당 태그만 들고 올 수 있다
```

- example

```
$.ajax({
url:"...",
async:true,
dataType:'JSON',
success: function(result){
loaddata = result;
}}
)

$.ajax({
method:"POST",
url:"...",
data:{...}} // 요청에 대한 정보
.done(function (msg) { // 응답 처리 코드 -> 해당 msg가 JSON의 데이터로 응답을 해줌
msg.키이름 // 으로 value값을 가질 수 있음!
$('p').append(msg.documents[0].title) // document의 title을 기존 p태그에 추가
}))
```

## **API키**

- aPI는 API키가 있어야 함
- 카카오톡 개발자 홈페이지, 공공데이터포털 등 들어가서 앱 만들기를 하면 aPI키를 발급받을 수 있다

### **open API란?**

- 누구나 사용할 수 있도록 공개된 API

```

import json
import urllib.request

python으로 처리
key = "발급받은 인증키"
URL = "..." + key + "..." // 최신날짜로 변경
json_page = urllib.request.urlopen(URL)
json_data = json_page.read().decode("utf-8")
json_array = json.loads(json_data)
json_array에 들어감!
// xml일 경우,
import requests
key = "발급받은 인증키"
URL = "..." + key + "..." // 최신날짜로 변경
result=requests.get(URL)
result.content에 다 들어가있음!!

```
