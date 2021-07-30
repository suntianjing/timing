<template>
  <div id="app">
    <el-container class="mainer" >
      <el-header class="header-wrapper"><HeaderNav /></el-header>
      <el-container class="container">
        <el-aside width="220px" class="aside-wrapper"><AsideNav @togglePage="togglePage" /></el-aside>
        <div class="main"><MainContent :sendData="toPage"/></div>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import HeaderNav from "./components/HeaderNav";
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
      toPage: "HomePage",
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
  },
}
</script>

<style lang="scss" scoped>

*{
  margin: 0;
  padding: 0;
}
body{
  width: 100%;
  height: 100%;
  background-color: #f7f9fa;
}

#app{
  background-color: #f7f9fa;
  width: 100%;
  height: 100%;
  .mainer{
    height: 100%;
    .header-wrapper{
      background-color: #fff;
      margin-bottom: 15px;
      box-shadow: 0 1px 2px 2px rgba(0, 0, 0, .1);
    }
    .container{
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .aside-wrapper{
        width: 220px;
        height: 100%;
      }
      .main{
        width: 970px;
      }
    }
  }
}

</style>
