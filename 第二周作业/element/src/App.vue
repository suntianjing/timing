<template>
  <div id="app">
    <!-- <next></next> -->
    <MainPage></MainPage>
  </div>
</template>

<script>
import MainPage from "./views/main.vue";
// import next from "./views/next.vue"
export default {
  name: "App",
  components: {
    MainPage,
    // next,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>
