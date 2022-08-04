## vue.js

vue.js

- web app tool
- 코드짤 때 right way가 있다 -> 다양한 방식 X
- single page application
  - index.html 하나만 가지고 vue application이 구동된다
- default로 구동하는 방법과 옵션을 지정하여 구동하는 방법이 존재
  - default [Vue 3]
  - 옵션
    - Babel : 구브라우저용으로 최신 코드를 변환시켜주는 옵션
    - Router : vue에서 메뉴를 클릭했을 때 화면 이동이 가능하도록
    - Vuex : vue의 공용 저장소
    - Linter / Formatter : 기본 코드 포맷팅

## 서버 실행 방법

- 서버 구동
  - vue 프로젝트 파일로 가서 명령어 수행
    `npm run serve`
- 서버 중단
  `ctrl + c`
- 새로운 vue project 만들기
  - 현 프로젝트 파일에서 빠져나와서 vue 폴더로 이동
    `vue create project이름`

## 파일 설명

### package.json

- 해당 vue package에 관한 설명이 모두 들어가있다
- 라이브러리 버전, 프로젝트설정 기록

- private : npm 사이트에 올라갔을 때 다른 사용자들도 검색할 수 있도록 true / false를 지정하는 것
- scripts : 터미널 창에서 실행할 수 있는 명령어 단축어를 선언 가능
  - serve : npm run serve할 때 해당 스크립트 안 서버가 구동되는 것!
  - build : 개발한 파일을 최종 운영환경에 build하기 전 사용가능한 파일로 변환하는 명령어
- dependencies : vue project를 다운 받으면서 다양한 모듈들이 함께 다운로드 되는데, 해당 모듈들을 모두 사용하는 것이 아니므로 가져가야할 모듈들을 선언해줌
- devDependencies : 개발하는 순간 사용해야 하는 모듈들
- eslintConfig :
- browserslist : 구동될 브라우저 제한 정보

### package-lock.json

- devDependencies에서 선언한 모듈들을 사용하기 위해 필요한 모듈들의 정보를 담음

### node_modules

- package.json에서 선언된 모듈들을 담고 있는 폴더

### src

- main.js

  ```js
  import App from './App.vue'
  <!-- App.vue에 있는 내용을 App으로 import -->
  createApp(App).mount('#app')
  <!-- #app이라는 선택자를 가진 곳에 해당 App를 Application을 만들겠다 -->
  ```

- App.vue

  - <template></template> : html을 담는 태그
  - <script></script> : js를 담는 태그

  ```js
    import HelloWorld from '@/components/HelloWorld.vue'
    <!-- 해당 경로에 있는 걸 HelloWorld로 불러오겠다 / @는 src폴더를 의미 -->
    <router-link to="/">Home</router-link>
    <!-- 클릭했을 때 연결될 링크 -->
    <router-view/>
    <!-- router-view 부분이 router-Link에 있는 페이지 내용과 교체가 된다 해당 부분 외에 다른 부분들은 모두 동일하게 된다-->
  ```

- router
  - component 지정 방법 2
    1. import 후 -> component
    2. component 안에서 함수를 지정하여 선언

```js
const routes = [
  {
    path: "/", // 경로가 /일 때 이름은 home이고 HomeView component로 연결 => router-link to와 동일하게 연결해줘야 한다
    name: "home", // 동일한 값을 가지면 안된다
    component: HomeView, // path로 연결했을 때 가져와서 보여줄 component import 해온 주소 -> 해당 경로에 파일 존재
  },
  {
    path: "/about",
    name: "about",

    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch : true */ "../views/AboutView.vue"
      ),
    // webpackChunkName을 about으로 지정해줬기 때문에 about.js로 표시됨 명칭이 바뀜!
    // webpackPrefetch : true일경우 미리 사이트를 다운받아놓음! -> 꼭 들어가야하는 사이트, 들어갈 확률이 높거나 부하가 걸리는 사이트라면 미리 받아놓아 시가을 단축하는 것이 좋음
  },
];
```

- store

