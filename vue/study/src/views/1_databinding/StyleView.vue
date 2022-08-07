<template>
  <div>
    <div style="color: red; font-size: 30px">
      스타일 바인딩: 글씨는 red, 폰트크기:30px
    </div>
    <div :style="style1">스타일 바인딩: 글씨는 green, 폰트크기:30px</div>
    <button @click="style1.color = 'blue'">색상 바꾸기</button>
    <!-- 버튼을 클릭할 경우, 해당 색상이 바뀌도록 -->
  </div>
</template>
<script>
export default {
  conponents: {},
  data() {
    return {
      style1: {
        color: 'green',
        fontSize: '30px'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
