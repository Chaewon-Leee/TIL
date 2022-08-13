<template>
  <div>
    <!-- <input type="search" v-model="searchText" @keyup="checkEnter($event)" /> -->
    <!-- 버튼을 클릭할 때 사용자가 입력한 값 받기 + 엔터키 입력시 이벤트 발생하도록 -->
    <input type="search" v-model="searchText" @keyup.enter="doSearch($event)" />
    <!-- enter키 일 경우, 해당 함수를 바로 실행 -->
    <button @click="doSearch">조회</button>
    <!-- ctrl + enter키 = .ctrl.enter 하면 됨! -->
    <!-- stop = stopPropagation = 이벤트의 버블링 현상 막는 것 = 이벤트가 연속하여 발생하는 버블 현상 방지 (부모태그로 이벤트 전파)-->
    <!-- prevent = preventDefault = form 안에 submit 버튼을 눌렀을 때 submit은 작동되면서 페이지가 새로고침되지 않도록 하는 것 -->
  </div>
</template>
<script>
export default {
  conponents: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {
    doSearch() {
      console.log(this.searchText)
      // 사용자가 입력한 searchText를 받아온다
    },
    checkEnter(event) {
      if (event.keyCode === 13) {
        // 엔터키일 경우, 함수 실행
        this.doSearch()
      }
    }
  }
}
</script>
