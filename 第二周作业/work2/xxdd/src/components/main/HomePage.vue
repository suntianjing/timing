<template>
  <div class="hp-wrapper">
    <el-card class="notice">
      <span class="title">官方公告</span>
      <span class="description">暂时没有公告</span>
      <span class="more">了解更多详情</span>
    </el-card>

    <div class="numbers">
      <el-card shadow="hover" v-for="item,index in numberList" :key="index">
        <div class="card-left">
          <img :src="item.iconUrl" alt="">
        </div>
        <div class="card-right">
          <h2>{{ item.numbers }}</h2>
          <p>{{ item.brief }}</p>
        </div>
      </el-card>
    </div>

    <el-card shadow="hover" class="diary">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="付费Live（12）" name="first">暂无Live</el-tab-pane>
        <el-tab-pane label="音频&图文专辑（4）" name="second">暂无专辑</el-tab-pane>
      </el-tabs>
    </el-card>

  </div>
</template>

<script>
export default {
  name: '',


  data() {
    return {
      activeName: 'first',
      numberList: [
        {
          iconUrl: require("../../assets/img/care-icon.png"),
          numbers: '50,541',
          brief: '昨日新增关注数'
        },
        {
          iconUrl: require("../../assets/img/fans-icon.png"),
          numbers: '3,212',
          brief: '粉丝总数'
        },
        {
          iconUrl: require("../../assets/img/buy-icon.png"),
          numbers: '4,532',
          brief: '购买总数（人次）'
        },
        {
          iconUrl: require("../../assets/img/earning-icon.png"),
          numbers: '67,193',
          brief: '总收益（T币）'
        }
      ]
    };
  },

  mounted() {

  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
@import "../../css/main/HomePage.css";
</style>