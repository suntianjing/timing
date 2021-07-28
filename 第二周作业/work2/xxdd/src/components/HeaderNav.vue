<template>
  <div class="container">
    <div class="w">
      <!--logo-->
      <div class="logo">
        <a href="#">
          <img src="../assets/img/logo.png" alt="">
          <h1>猩猩点灯</h1>
        </a>
      </div>
      <!-- 用户头像-->
      <div class="user">
        <!--消息通知-->
        <el-badge :value="6" class="item">
          <el-tooltip content="消息通知" placement="bottom">
            <i class="el-icon-bell" style="font-size: 25px"></i>
          </el-tooltip>
        </el-badge>
        <!--用户头像下拉菜单-->
        <div class="avatar">
          <el-dropdown>
            <img src="../assets/img/avatar.jpg" alt="" style="width: 35px;height: 35px">
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <img src="../assets/img/identify.png" alt="" style="width: 20px;vertical-align: middle;margin-right: 5px">
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

<style scoped>
@import "../css/HeaderNav.css";
</style>