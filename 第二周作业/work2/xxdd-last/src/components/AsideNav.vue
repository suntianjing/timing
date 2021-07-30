<template>
  <div class="aside">

    <el-menu
        default-active="1"
        class="el-menu-vertical-demo menu"
        active-text-color="#00c896"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect">
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">主页</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-management"></i>
          <span>管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">内容管理</el-menu-item>
          <el-menu-item index="2-2">个人主页管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-promotion"></i>
          <span>涨粉</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">赞助自习室</el-menu-item>
          <el-menu-item index="3-2">答疑</el-menu-item>
          <el-menu-item index="3-3">举办Live</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-flag"></i>
          <span>创收</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">发布专辑</el-menu-item>
          <el-menu-item index="4-2">举办付费Live</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="5">
        <i class="el-icon-money"></i>
        <span slot="title">我的资产</span>
      </el-menu-item>

      <el-menu-item index="6">
        <i class="el-icon-data-line"></i>
        <span slot="title"><a class="link" href="http://activity.timing360.com/MonkeyLightUpload/FormalReleased/upload.html">我的网盘</a></span>
      </el-menu-item>


    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'AsideNav',


  data() {
    return {};
  },

  mounted() {

  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$emit('togglePage', key);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.link{
  text-decoration: none;
  color: #303133;
  &:active{
    text-decoration: none;
    color: #303133;
  }
  &:visited{
    text-decoration: none;
    color: #303133;
  }
}

$theme-color: #00c896;
$theme-hover-color: #e6faf5;

.aside {
  width: 210px;
  height: 950px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e6e6e6;

  .menu {
    height: 100%;
  }

  .menu .el-menu-item {
    height: 50px;
  }

  .menu .el-menu-item:hover {
    background-color: #fff;
  }

  .menu .el-menu-item:focus {
    background-color: #fff;
  }

  .menu .el-menu-item-group .el-menu-item {
    height: 32px;
    line-height: 32px;
    color: rgba(75, 75, 75, 0.6);
  }

  .menu .el-menu-item-group .el-menu-item:hover {
    background-color: #e6faf5;
    color: #00c896;
  }

  .menu .el-menu-item-group .el-menu-item:focus {
    background-color: #fff;
  }

  .menu .el-menu-item-group .el-menu-item.is-active:before {
    top: 0;
  }

  .el-menu-item.is-active:before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    height: 32px;
    width: 3px;
    background: #00c896;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
}

</style>