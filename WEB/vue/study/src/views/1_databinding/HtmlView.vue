<template>
  <div>
    <p>{{ htmlString }}</p>
    <div v-html="htmlString"></div>
    <p :style="스타일">꺄</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색</p>',
      스타일: 'color : blue'
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
