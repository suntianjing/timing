<template>
  <div id="app">
    <el-container class="mainer">
      <!--头部-->
      <el-header class="header-wrapper">
        <HeaderNav></HeaderNav>
      </el-header>

      <el-container class="container">
        <!-- 侧边栏-->
        <el-aside width="200px" class="aside-wrapper">
          <aside-nav @togglePage="togglePage"></aside-nav>
        </el-aside>
        <el-main>
          <main-content :sendData="toPage"></main-content>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import HeaderNav from "./components/HeaderNav.vue";
import AsideNav from "./components/AsideNav";
import MainContent from "./components/MainContent";

export default {
  name: 'App',
  components: {
    HeaderNav,
    AsideNav,
    MainContent,
  },
  data(){
    return{
      toPage:"HomePage",
    }
  },
  methods:{
    togglePage(key){
      switch(key){
        case '1':
          this.toPage = 'HomePage';
          break;
        case '2-1':
          this.toPage = 'ContentManage';
          break;
        case '2-2':
          this.toPage = 'UserManage';
          break;
        case '3-1':
          this.toPage = 'Support';
          break;
        case '3-2':
          this.toPage = 'Answer';
          break;
        case '3-3':
          this.toPage = 'HoldLive';
          break;
        case '4-1':
          this.toPage = 'Publish';
          break;
        case '4-2':
          this.toPage = 'HoldCostLive';
          break;
        case '5':
          this.toPage = 'MyAssets';
          break;
        case '6':
          this.toPage = 'MyNetDisk';
          break;
      }
    },
  }
}
</script>

<style>
@import "./css/App.css";
</style>
