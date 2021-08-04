<template>
  <div>
    <child @add="add"></child>
    {{ mydata }}
  </div>
</template>

<script>
import child from "./child";
export default {
  name: 'index',

  components:{
    child,

  },

  data() {
    return {
      mydata:0,
    };
  },

  mounted() {

  },

  methods: {
    add(e){
      this.mydata += e;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>