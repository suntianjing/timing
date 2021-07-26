<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <bbar msg="脚手架"></bbar>
    <abar>suntianjing hello world</abar>
    <cbar></cbar>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import bbar from './components/bbar.vue'
import abar from './components/abar.vue'
import cbar from './components/cbar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    bbar,
    abar,
    cbar
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
