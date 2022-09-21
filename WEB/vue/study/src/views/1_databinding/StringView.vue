<template>
  <div>
    <h1>hello {{ username }}</h1>
    <!-- string인 경우 -->
    <p>{{ msg }}</p>
    <h3>{{ arr[1] }}</h3>
  </div>
</template>
<script>
export default {
  // object 형태로 저장한 변수 저장
  data() {
    return {
      username: 'John Doe',
      msg: '히히',
      arr: [1, 2, 3],
      obj: {
        chaewon: 'dndh',
        su: 'sdadw' // 스타일 지정할 때 잘 쓰이려나..
      }
    }
  }
}
</script>
<style scoped>
.text-red {
  color: red;
}
</style>
