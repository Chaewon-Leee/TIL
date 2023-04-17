# ✨ JAVASCRIPT ADVANCED ✨

## **getElementBy**

- getElementById() : id를 이용하여 특정한 값을 가진 요소를 가져옴
- getElementsByClassName : class 이용하여 특정한 값을 가진 요소를 가져옴

### **class 와 id 차이점**

|      class      |             id             |
| :-------------: | :------------------------: |
| 여러개를 그룹핑 | 하나만 지정, 중복되면 안됨 |

## **이벤트**

- Dom객체(eventTarget객체)로부터 이벤트가 발생할 때, 해당 이벤트 처리 핸들러를 추가할 수 있는 오브젝트
  - 포커스 이벤트(focus, blur)
  - 폼 이벤트(reset, submit)
  - 뷰 이벤트(scroll, resize)
  - 키보드 이벤트(keydown, keyup)
  - 마우스 이벤트(mouseenter, mouseover, click, dbclick, mouseleave)
  - 드래그 앤 드롭 이벤트 (dragstart, drag, dragleave, drop)

### **이벤트 리스너**

- addEventListener(): 이벤트 리스너는 특정 이벤트가 발생했을 대 그 처리를 담당하는 함수
  - addEventListener는 특정 이벤트 발생시 특정 함수를 실행시킴

## **추가**

```
document.getElementbyId("아이디").innerHTML : 해당 id를 가진 객체 영역에 html코드를 삽입
element.innerHTML -> element 안의 HTML, XML을 읽음
  - HTML 내용 변경 가능
appendChild : 노드 객체에 내용 추가
  - 노드 객체 : 문서를 이루기 위한 기본적인 프로펄티 = body, head 등
node.textContent : node 안의 텍스트를 (<script>, <style>에 상관없이) 읽음
```
