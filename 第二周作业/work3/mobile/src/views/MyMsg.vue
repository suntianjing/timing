<template>
  <div class="wrapper">
    <div class="content">
      <div class="header">
        <h2>为了防止账号丢失，请绑定手机号</h2>
        <van-button class="bind-btn" round color="#c31f02">去绑定</van-button>
      </div>

      <div class="user-info">
        <div class="user-icon">
          <img src="https://img0.baidu.com/it/u=2920674840,1127530107&fm=26&fmt=auto&gp=0.jpg" alt="">
        </div>
        <div class="edit-btn">
          <button>编辑资料</button>
        </div>
      </div>
      <h3 class="username">李源</h3>
      <p class="base-info"><span>23</span>关注&nbsp;&nbsp;&nbsp;<span>18</span>粉丝</p>

      <div class="msg">
        <p>2021年入市</p>
        <p>总投资金额小于1万</p>
        <p>一个股市菜鸟，没什么特别的故事</p>
      </div>

      <div class="confirm">
        <van-button class="confirm-btn" color="#c31f02" icon="vip-card-o" round type="info">个人认证&nbsp;1/3&nbsp;&nbsp;></van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMsg',

  components: {
  },

  data() {
    return {};
  },

  mounted() {

  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.content{
  .header{
    width: 100%;
    height: 3rem;
    background-color: #ffe2e2;
    color: #cd442c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
      font-size: 14px;
      font-weight: 500;
      margin-left: 10px;
    }
    .bind-btn{
      width: 80px;
      height: 50%;
      margin-right: 10px;
    }
  }
  .user-info{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .user-icon{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-left: 20px;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .edit-btn{
      margin-top: 35px;
      margin-right: 15px;
      button{
        background-color: #ffffff;
        border: 1px solid #f49796;
        color: #f49796;
        border-radius: 10px;
        padding: 1px 5px;
      }
    }
  }

  .username{
    margin-left: 20px;
  }
  .base-info{
    margin: 20px 20px;
    color: #a2a7ae;
    span{
      font-weight: bold;
      font-size: 20px;
      color: black;
      margin-right: 10px;
    }
  }
  .msg{
    margin-left: 20px;
    color: #767574;
    font-size: 15px;
    margin-top: 50px;
    p{
      margin: 10px auto ;
    }
  }
  .confirm{
    .confirm-btn{
      color: #ffe2a9;
     margin: 20px;
    }
  }
}

</style>