# ✨ HTML BASIC ✨

## **HTML Basic Tag**

### **서식태그**

- 글의 성격이나 구성을 위해 사용되는 태그
- 내용을 강조하거나 문단을 구분, 제목을 지정할 때 사용

### **heading태그(주제 태그)**

- 제목을 구성할 때 사용되는 태그로 제목의 단계에 따라 h1붙 h6으로 나누어짐
- 사이즈 커지고 굵기도 커져서 중요도를 나타낼 수 있다.

  ```html
  <h1></h1>
  <h2></h2>
  <h3></h3>
  <h4></h4>
  <h5></h5>
  <h6></h6>
  ```

### **paragraph 태그 p (문단 태그)**

- 문단을 지정할 때 사용되는 태그
- 단락을 구분해주기 위해 p를 사용하는 것!
- 우리가 추가하는 줄바꿈은 무시하게 됨
- 단락사이 간격을 더 떨어트리고 싶을 때, <br>을 여러번 하던가 CSS를 활용하여 가능!

```html
<p></p>
```

### **break 태그 br (줄바꿈 태그)**

- 코드 상 줄바꿈 불가능 &rarr; 줄바꿈을 하려면 break 태그 필요!
- 닫는 태그 없이 사용 가능 = 홀태그 &rarr; 안에 컨텐츠가 없다 (void element)
  ```html
  <br />
  <br />
  ```

### **italic 태그 i**

- 기울임체

```html
<i></i>
```

### **강조 태그 strong, b**

```html
<strong></strong> <b></b>
```

### **세로줄 태그 hr**

- 문서 내에 가로 선을 넣고 싶을 때 사용
- 홀테그

```html
<hr />
```

### **리스트태그**

- 리스트를 나열하는 태그들
- 여러개의 li태그를 ol 또는 ul 태그로 묶어서 사용한다
- List item 태그 li

```html
<li></li>
<li></li>
<li></li>
>> - - - ...
```

- Ordered list 태그 ol
  - 순서가 있는 항목을 나열할 때 사용

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
>> 1. 2. 3. ... 순번이 매김
```

- Unordered list 태그 ul
  - 순서가 정해지지 않은 항목들을 나열

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
>> - - - 순번 대신 dot으로 표현됨
```

### **이미지태그**

- 이미지 삽입 태그

```html
<img src="이미지 주소" /> <img src="이미지 주소" width="200" height="200" /> :
크기 지정 -> 높이만 지정하면 이미지가 왜곡되는 현상 사라짐
<img src="이미지 주소" alt="...alternative text..." /> : 이미지를 사용할 수 없을
경우, 해당 alt 글자가 대신 뜸 <img src="이미지 주소" title="도움말" /> :
마우스를 올렸을 때 도움말이 나옴
```

### **링크태그**

```html
<a href="주소"></a>
<a href="주소" target=" _blank / _self / _parent / _top "></a> : 링크를 선택했을
때 문서를 열릴 위치를 명시
```

### **테이블 태그**

- <td> : table data
- <tr> : table row

- <thead> : 제목 부분
- <tbody> : 본문 부분
- <td> : 대신 <th>를 사용하여 강조 열 제목이란걸 강조
- <tfoot> : 표 상 가장 아래쪽으로 자동으로 내려감 &rarr; 어느 위치에 넣어도 상관없음

```html
<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tfoot>
</table>

<table border="2">
  : 테이블 태그에 볼더 속성 추가
  <td rowspan="2">: 수직으로 두 개의 행이 병합</td>
  <td colspan="2">: 수평으로 두 개의 열 병합 - 병합한만큼 td 태그 삭제</td>
</table>
```
