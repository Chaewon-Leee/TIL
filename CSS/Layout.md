# Layout

## Display

display : block / Inline으로 display 설정 변경 가능
Block level (한줄에 하나씩 차지) - div {
display : Inline-block;
}
Inline level (한줄로 배치) : contents가 없을 경우에는 아무것도 뜨지 않음! -> 컨텐츠 자체만을 꾸며주는 것!

- Inline-block : 컨텐츠가 없어도 나타남!
  - 한줄에 여러개를 넣을 수 있으나 상자로 넣어져서 컨텐츠의 사이즈 상관없이 지정된 width, height 등 맞추어 표기가 됨
- Inline : 컨텐츠가 없으면 안나타남
  - inline의 경우 컨텐츠의 크기에 맞추어져서 만들어짐

## Position

{ left: 20px; top:20px;
position : static; -> property를 줘도 기본 위치에 위치하게 됨
: relative -> 위치 변경 시킬 수 있다
: absolute -> 현재 나를 담고 있는 상자 안을 기준으로 함
: fixed -> 아예 벗어나 윈도우를 기준으로 함
: sticky -> 기존 자리에 있지만 스크롤을 내려도 계속 해당 자리에 고정되어 따라옴
}

# Flexbox

- 레이아웃에 position, float, table을 사용했었음
  but, 정렬 등이 까다로워 --> flexbox 사용

float : 이미지와 텍스트를 정리하기 위함
float : left / center / right - 글이 이미지를 감싸되 어느 위치에 이미지가 존재하는지 - 이를 레이아웃 용으로 사용하기 위해ㅓ float 안 float 등 사용했지만 현재 flexbox가 나타나면서 본래의 용도로 돌아감

flexbox
