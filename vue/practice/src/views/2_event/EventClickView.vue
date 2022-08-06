<template>
  <div>
    <button @click="increaseCounter">Add 1</button>
    <p>{{ counter }}</p>
  </div>
</template>
<script>
export default {
  conponents: {},
  data() {
    return {
      counter: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {
    increaseCounter() {
      this.counter += 1
    }
  }
}
</script>
