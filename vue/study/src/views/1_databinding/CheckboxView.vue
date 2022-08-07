<template>
  <div>
    <div>
      <input type="checkbox" name="" id="" value="HTMl" v-model="lang" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" name="" id="" value="css" v-model="lang" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" name="" id="" value="js" v-model="lang" />
      <label for="js">JS</label>
    </div>
    <div>선택 : {{ lang }}</div>
    <!-- value값을 직접 바꾸는 것이 아니라, checked를 확인하는 양방향 바인딩이 가능하다! -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      lang: ['js'] // 미리 선택되어있는 것 지정가능!
      // 여러 속성을 선택할 수 있으므로 배열로!
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style></style>
