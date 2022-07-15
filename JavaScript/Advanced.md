\*getElementById() : id를 이용하여 특정한 값을 가진 요소를 가져옵니다.
getElementsByClassName : class 이용
위에 코드를 보면 html파일의 button태그에 btn1이라는 id값을 주었습니다. 만약 버튼(button)이 여러개이고, 이중에서 하나의 버튼에 대해서만 특정 함수가 작동하길 바란다면 그 특정 버튼에 id값을 주어 다른 버튼들과 구분할 수 있습니다.

Dom객체(eventTarget객체)로부터 이벤트가 발생할 때, 해당 이벤트 처리 핸들러를 추가할 수 있는 오브젝트

포커스 이벤트(focus, blur)
폼 이벤트(reset, submit)
뷰 이벤트(scroll, resize)
키보드 이벤트(keydown, keyup)
마우스 이벤트(mouseenter, mouseover, click, dbclick, mouseleave)
드래그 앤 드롭 이벤트 (dragstart, drag, dragleave, drop)

\*addEventListener(): 이벤트 리스너는 특정 이벤트가 발생했을 대 그 처리를 담당하는 함수를 가리킵니다. addEventListener는 특정 이벤트 발생시 특정 함수를 실행시킵니다.

\*document.getElementbyId("아이디").innerHTML : 해당 id를 가진 객체 영역에 html코드를 삽입하는 소스입니다.

element.innerHTML -> element 안의 HTML, XML을 읽습니다.
HTML 내용을 변경할 수 있다

appendChild : 노드 객체에 내용 추가

- 노드 객체 : 문서를 이루기 위한 기본적인 프로펄티 = body, head 등

element.innerText : element 안의 텍스트를 사용자에게 "보여지는 대로" 읽습니다. 
-> 텍스트 안에 추가 가능
node.textContent : node 안의 텍스트를 (<script>, <style>에 상관없이) 읽습니다.
-> 스타일 적용 안되고 추가

element.innerText = ''; --> 요소 안에 있던 모든 거 지울 수 있음

parentnode
previoussibiling
어쩌구...

함수에 e
