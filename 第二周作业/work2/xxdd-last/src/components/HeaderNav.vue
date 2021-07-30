<template>
  <div class="container">
    <!--版心-->
    <div class="w">
      <div class="logo">
        <img src="../assets/img/logo.png" alt="">
        <h1>猩猩点灯</h1>
      </div>
      <div class="avatar">
        <!--消息通知-->
        <el-badge :value="6" class="item">
          <el-tooltip content="消息通知" placement="bottom">
            <i class="el-icon-bell" style="font-size: 25px"></i>
          </el-tooltip>
        </el-badge>
        <!--用户头像-->
        <el-dropdown>
          <img src="../assets/img/avatar.jpg" alt="" style="width: 35px;height: 35px">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <img src="../assets/img/identify.png" alt=""
                   style="width: 20px;vertical-align: middle;margin-right: 5px">
              <span>认证</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <img src="../assets/img/exit.png" alt="" style="width: 20px;vertical-align: middle;margin-right: 5px">
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',


  data() {
    return {};
  },

  mounted() {

  },

  methods: {},
};
</script>

<style lang="scss" scoped>
$theme-color: #00c896;
$theme-hover-color: #e6faf5;
* {
  margin: 0;
  padding: 0;
}

.container {
  .w {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    //logo
    .logo {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 120px;
      height: 100%;

      img {
        width: 32px;
        height: 32px;
      }

      h1 {
        display: inline-block;
        font-size: 20px;
        color: $theme-color;
      }
    }

    //头像
    .avatar {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100px;
      height: 100%;
    }
  }
}

</style>