<template>
  <div>
    <child ref="child_ref" @event="receive"></child>
    <button @click="getmsg">获得秘密</button>
    牛逼啊 {{ this.$store.state.count }}
    <button @click="add">数据加一</button>
  </div>
</template>

<script>
import child from "./child";
export default {
  name: 'parent',

  components:{
    child
  },


  data() {
    return {
      res:'ss'
    };
  },

  mounted() {

  },

  methods: {
    receive(e){
      this.res = e;
      console.log(this.res);
    },
    getmsg(){
       console.log(this.$refs.child_ref.msg);
       return this.$refs.child_ref.msg;
    },
    add(){
      this.$store.commit('increment')
    },
  },
};
</script>

<style lang="scss">

</style>