<template>
  <div>
      <ul>
        <li v-for="value,key,index in objData" :key="index">
          {{ index+1 }} {{ key + ' : ' }} {{ value }}
        </li>
      </ul>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'MyData',


  data() {
    return {
      objData:{

      }
    };
  },

  mounted() {
    var that = this
    axios.get('https://www.fastmock.site/mock/a15186ac9e82089678e43d39dd52698c/eleme/msg').then(function(response){
      console.log(response.data)
      that.objData = response.data
    })
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>