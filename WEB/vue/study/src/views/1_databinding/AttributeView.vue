<template>
  <div>
    <input type="text" name="" id="" v-bind:value="userId" readonly />
    <input type="text" name="" id="" :value="userId" readonly />
    <!-- v-bind 생략해서 : 라고만 붙여줘도 됨! -->
    <br />
    <img :src="imgsrc" alt="" style="width: 100px; height: auto" />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
    <!-- input에 아무것도 들어와있지 않는 경우, 조회를 활성화시키지 않도록 -->
    <!-- txt1이 비어있을 경우, 비활성화 -->
  </div>
</template>
<script>
export default {
  conponents: {},
  data() {
    return {
      userId: 'jonghun',
      // v-model : userId를 할 경우, readonly 속성이기 때문에 위험함! -> 즉, v-bind로 직접 데이터바인딩을 해줌
      // 속성에 바인딩을 해주는 경우, v-bind 사용!
      imgsrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKj-BzX0Fb3jGK5unKMiTJlL6T1WZR1uh4lA&usqp=CAU',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
