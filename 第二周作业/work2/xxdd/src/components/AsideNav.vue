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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$emit('togglePage',key);
    },
  },
};
</script>

<style scoped>
@import "../css/AsideNav.css";
</style>