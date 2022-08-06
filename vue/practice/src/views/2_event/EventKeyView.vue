<template>
  <div>
    <!-- <input type="search" v-model="searchText" @keyup="checkEnter($event)" /> -->
    <input type="search" v-model="searchText" @keyup.enter="doSearch($event)" />

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
    },
    checkEnter(event) {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
