<template>
  <div id="app">
    <div class="header">
      <MyHeader></MyHeader>
    </div>
    <div class="content">
      <div class="aside">
        <AsideNav></AsideNav>
      </div>
      <div class="main">
        <MainContent></MainContent>
      </div>
    </div>

  </div>
</template>


<script>
import MyHeader from "./components/MyHeader";
import AsideNav from "./components/AsideNav";
import MainContent from "./components/MainContent";

export default {
  name: 'App',

  components: {
    MyHeader,
    AsideNav,
    MainContent,

  },

  data() {
    return {
      toPage:'HomePage'
    }
  },

  methods: {
    togglePage(key){
      console.log('我收到'+ key);
        switch (key){
          case 'page1':
            this.toPage = 'HomePage';
            break;
          case 'page2':
            this.toPage = 'WorkManage';
            break;
          case 'page3':
            this.toPage = 'VideoData';
            break;
        }
      },
  },

}
</script>


<style lang="scss">

#app{
  width: 100%;
  height: 1800px;
  background-color: #f6f7f9;
  .header{
    background-color: #ffffff;
    box-shadow: 0px -1px 15px 1px rgba(0,0,0,.4);
  }

  .content{
    width: 1200px;
    margin: 20px auto;
    background-color: #f6f7f9;
    .aside{
      float: left;
      width: 240px;
    }

    .main{
      float: right;
      width: 940px;
      background-color: #ffffff;
    }

  }
}

</style>
