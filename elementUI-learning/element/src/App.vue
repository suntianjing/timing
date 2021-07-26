<template>
  <div id="app">
    <aform></aform>
    <abar></abar>
  </div>
</template>

<script>
import aform from './components/form.vue'
import abar from './components/mydata.vue'


export default {
  name: 'App',
  components: {
    aform,
    abar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
