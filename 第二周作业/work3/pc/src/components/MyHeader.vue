<template>
  <div class="wrapper">
    <!--logo-->
    <div class="header">
      <div class="logo">
        <img src="../assets/img/logo.jpg" alt="">
        <p>Timing 创作者中心</p>
      </div>
      <!--头像-->
      <div class="avatar">
        <p class="announce">
          <a-icon class="announce-icon" type="notification" />
          第二天早上数据第二天早撒谎给你数据
        </p>
        <a-icon style="font-size: 20px" type="share-alt" />
        <a-popover title="更多">
          <template slot="content">
            <p><a-icon style="margin-right: 5px" type="message" />个人信息</p>
            <p><a-icon style="margin-right: 5px" type="poweroff" />退出登录</p>
          </template>
          <a-avatar class="user-icon" src="https://img2.baidu.com/it/u=3011893491,4249262958&fm=26&fmt=auto&gp=0.jpg"></a-avatar>
        </a-popover>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',


  data() {
    return {};
  },

  mounted() {

  },

  methods: {},
};
</script>


<style lang="scss">

.wrapper {
  margin: 0;
  padding: 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    padding: 0 35px;
    .logo{
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        width: 45px;
        vertical-align: middle;
      }
      p{
        margin: 0 10px;
        color: #5094f3;
        font-size: 18px;
        font-weight: 600;
      }
    }
    .avatar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      p{
        position: relative;
        margin: 0 20px;
        padding: 8px 40px;
        border-radius: 20px;
        background-color: #fafafa;
        .announce-icon{
          position: absolute;
          top: 50%;
          left: 15px;
          transform: translateY(-50%);
        }
      }
      .user-icon{
        margin: 0 30px;
      }
    }
  }
}

</style>