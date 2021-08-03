<template>
  <div id="app">
    <div class="header">
      <van-nav-bar title="排骨饭" left-text="返回" left-arrow fixed="true" placeholder="true">
        <template #right>
          <van-icon name="share-o" size="20px" />
          <van-cell title="分享" style="padding-left: 5px" @click="showShare = true" />
          <van-share-sheet
              v-model="showShare"
              title="立即分享给好友"
              :options="options"
              @select="onSelect"
          />
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
import {Toast} from "vant";

export default {
  name: 'app',

  components:{
  },

  data() {
    return {
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    };
  },

  mounted() {

  },

  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
};
</script>

<style lang="scss">

</style>