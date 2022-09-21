<template>
  <div>
    <div>
      <input
        type="radio"
        name=""
        id="html"
        value="HTML"
        v-model="favoriteLang"
      />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" name="" id="css" value="CSS" v-model="favoriteLang" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="radio" name="" id="js" value="JS" v-model="favoriteLang" />
      <label for="js">JS</label>
    </div>
    <div>선택한 지역: {{ favoriteLang }}</div>
  </div>
</template>
<script>
export default {
  conponents: {},
  data() {
    return {
      favoriteLang: ''
      // 체크박스와 비슷하지만, 라디오 버튼은 하나밖에 안되기 대문에 배열이 아닌 문자열로 받는다
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
