# ✨ HTML BASIC ✨

## **HTML Basic Tag**

### **서식태그**

글의 내용을 정의하는 태그들
: 글의 성격이나 구성을 위해 사용되는 태그

- 내용을 강조하거나 문단을 구분, 제목을 지정할 때 사용
  heading태그(주제 태그)
- 제목을 구성할 때 사용되는 태그로 제목의 단계에 따라 h1붙 h6으로 나누어짐
- 사이즈 커지고 굵기도 커져서 중요도를 나타낼 수 있다.

```
h1, h2, h3...
```

paragraph 태그 p (문단 태그)

- 하난의 문단을 지정할 때 사용되는 태그 - 이 태그ㅗ 지정한 문장은 하나의 문단으로 묶여서 화면에 보여지게 됩니다
- 우리가 추가하는 줄바꿈은 무시하게 된다!
- 단락을 구분해주기 위해 p를 사용하는 것!
- 단락사이 간격을 더 떨어트리고 싶으면 <br>을 여러번 하던가 <p> 태그의 기보적인 디자인을 CSS를 활용하여 가능!

  break 태그 br (줄바꿈 태그) 사용해야 함

- 코드 상 줄바꿈 불가능 -> 줄바꿈을 하려면 break 태그 필요!
- 닫는 태그 없이 사용 가능 = 홀태그 -> 안에 컨텐츠가 없다 (void element)
  <br/>도 가능

italic 태그 i

- 기울임체
  strong, bold 태그 strong, b

- 강조
  horizontal rule 태그 hr
- 문서 내에 가로 선을 넣고 싶을 때 사용
- 홀테그 형태의 하나의 태그만 사용

### **리스트태그**

리스트를 나열하는 태그들
: 어떻ㄴ 항목들을 구분하고 나열하고 싶을 때 사용하는 태그들

- 여러개의 li태그를 ol 또는 ul 태그로 묶어서 사용한다
- Ordered list 태그 ol
순서가 있는 항목ㄷㄹ을 나열할 때 사용
<ol>
<li></li>
<li></li>
<li></li>
</ol>
>>

1.
2.
3. 으로 알아서 순번을 메겨서 해준다

- Unordered list 태그 ul
- 순서가 정해지지 않은 항목들을 나열
<ul>
<li></li>
<li></li>
<li></li>
</ul>
>>
-
-
- 순번 대신 dot으로 표현됨
- List item 태그 li

<li></li>
<li></li>
<li></li>
>>
- 
- 
- ...

시각적으로 구분할 수 있기 위해서는 <ul>이든 묶여서 그룹핑 -> 각 리스트가 분류되게 됨

### **이미지태그**

<img src="이미지 주소">
<img src="이미지 주소" width="200" height="200"> : 크기 지정 -> 높이만 지정하면 이미지가 왜곡되는 현상 사라짐
<img src="이미지 주소" alt="alternative text"> : 이미지를 사용할 수 없을 경우, 해당 alt 글자가 대신 뜸
<img src="이미지 주소" title="도움말"> : 마우스를 올렸을 때 도움말이 나옴

### **링크태그**

<a href="주소"></a> : 링크 다는 것
<a href="주소" target="4가지"></a>
링크 같은 경우 -> 링크란 사실과 실제 주소 2가지의 정보 필요 but 태그만으로는 불충분하므로 속성을 활용하는 것!

### **테이블 태그**

기본

<td> 항목하나하나를 묶어줌 (table data의 약자)
<td></td> <td></td> <td></td>
<td></td> <td></td> <td></td>
같은 행ㅇ들을 그룹핑 시켜줘야 구분이 됨 = <tr> (table row)
<table>
<tr> 
<td></td> <td></td> <td></td>
</tr> 
<tr> 
<td></td> <td></td> <td></td>
</tr> 
</table> <- 테이블 그것도 추가

테두리가 있었으면 좋겠다 = 속성 : border

<table border="2"> <- 테이블 태그에 볼더 속성 추가

구조

<thead> : 제목 부분
<tbody> : 본문 부분
<td> : 대신 <th>를 사용하여 강조 열 제목이란걸 강조
<tfoot> : 표 상 가장 아래쪽으로 자동으로 내려감 -> 어느 위치에 넣어도 ㅏㅇ관없음

<thead>
  <tr> 
  <th></th> <th></th> <th></th>
  </tr> 
</thead>
<tbody>
  <tr> 
  <td></td> <td></td> <td></td>
  </tr> 
</tbody>
<tfoot>
  <tr> 
  <td></td> <td></td> <td></td>
  </tr> 
</tfoot>

병합
수직으로 병합 <td rowspan="2"> : 두개의 행이 병합된다

<tbody>
  <tr> 
  <td></td> <td rowspan="2"></td> <td></td>
  </tr> 
  <tr> 
  <td></td> <   병합했으므로 td태그 삭제   > <td></td>
  </tr> 
</tbody>

수평으로 병합<td colspan="2"> : 두개의 열을 합치겠다이 병합된다

<tbody>
  <tr> 
  <td></td> <td></td> <td></td>
  </tr> 
  <tr> 
  <td colspan="2"></td><   병합했으므로 td태그 삭제   > <td></td> 
  </tr> 
</tbody>

-> 숫자만큼 태그 삭제!!

<button></button>
