<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>

import HomePage from "./main/HomePage";
import WorkManage from "./main/WorkManage";
import VideoData from "./main/VideoData";
export default {
  name: 'MainContent',
  props:['sendData'],

  components:{
    HomePage,
    WorkManage,
    VideoData,
  },

  data() {
    return {
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss">

.wrapper{
  width: 100%;
  height: 100%;
}

</style>