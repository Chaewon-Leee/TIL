<template>
  <div id="bacg">
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'John Doe',
      message: 'Welcome 개발자의 품격',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped>
template {
  height: 100%;
}

#bacg {
  background-color: black;
  height: 100vh;
}
</style>
