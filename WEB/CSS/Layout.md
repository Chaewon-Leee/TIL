# ✨ CSS Layout ✨

## **Display**

### **Block & Inline**

- display : block / Inline으로 display 설정 변경 가능
  |Block level|Inline level|
  |:--:|:--:|
  |`div {display : Inline-block;}`|contents가 없을 경우에는 아무것도 뜨지 않음, 컨텐츠 자체만을 꾸며주는 것!|

- Inline-block : 컨텐츠가 없어도 나타남!
  - 한줄에 여러개를 넣을 수 있으나 상자로 넣어져서 컨텐츠의 사이즈 상관없이 지정된 width, height 등 맞추어 표기가 됨
- Inline : 컨텐츠가 없으면 안나타남
  - inline의 경우 컨텐츠의 크기에 맞추어져서 만들어짐

### **Position**

```
{ position
  : static -> property를 줘도 기본 위치에 고정
  : relative -> 위치 변경 가능
  : absolute -> 현재 나를 담고 있는 상자 안을 기준 위치 설정
  : fixed -> 나를 담고 있는 상자가 아닌, 그 밖인 윈도우를 기준으로 위치 설정
  : sticky -> 기존 자리에 존재하지만, 스크롤을 움직여도 해당 자리에 고정
}
```

### **float**

- float : 이미지와 텍스트를 정리할 때 사용

```
{ float
  : left / center / right -> 텍스트가 이미지를 감쌀 때, 이미지가 어디에 위치할지
}
```

### **Flexbox**

1. 컨테이너에 적용되는 속성과 아이템에 적용되는 속성값이 존재
2. flexbox는 중심축 (main axis)와 반대축 (cross axis) 존재
   - main axis을 설정하면 자동으로 반대축이 설정됨
     - 중심축 : 수평을 기준 = 왼쪽 -> 오른쪽
     - 중심축 : 수직 기준 = 위 -> 아래

#### flex-direction

```
{ flex-direction
  : row = 왼쪽 -> 오른쪽
  :row-reverse = 오른쪽 -> 왼쪽
  : column = 위 -> 아래
  : column-reverse = 아래 -> 위
}
```

#### flex-wrap

```
{ flex-wrap
  : nowrap (기본값, default) = 한 줄에 모든 아이템이 들어가 채움
  : wrap : 한 줄에 공간이 없어질 경우, 다음 줄로 넘어감
  : wrap-reverse : 위 -> 밑이 아닌, 그 반대방향으로 올라오면서 공간을 채움
}
```

#### justify-content

```
{ justify-content
  : flex-start = 앞쪽부터 시작 (왼쪽 정렬)
  : flex-end = 뒤쪽부터 시작 (오른쪽 정렬)
  : center : 중심정렬
  : space-around = 모든 아이템들에게 동일한 크기의 투명박스를 둘러싸 서로 간격을 두는 것
                = 간격이 동일한 것이 아니다! 모두 동일한 크기에 박스로 둘러쌓여 있으므로 가장자리 아이템은 당연히 간격이 좁을 수 밖에 없다.
  : space-evenly = 모든 아이템들이 동일한 간격을 둠
  : space-between = 가장자리에 아이템들을 배치하고 중간은 빈 공간을 냅두는 것
}
```

#### align-items

```
{ align-items
  : center = 현재 중심축이 수평일 경우, 수직으로 중간정렬을 함
  : baseline = 아이템 크기가 다를 때 최대 크기에 맞추어 균등하게 위치하는 것
}
```

#### align-content

- justify-content 속성을 동일하게 사용하되, 중심축이 아닌 반대축을 기반으로 하는 것
