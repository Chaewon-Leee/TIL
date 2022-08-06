<template>
  <div>
    <input type="text" name="" id="" v-bind:value="userId" readonly />
    <input type="text" name="" id="" :value="userId" readonly />
    <br />
    <img :src="imgsrc" alt="" style="width: 100px; height: auto" />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>
<script>
export default {
  conponents: {},
  data() {
    return {
      userId: 'jonghun',
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
