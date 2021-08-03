<template>
  <div class="wrapper serving">
    <div class="header">
      <div class="back-btn">
        <van-icon color="#fff" size="18px" name="wap-home-o"/>
      </div>
      <h2 class="van-ellipsis" style="width: 70%;">李源创建的今日开盘分析快要开始了大师傅大师傅</h2>
    </div>

    <div class="content">
      <div class="left">
        <ul class="teacher_list" v-for="item,index in teacher_list" :key="index">
          <li :class=" index%2===0 ? 'teacher_list_items goldborder': 'teacher_list_items' ">
            <div class="user-icon">
              <img :src="item.iconUrl" alt="">
              <van-icon class="phone" name="phone-o" />
            </div>
            <p class="username">{{ item.name }}</p>
            <div class="info">
              <p>股龄{{ item.time }}年</p>
              <p>投入不到{{ item.money }}万</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul class="saying-list" v-for="item,index in audience_list" :key="index">
          <li class="saying-list-items">
            <div class="user-icon">
              <div class="loop">
                <img :src="item.audienceImg" alt="">
                <van-icon class="volume" name="volume-o" />
              </div>
              <p class="username">{{ audienceName }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="gogogo" @click="gogogo">
      <van-icon class="add" name="plus" />
      <p>点击上麦</p>
    </div>

    <div class="footer">
      <div class="audience">
        <h2>听众</h2>
        <ul>
          <van-cell is-link @click="showPopup" v-for="item,index in audience_list" :key="index">
            <li @click="popupData=item;popup_index=index;">
              <img :src="item.audienceImg" alt="">
              <p class="username">{{ item.audienceName }}</p>
            </li>
          </van-cell>
        </ul>
      </div>
    </div>

    <div class="saying">
      <div class="voice-btn" v-if="is_sound" @click="is_sound=!is_sound">
        <van-icon class="iconfont" class-prefix="icon" name="audiostatic" />
        <p>静音</p>
      </div>
      <div class="novoice-btn" v-else @click="is_sound=!is_sound">
        <van-icon class="iconfont" class-prefix="icon" name="yanjizhushou-shangchuan_maikefeng" />
        <p>静音</p>
      </div>

      <button class="exit">下麦</button>

    </div>

    <!--弹出层-->

    <van-popup class="props" position="bottom" round v-model="show" style="height: 50%;">
      <div class="prop">
        <div class="info">
          <img :src="popupData.audienceImg" alt="">
          <button @click="showmsg">关注TA</button>
        </div>
        <h2 style="font-size: 20px">{{popupData.audienceName}}</h2>
        <div class="user-data">
          <p><span>{{ popupData.like }}</span>关注&nbsp;&nbsp;&nbsp;<span>{{ popupData.fans }}</span>粉丝</p>
        </div>
        <div class="user-msg">
          <p>
            <van-icon color="red" name="fire"/>
            {{ popupData.years }}年入市
          </p>
          <p class="money">总投入金额{{ popupData.money }}万</p>
          <p>
            <van-icon color="red" name="fire"/>
            {{ popupData.msg }}
          </p>
        </div>
        <div class="exit">
          <button class="exit-btn" @click="delAudience">强制下麦</button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {Dialog, Notify} from 'vant';
import axios from 'axios'
export default {
  name: 'ServingWheat',


  data() {
    return {
      show: false,
      isLoading:false,
      teacher_list:[],
      audience_list:[],
      popupData:{},
      popup_index:0,
      is_sound:false,
    };
  },

  mounted() {
    var that = this;
    axios
        .get(
            'https://www.fastmock.site/mock/a8ded3f1b4edb45596cdbc75423d3250/paigu/join'
        )
        .then(function (response) {
          console.log(response.data.arrays);
          that.teacher_list = response.data.arrays;
          that.audience_list = response.data.audience;
        })
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    showmsg(){
      Notify({
        type: 'primary',
        message: '关注成功' ,
        color:'#fff',
        background:'grey',
      });
    },
    delAudience(){
      this.audience_list.splice(this.popup_index,1);
      this.show = false;
      Notify({
        type: 'primary',
        message: '强制下麦成功' ,
        color:'#fff',
        background:'grey',
      })
    },

    gogogo(){
      Dialog.confirm({
        title: '上麦',
        message: '是否上麦？',
      })
          .then(() => {
            // on confirm
            this.teacher_list.push({
              "name":"孙天靖",
              "time":9,
              "money":80,
              "iconUrl":"https://img0.baidu.com/it/u=3648032945,4064834009&fm=26&fmt=auto&gp=0.jpg"
            })
          })
          .catch(() => {
            // on cancel
          });
    },

  },
};
</script>

<style lang="scss">

.serving {
  .header {
    width: 100%;
    height: 5rem;
    background-color: #f57876;
    box-sizing: border-box;
    padding: 10px;

    h2 {
      color: #fff;
      font-size: 15px;
      font-weight: normal;
    }
  }

  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    .left {
      width: 60%;

      .clearfix:after{
        content: '';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }

      .teacher_list {
        list-style: none;
        //display: flex;
        //justify-content: space-between;
        //align-items: center;
        //flex-wrap: wrap;

        .teacher_list_items {
          float: left;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 42%;
          height: 9rem;
          border-radius: 1rem;
          padding: 2px;
          background-color: #fdf8f0;
          margin-bottom: 15px;
          margin-left: 10px;
          box-sizing:border-box;


          p {
            margin: 0 auto;
          }

          .username {
            font-size: 14px;
          }

          .info {
            text-align: center;

            p {
              font-size: 13px;
              color: #b6b5b2;
            }
          }

          .user-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: relative;

            img {
              width: 45px;
              height: 45px;
              border-radius: 50%;
            }

            .phone{
              position: absolute;
              right: -7px;
              bottom: -6px;
              background-color: white;
              border-radius: 50%;
              color: #fdaf32;
            }

          }
        }

        .goldborder {
          border: 2px solid #f4c583;

          .info {
            text-align: left;

            p {
              color: #a28661;
              margin: 0 auto;
              &:before{
                font-family: iconfont;
                content: '\e60c';
                margin-right: 2px;
              }
            }
          }
        }
      }

    }

    .right {
      width: 30%;

      .saying-list {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;

        .saying-list-items {
          margin-bottom: 10px;

          .user-icon {
            .loop {
              width: 44px;
              height: 44px;
              border-radius: 50%;
              border: 2px solid #faa037;
              position: relative;
              .volume{
                position: absolute;
                right: -6px;
                bottom: 0;
                background-color:#f9931a;
                color: #fff;
                padding: 1px;
                border-radius: 50%;
              }
            }

            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }

            .username {
              font-size: 12px;
              margin: 5px auto 10px;

            }
          }
        }
      }

    }
  }

  .gogogo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 9rem;
    border-radius: 1rem;
    padding: 2px;
    background-color: #fdf8f0;
    margin-bottom: 15px;
    margin-left: 20px;
    box-sizing:border-box;
    color: #d9ccb6;
    .add{
      font-size: 30px;
    }
    p{

    }
  }

  .footer {
    margin-bottom: 150px;
    .audience {
      h2 {
        color: #acacac;
        font-size: 18px;
        font-weight: 500;
        margin-left: 20px;
      }

      .van-icon-arrow::before {
        display: none;
      }

      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;

        li {
          text-align: center;

          img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
          }

          p {
            margin: 0 auto;
            font-size: 14px;
          }
        }
      }
    }
  }

  .saying {
    position: fixed;
    bottom: 80px;
    width: 100%;
    text-align: center;

    .voice-btn{
      display: inline-block;
      width: 42px;
      height: 42px;
      color: #f57876;
      border-radius: 50%;
      border: 1.8px solid #f57876;
      background-color: #fff;
      .iconfont{
        font-size: 20px;
      }
      p{
        font-size: 6px;
        margin: 0;
      }
    }
    .novoice-btn{
      display: inline-block;
      width: 42px;
      height: 42px;
      color: #7a7a7a;
      border-radius: 50%;
      border: 1.8px solid #7a7a7a;
      background-color: #fff;
      .iconfont{
        font-size: 20px;
      }
      p{
        font-size: 6px;
        margin: 0;
      }
    }
    //下麦
    .exit{
      position: absolute;
      bottom: 0;
      right: 10px;
      background-color: #ffffff;
      color: #454545;
      border: 1.5px solid #454545;
      border-radius: 18px;
      padding: 3px 6px;
    }
  }

  //弹出层
  .props {
    background-color: #f1f2f4;
    .prop {
      padding: 15px;

      .info {
        display: flex;
        justify-content: space-between;

        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;

        }

        button {
          background-color: #f1f2f4;
          border-radius: 10px;
          border: 1px solid #f2a3a3;
          color: #f2a3a3;
          padding: 4px 14px;
          margin-top: 30px;
          height: 30px;
        }
      }

      .user-data {
        p {
          color: #aaaeb5;
          font-size: 14px;

          span {
            font-size: 24px;
            font-weight: bold;
            margin-right: 5px;
            color: black;
          }
        }
      }

      .user-msg {
        margin-top: 15px;

        p {
          margin: 5px auto;
          font-size: 14px;
        }

        .money {
          color: #787776;
        }
      }

      .exit {
        width: 100%;
        text-align: center;

        .exit-btn {
          color: #414141;
          background-color: #fff;
          border-radius: 16px;
          border: none;
          width: 80%;
          height: 36px;
          margin: 20px auto;
        }
      }

    }
  }

}

</style>