"use strict";

const add_button = document.getElementById("add_button");
const check = document.getElementsByName("checkbox");

add_button.addEventListener("click", function () {
    add_list();
});

function add_list() {
    const content_text =
        `<div class="no-words-add" style="width: 48px;"><input type="checkbox" name="checkbox"></div>
            <div class="no-words-add" style="width: 40px;">
                <img style="width: 20px;" src="https://res-1.cdn.office.net/files/fabric-cdn-prod_20211207.001/assets/item-types/20/folder.svg"></div>
            <div class="file-div-add" style="width: 300px;"><span>폴더</span></div>
            <div class="file-div-add" style="width: 150px;"><span style="font-size: 12px; color: #616161;">2022. 7. 24.</span></div>
            <div class="file-div-add" style="width: 150px;"><span style="font-size: 12px; color: #616161;"></span></div>
            <div class="file-div-add" style="width: 150px;"><span style="font-size: 12px; color: #616161;">비공개</span></div>
            <div style="width: 170px;"></div>`
    const content_to_HTML = document.createElement("div");
    content_to_HTML.classList.add("files-div");
    content_to_HTML.innerHTML += content_text;
    const tb = document.getElementById("files");
    tb.append(content_to_HTML);
}

// 선택 삭제
function delete_checked() {
    for (let i=check.length-1; i < check.length; i--) {
        if(check[i].checked) {
            check[i].parentNode.parentNode.remove();
        }
    }
}