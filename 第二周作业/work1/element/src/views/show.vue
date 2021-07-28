<template>
  <div class="block">
    <span class="demonstration">显示总数</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="300"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "show",

  data() {
    return {
      currentPage1: 2,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },

  mounted() {},

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>