<template>
  <div class="main">
    <component :is="sendData"></component>
  </div>
</template>

<script>
import HomePage from './main/HomePage.vue'
import ContentManage from './main/manage/ContentManage.vue'
import UserManage from './main/manage/UserManage.vue'
import Support from './main/addfans/Support.vue'
import Answer from './main/addfans/Answer.vue'
import HoldLive from './main/addfans/HoldLive.vue'
import Publish from './main/earning/Publish.vue'
import HoldCostLive from './main/earning/HoldCostLive.vue'
import MyAssets from './main/MyAssets.vue'
import MyNetDisk from './main/MyNetDisk.vue'
export default {
  name: 'MainContent',
  props: ['sendData'],
  components:{
    HomePage,ContentManage,UserManage,Support,Answer,HoldLive,Publish,HoldCostLive,MyAssets,MyNetDisk
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

.main{
  width: 100%;
  height: 100%;
  background-color: #fff;
}

</style>