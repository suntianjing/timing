<template>
  <div class="wrapper">

    <div class="title">
      <h2>
        <van-icon name="fire"/>
        和谐沟通，勿信小道消息
        <van-icon name="fire"/>
      </h2>
    </div>

    <div class="roting">
      <van-circle
          v-model="currentRate"
          :rate="70"
          :speed="100"
          :stroke-width="60"
          :clockwise="false"
          layer-color="#e1e1e1"
          color="#f57876"
          size="14rem"
      >
      <div class="time">
        <p class="date">2月3日,星期五</p>
        <h3>距离收盘</h3>
        <h2><van-count-down class="count" :time="30 * 60 * 60 * 1000" /></h2>
        <p class="leave">本月还剩15个交易日</p>
      </div>
      </van-circle>
    </div>

    <div class="batting-ing">
      <h3><span>——</span>&nbsp;&nbsp;开盘啦，来聊聊实时战况&nbsp;&nbsp;<span>——</span></h3>
    </div>

    <div class="chating">
      <ul class="room_lists">
        <li class="room_lists_item" v-for="item,idx in dataLists" :key="idx">
          <div class="chating_number">
            <p><van-icon class="data-icon" color="#e63f3f" size="18px" name="bar-chart-o" />{{ item.chat_number }}人在聊</p>
          </div>
          <div class="title">
            {{ item.title }}
          </div>
          <div class="online_number">
            <ul class="user-icon-lists">
              <li class="user-icon-lists-item">
                <img :src="item.imgurl1" alt="">
                <img :src="item.imgurl2" alt="">
                <img :src="item.imgurl3" alt="">
              </li>
              <p>{{ item.online_number }}人在线</p>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <div class="operate-btn">
      <van-button icon="add-o" class="create" color="#ff6361" round to="/join" >创建房间</van-button>
      <van-button icon="smile-comment-o" class="join" color="#ffa63d" round to="/Serving">随机加入</van-button>
    </div>

  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'IndexPage',

  components: {
  },

  data() {
    return {
      currentRate: 0,
      dataLists:[],
    };
  },

  mounted() {
    var that = this;
    axios
        .get(
            'https://www.fastmock.site/mock/a8ded3f1b4edb45596cdbc75423d3250/paigu/rooms'
        )
        .then(function (response) {
          console.log(response.data.arrays);
          that.dataLists = response.data.arrays;
        })
  },

  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
  },

  methods: {},
};
</script>

<style lang="scss">

.wrapper {
  .title {
    margin-bottom: 2rem;

    h2 {
      text-align: center;
      font-size: 1rem;
      color: #f39b9a;
    }
  }

  .roting {
    display: flex;
    justify-content: center;
    align-items: center;
    .time{
      .date{
        margin-top: 30px;
        font-size: 12px;
        color: #7b7564;
      }
      h3{
        color: #f57876;
        font-size: 16px;
      }
      h2{
        color: #f57876;
        font-size: 30px;
        margin: 0px auto;
      }
      .count{
        color: #f57876;
        font-size: 30px;
        margin: 0px auto;
      }
      .leave{
        font-size: 12px;
        color: #7b7564;
      }
    }
  }

  .batting-ing{
    text-align: center;
    h3{
      span{
        color: #dbd9d0;
      }
    }
  }

  .chating{
    .room_lists{
      width: 100%;
      display: flex;
      margin-bottom: 100px;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;

      .room_lists_item{
        width: 42%;
        height: 8.5rem;
        margin-bottom: 1rem;
        background-color: #393a3f;
        border-radius: 1rem;
        color: #fff;
        position: relative;
        padding: 5px;

        .chating_number{
          display: inline-block;
          font-size: 1px;
          padding: 3px 15px;
          color: #e4e5e5;
          background-color: #303135;
          border-radius: 10px;
          .data-icon{
            vertical-align: middle;
            margin-right: 5px;
          }
        }
        .title{
          margin-top: 8px;
          margin-left: 5px;
        }

        .online_number{
          position: absolute;
          bottom: 10px;
          left: 10px;
          .user-icon-lists{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            list-style: none;
            .user-icon-lists-item{
              display: flex;
              justify-content: flex-start;
              align-items: center;
              img{
                width: 16px;
                height: 16px;
                border-radius: 50%;
                margin-left: -3px;
                border: 0.5px solid #7b7564;
              }
            }
            p{
              margin: 0 5px;
              color: #7b7564;
              font-size: 1px;
            }
          }
        }

      }
    }
  }

  .operate-btn{
    position: fixed;
    width: 100%;
    bottom: 80px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    .create{
      color: #fff;
      background-color: #ff6361;
      width: 40%;
      height: 40px;
    }
    .join{
      color: #fff;
      background-color: #ffa63d;
      width: 40%;
      height: 40px;
    }
  }
}

</style>