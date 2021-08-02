<template>
  <div id="app">
    <div class="header">
      <van-nav-bar title="排骨饭" left-text="返回" left-arrow fixed="true" placeholder="true">
        <template #right>
          <van-icon name="clear" size="18"/>
        </template>
      </van-nav-bar>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>

    <div class="footer">
      <van-tabbar route v-model="active">
        <van-tabbar-item replace to="/index" icon="wap-home">大厅</van-tabbar-item>
        <van-tabbar-item replace to="/my" icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',

  components:{
  },

  data() {
    return {};
  },

  mounted() {

  },

  methods: {},
};
</script>

<style lang="scss">

</style>