-> 실제적인 소스 코드는 src안에 넣고 웹사이트는 html 처리를 못해서 index.html로 바꾸게 됨!
node_moduls : 프로젝트에 쓰는 라이브러리들
public : html파일 , 기타 파일 보관

- 데이터바인딩
  JS 데이터를 HTML에 넣는 문법

```
export default {
    name : 'App',
    data(){
        return {
            자료이름 : 자료내용, // object 형태로 저장한 변수 저장
        } // -> state라고도 함
    }
}
리스트 형식으로 자료내용을 넣어서 인덱싱해도 됨!

HTML에 밑에 저장한 데이터을 쓰고 싶다면 {{ 자료 이름 }}
-> 이 문법을 언제 쓰냐?
1. 직접 숫자를 지정하는 HTMl 하드코딩을 진행하면 나중에 변경 어려움
2. 시리간 자동 랩더린 쓰려면 해야한다 -> 웹앱 사이트 가능
-> 자동으로 html내용이 바꾸면 위에서 바뀌니까
=> 자주 변경이 되지 않는 것들은 할 필요 없음

HTML 속성도 데이터바인딩이 가능하다!!
스타일 : 'color : blue' 해서 :style="스타일" 하면 반영 됨
:속성="데이터이름"
-> id, class 모두 가능

```

v-for

- Vue의 HTML 반복문

```
<a v-for="반복할 것 in 횟수" :key="반복할 것"></a>
-> 횟수대신 배열을 집어넣으면 해당 데이터 개수만큼 반복된다
-> 만약 x in 배열 = 배열안을 돌면서 x가 해당 값들을 하나씩 가지고 있음
<a v-for="a in 메뉴들" :key="a"> {{ a }} </a>

- key의 용도 : 반복문을 쓸 때 꼭 써야 함
-> 반복문을 돌린 요소를 컴퓨터가 구분하기 위해 쓴다
-> 반복문을 돌면서 변하는 요소르 key에 작성
변수 작명 두개까지 가능
- 왼쪽 = 배열내의 데이터, 오른쪽 = 1씩 증가하는 정수
<a v-for="(a, i) in 메뉴들" :key="a">
    <h4>{{ products[i] }}</h4>
    <p> {{ a }} </p>
</a>
```

이벤트 핸들러

```
<button v-on:click="신고수++">허위매몰신고</button> <span>신고수 : {{신고수}} </span>
v-on:click 혹은 @click
- 밑에 변수 설정하고 (신고수를 밑에 넣어놓고) onclick 추가

여러가지 이벤트 활용 가능!
자바스크립트 함수 사용해서 넣어도 된다
methods : {
    // 함수 쓰는 공간 만들기
    함수명 () {
        겉에 있는 변수들을 사용하고 싶으면 this.변수명으로 하기!
    }
}
<button @click="함수명">허위매몰신고</button>
```

모달창

```
vue-router 설치하면 다른 페이지도 만드는 것 가능
모달창 디자인부터 해놓고 숨겨놓고보는 것임!
-> 겉에 쪽에 bg컬러로 어둡게 깔고 가운데에 하얀색 박스로 보이게

1. UI의 현재 상태로 데이터로 저장
-> 변수로 true, false / 0, 1이든 모달창 상태에 따라 하도록 함
2. 데이터에 따라 UI가 어떻게 보일지 작성
v-if="조건삭"
<div class="" v-if="모달창열림? == true">
    모달창 열렸을 때만 보이도록 함
```

상품목록 만들기

```
보통 모든 데이터를 변수에 저장하기 기니까 -> 다른 파일에 적어놓고 import 해온다

1. 다른 파일에
var 변수 선언한 후, export default 변수명 추가
기존 파일에서 import 변수명 from 해당 파일 경로

2. 변수가 여러개일 때, export {변수1, 변수2 ... }
import {변수명} from 해당 파일 경로

3. 변수에 저장하지 않고 바로 export default [{...}] 하고 붙여도 됨!

-> import할 때 변수명은 새롭게 지정해도 됨

```
