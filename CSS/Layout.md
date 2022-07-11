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

1. 컨테이너에 적용되는 속성과 아이템에 적용되는 속성값이 존재
2. flexbox는 중심축 (main axis)와 반대축 (cross axis) 존재

- main axis을 설정하면 자동으로 반대축이 설정됨
  중심축 : 수평을 기준 = 왼쪽 -> 오른쪽
  : 수직 기준 = 위 -> 아래

<div class="container">
  <div class = item item1>1</div>
  <div class = item item2>2</div>
</div>
- 작은 width, height를 줘도 div이므로 (block line) 자동으로 마진이 생겨 다음 줄로 넘어감
  container 속성값 :
      height : 100vh (view height) 일 경우 그냥 해당 크기 -> 100%일 경우 들어있는 아이템의 크기만큼 딱 맞게 됨
    **display : flex** (flex 박스로 변경됨)

    flex-direction : row =왼쪽 -> 오른쪽순으로 시작
      :row-reverse 오른쪽 -> 왼쪽
      : column = 위 -> 아래
      : column-reverse = 아래 -> 위

    flex-wrap : nowrap (기본값, default) = 꼭 한줄에 모든 아이템이 붙어있음
      wrap : 어느정도 차면 다음줄로 감
      wrap-reverse : 밑에서 위로 올라오면서 참

    flex-flow : column nowrap = flex-direction랑 flex-wrap를 합친 것

    justify-content : flex-start = 앞쪽부터 시작한다 (왼쪽정렬)
      : flex-end = 뒤쪽부터 시작한다 (오른쪽 정렬)
      : center : 중심정렬
      : space-around = 동일한 간격을 두고 모든 아이템들에게 투명박스를 둘러싸는것 = 간격 동일 X 모두 동일한 크기에 박스로 둘러쌓여 있으므로 가장자리 아이템은 당연히 간격이 좁음
      : space-evenly = 모두 동일한 간격으로 띔
      : space-between = 가장자리를 붙여버리고 중간만 공간 넣음
    = 중심축에서 아이템을 어떻게 배치할 것인가

    - 차이점
      - flex-direction : column-column은 아래서부터 1, 2, 3... 으로 올라오지만
      - flex-end & column을 결합하게 되면 위에서부터 1, 2, 3... 으로 내려가되 아이템들이 뒤쪽 (바닥) 에 붙어있게 됨!

    align-items
    : center = 현재 중심축이 수평일 경우, 수직으로 중간정렬을 함
    : baseline = 아이템 크기가 다를 때 최대 크기에 맞추어 균등하게 위치하는 것 (baseline에 맞춰라)
    -> 반대축에서 배치하는 것

    align-content
      -> 반대축을 기반으로 하는 거!!! 아까 중심축을 기반으로 한 justify-content 속성 다 사용 가능

참고사이트 : https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

item 속성값 :
order :0 (default) -> order 숫자를 바꿔줘서 순서를 바꿀 수 있다.
flex-grow :1 (default=0) -> 창이 늘어나는 크기에 맞추어 빈 공간이 없도록 채움

- 숫자가 커질수록 다른 아이템들의 배로 늘어나게 됨
  = 컨테이너가 커졌을 때 아이템의 모습
  flex-shrink <-> 컨테이너가 줄어들었을 때 아이템의 모습
  flex-basis : 공간을 얼마나 더 차지해야하는지 도와주는 것 -> flex-grow & flex-shrink가 없을 경우 flex-basis = 60%와 같이 비중을 어느정도 차지해야하는지 정함
  align-self : 아이템 하나만 정렬을 따로 맞추고 싶을 경우
  item2 {
  align-self : center;
  }

게임 : https://flexboxfroggy.com/#ko
