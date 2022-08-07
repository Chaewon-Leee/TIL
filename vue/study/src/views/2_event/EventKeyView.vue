<template>
  <div>
    <!-- <input type="search" v-model="searchText" @keyup="checkEnter($event)" /> -->
    <!-- 버튼을 클릭할 때 사용자가 입력한 값 받기 + 엔터키 입력시 이벤트 발생하도록 -->
    <input type="search" v-model="searchText" @keyup.enter="doSearch($event)" />
    <!-- enter키 일 경우, 해당 함수를 바로 실행 -->
    <button @click="doSearch">조회</button>
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
