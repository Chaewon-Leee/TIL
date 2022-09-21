<template>
  <div>
    <div :class="{ 'text-red': true, active: true }">클래스 바인딩</div>
    <!-- true일 경우, 클래스를 바로 적용 false면 적용 안됨! -->
    <div :class="{ 'text-red': hasError, active: isActive }">클래스 바인딩</div>
    <div :class="class2">배열 형태로 주는 것</div>
  </div>
</template>
<script>
export default {
  conponents: {},
  data() {
    return {
      isActive: false,
      hasError: false,
      // JS로 해당 값을 바꾸면서 class 가 적용되도록 할 수 있음
      class2: ['active', 'hasError']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped>
.active {
  background-color: greenyellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
