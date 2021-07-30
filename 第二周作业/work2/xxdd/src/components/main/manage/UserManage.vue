<template>
  <div class="main">
    <div class="header">
      <p>定制个人主页</p>
      <p style="color: #8b8b8b">你可以在个人主页中推广专辑/付费Live/学习群 <span style="color: #00c896">查看示例图>></span> </p>
    </div>
    <!--分割线-->
    <el-divider></el-divider>
    <div class="rules">
      <h4 style="margin-bottom: 20px">规则</h4>
      <el-radio v-model="radio" label="1">（默认）永远展示最新创建的专辑/付费LIVE/学习群</el-radio>
      <br>
      <el-radio v-model="radio" label="2">自定义
      </el-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: '',


  data() {
    return {
      radio:1,
    };
  },

  mounted() {

  },

  methods: {},
};
</script>

<style scoped>
@import "../../../css/main/manage/UserManage.css";
</style>