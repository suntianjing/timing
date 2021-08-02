<template>
  <div class="wrapper serving">
    <div class="header">
      <div class="back-btn">
        <van-icon color="#fff" size="18px" name="wap-home-o"/>
      </div>
      <h2>李源创建的今日开盘分析快要开始了</h2>
    </div>

    <div class="content">
      <div class="left">
        <ul class="teacher_list">
          <li class="teacher_list_items">
            <div class="user-icon">
              <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
            </div>
            <p class="username">李源</p>
            <div class="info">
              <p>股龄8年</p>
              <p>投入不到1万</p>
            </div>
          </li>
          <li class="teacher_list_items">
            <div class="user-icon">
              <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
            </div>
            <p class="username">李源</p>
            <div class="info">
              <p>股龄8年</p>
              <p>投入不到1万</p>
            </div>
          </li>
          <li class="teacher_list_items">
            <div class="user-icon">
              <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
            </div>
            <p class="username">李源</p>
            <div class="info">
              <p>股龄8年</p>
              <p>投入不到1万</p>
            </div>
          </li>
          <li class="teacher_list_items">
            <div class="user-icon">
              <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
            </div>
            <p class="username">李源</p>
            <div class="info">
              <p>股龄8年</p>
              <p>投入不到1万</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul class="saying-list">
          <li class="saying-list-items">
            <div class="user-icon">
              <div class="loop">
                <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
              </div>
              <p class="username">欧阳美丽</p>
            </div>
          </li>
          <li class="saying-list-items">
            <div class="user-icon">
              <div class="loop">
                <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
              </div>
              <p class="username">欧阳美丽</p>
            </div>
          </li>
          <li class="saying-list-items">
            <div class="user-icon">
              <div class="loop">
                <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
              </div>
              <p class="username">欧阳美丽</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer">
      <div class="audience">
        <h2>听众</h2>
        <ul>
          <van-cell is-link @click="showPopup">
            <li>
              <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
              <p class="username">欧阳美丽</p>
            </li>
          </van-cell>
          <van-cell is-link @click="showPopup">
            <li>
              <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
              <p class="username">欧阳美丽</p>
            </li>
          </van-cell>
          <van-cell is-link @click="showPopup">
            <li>
              <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
              <p class="username">欧阳美丽</p>
            </li>
          </van-cell>
          <van-cell is-link @click="showPopup">
            <li>
              <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
              <p class="username">欧阳美丽</p>
            </li>
          </van-cell>
        </ul>
      </div>
    </div>

    <div class="saying">
      <van-button class="saying-btn" color="#f57876" round type="info">按住说话，插一句</van-button>
    </div>


    <van-popup class="props" position="bottom" round v-model="show" style="height: 50%;">
      <div class="prop">
        <div class="info">
          <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
          <button>关注TA</button>
        </div>
        <div class="user-data">
          <p><span>23</span>关注&nbsp;&nbsp;&nbsp;<span>18</span>粉丝</p>
        </div>
        <div class="user-msg">
          <p><van-icon color="red" name="fire" />2018年入市</p>
          <p class="money">总投入金额12万</p>
          <p><van-icon color="red" name="fire" />
            呆在这个是擦的看你发的那个可能并非离开风格和返回给呆在这个是擦的看你发的那个可能并非离开风格和返回给呆在这个是擦的看你发的那个可能并非离开风格和返回给
          </p>
        </div>
        <div class="exit">
          <button class="exit-btn">强制下麦</button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'ServingWheat',


  data() {
    return {
      show: false,
    };
  },

  mounted() {

  },

  methods: {
    showPopup() {
      this.show = true;
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

      .teacher_list {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .teacher_list_items {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 45%;
          height: 9rem;
          border-radius: 1rem;
          padding: 2px;
          background-color: #fdf8f0;
          margin-bottom: 15px;

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

            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }

          }
        }

        li:nth-child(2n+1) {
          border: 2px solid #f4c583;

          .info {
            text-align: left;

            p {
              color: #a28661;
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

  .footer {
    .audience {
      h2 {
        color: #acacac;
        font-size: 18px;
        font-weight: 500;
        margin-left: 20px;
      }

      .van-icon-arrow::before{
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
    bottom: 60px;
    width: 100%;
    text-align: center;
    .saying-btn{
        width: 60%;
        height: 40px;
    }
  }

  //弹出层
  .props{
    background-color: #f1f2f4;
  }
  .prop{
    padding: 15px;
    .info{
      display: flex;
      justify-content: space-between;
      img{
        width: 70px;
        height: 70px;
        border-radius: 50%;

      }
      button{
        background-color: #f1f2f4;
        border-radius: 10px;
        border: 1px solid #f2a3a3;
        color: #f2a3a3;
        padding: 4px 14px;
        margin-top: 30px;
        height: 30px;
      }
    }
    .user-data{
      p{
        color: #aaaeb5;
        font-size: 14px;
        span{
          font-size: 24px;
          font-weight: bold;
          margin-right: 5px;
          color: black;
        }
      }
    }
    .user-msg{
      margin-top: 15px;
      p{
        margin: 5px auto;
        font-size: 14px;
      }
      .money{
        color: #787776;
      }
    }

    .exit{
      width: 100%;
      text-align: center;
      .exit-btn{
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

</style>