<template>
  <div>
    <van-cell is-link @click="showPopup">
      <img src="https://img2.baidu.com/it/u=283944626,65800653&fm=26&fmt=auto&gp=0.jpg" alt="">
    </van-cell>
    <van-popup position="bottom" round v-model="show" style="height: 40%;">内容</van-popup>
  </div>
</template>

<script>
export default {
  name: 'test',


  data() {
    return {
      show: false,
    };
  },

  mounted() {

  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>