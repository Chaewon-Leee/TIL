<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="myFunction"></button>
    <!-- onclick 대신 @click! -->
    <button v-on:click="myFunction"></button>
    <br />
    <input type="text" v-model.number="num1" />
    <input type="text" v-model.number="num2" />
    <span>{{ num1 + num2 }}</span>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userId: '채원',
      num1: 0,
      num2: 5
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId)
    }
  }
}
</script>

<style></style>
