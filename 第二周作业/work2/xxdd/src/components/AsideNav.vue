<template>
  <div class="aside">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">主页</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">内容管理</el-menu-item>
          <el-menu-item index="2-2">个人主页管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>涨粉</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">赞助自习室</el-menu-item>
          <el-menu-item index="3-2">答疑</el-menu-item>
          <el-menu-item index="3-3">举办live</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>创收</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">发布专辑</el-menu-item>
          <el-menu-item index="4-2">举办付费Live</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">我的资产</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">我的网盘</span>
      </el-menu-item>


    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'AsideNav',


  data() {
    return {

    };
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
  },
};
</script>

<style scoped>
@import "../css/AsideNav.css";
</style>