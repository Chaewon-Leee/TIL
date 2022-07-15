"use strict";

const add_but = document.getElementById("Add_Key");
const todo_element = document.getElementById("input_text_box");

add_but.addEventListener("click", function () {
  add_list();
  todo_element.value = "";
});

todo_element.addEventListener('keydown', function(e) {
    if (e.keyCode === 13 ) {
        add_list();
        todo_element.value = "";
    }
})

function change_text(e) {
    e.parentNode.previousSibling.lastChild.readOnly = false;
}

function save_text(e) {
    e.parentNode.previousSibling.lastChild.readOnly = true;
}

function add_list() {
    const todo_data = document.getElementById("input_text_box").value; // 사용자로부터 받은 일정 추가하기
    const content_text = `<div class="list_display"><span>
    <input type="checkbox"><input type="text" class ="content" value="${todo_data}" readonly></span><div>
    <butoon id = "change" type="button" onclick="change_text(this)"><img src="image/change.png" style="width: 20px; height: 20px;"></butoon>
    <butoon id = "save" type="button" onclick="save_text(this)"><img src="image/save.png" style="width: 20px; height: 20px;"></butoon></div></div>`
    const content_to_HTML = document.createElement("li"); // content_to_HTML에 li 태그를 추가
    content_to_HTML.innerHTML += content_text; // 나머지 code 추가

    const div = document.getElementById("todo_list"); // todo_list 요소 가져오기
    div.append(content_to_HTML); // div 요소에 HTML로 바꿔준 content 추가
}
