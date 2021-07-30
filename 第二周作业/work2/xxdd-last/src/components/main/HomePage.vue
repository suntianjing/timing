<template>
  <div class="hp-wrapper">
    <el-card class="notice">
      <span class="title">官方公告</span>
      <span class="description">暂时没有公告</span>
      <span class="more">了解更多详情</span>
    </el-card>

    <div class="numbers">
      <el-card class="card" shadow="hover" v-for="item,index in numberList" :key="index">
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
      <el-tabs class="diary-tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="付费Live（12）" name="first" class="learn">
          暂无
          <img src="../../assets/img/学习.png" alt="">
          <el-button class="load-button">发布学习日记</el-button>
        </el-tab-pane>
        <el-tab-pane label="音频&图文专辑（4）" name="second">暂无专辑</el-tab-pane>
      </el-tabs>
    </el-card>

  </div>
</template>

<script>

export default {
  name: 'HomePage',

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
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
};
</script>

<style lang="scss" scoped>
$theme-color: #00c896;
$theme-hover-color: #e6faf5;
$border-color: #e6e6e6;

.hp-wrapper {
  width: 100%;
  height: 100%;

  .notice{
    height: 100px;
    line-height: 60px;
    .el-card__body{
      padding: 0 0 0 40px;
    }
    span{
      margin-left: 20px;
    }
    .title{
      padding: 10px;
      background-color: #ffc524;
      border-radius: 5px;
    }
    .more{
      color: #00c896;
    }
  }

  .numbers{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .card{
      width: 230px;
      height: 140px;
      position: relative;
      .card-left{
        float: left;
        width: 50px;
        height: 50px;
        img{
          position: absolute;
          width: 50px;
          height: 50px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .card-right{
        float: left;
        margin-left: 12px;
        height: 50px;
        h2{
          font-size: 20px;
        }
        p{
          font-size: 14px;
          color: #4b4b4b;
        }
      }
    }
  }

  .diary{
    margin-top: 20px;
    height: 600px;
    .diary-tabs{
        .learn{
          position: relative;
          width: 100%;
          height: 500px;
          img{
            position: absolute;
            height: 300px;
            top: 40%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
          .load-button{
            position: absolute;
            bottom: 90px;
            left: 50%;
            background-color: #31cea2;
            color: #f7f9fa;
            transform: translateX(-50%);
          }
        }
    }
  }
}


</style>