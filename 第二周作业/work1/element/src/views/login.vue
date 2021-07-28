<template>
  <div class="main">
      <div class="login">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <el-card shadow="hover" style="text-align:center">
          <div>
              <router-link to="/main">Go to main</router-link>
          </div>
          <div>
              <router-link to="/next">Go to next</router-link>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  </div>
</template>

<script>
export default {
  name: "login",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.login{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
*{
    margin: 0;
    padding: 0;
}
.main{
    position: fixed;
    width: 99%;
    height: 100%;
    background: linear-gradient(to bottom, #00416A, #E4E5E6) !important;
}

</style>