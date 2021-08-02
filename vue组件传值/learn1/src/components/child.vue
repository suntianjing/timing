<template>
  <div>
      我是子组件
    牛逼啊 {{ this.$store.state.count }}
    <button @click="send">click me</button>
  </div>
</template>

<script>
export default {
  name: 'child',


  data() {
    return {
      msg:'我的小秘密'
    };
  },

  mounted() {

  },

  methods: {
    send(){
      this.$emit('event','你好啊');
    }
  },
};
</script>

<style lang="scss" scoped>

</style>