<template>
  <div id="app">
    <!-- 搜索框 -->
    <el-row class="search">
      <el-col :span="3" :offset="1"><p>被举报答疑室ID</p></el-col>
      <el-col :span="4"
        ><el-input placeholder="userID" v-model="search" clearable> </el-input
      ></el-col>
      <el-col :span="2"
        ><el-button type="primary" @click="filterData">搜索</el-button></el-col
      >
    </el-row>
    <!-- 表格 -->
    <!-- 实现数据搜索 -->
    <el-table
      :data="searchData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      height="800"
      border
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
    >
      <el-table-column prop="id" label="举报人ID" width="180">
      </el-table-column>
      <el-table-column prop="name" label="举报人用户名" width="180">
      </el-table-column>
      <el-table-column prop="t_id" label="老师ID"> </el-table-column>
      <el-table-column prop="t_name" label="老师用户名"> </el-table-column>
      <el-table-column label="查看举报信息">
        <el-button>查看</el-button>
      </el-table-column>
      <el-table-column      
        label="答疑室名字"     
      >
      <template slot-scope="scope">
        <p style="color:#53a8ff;">{{ scope.row.room_name }}</p>
      </template>
      </el-table-column>
      <el-table-column prop="room_id" label="答疑室ID"> </el-table-column>
      <el-table-column prop="type" label="举报类型"> </el-table-column>
      <el-table-column prop="time" label="举报时间"> </el-table-column>
      <el-table-column prop="count" label="被举报次数"> </el-table-column>
      <el-table-column label="操作">
        <!-- <el-button type="primary">忽略</el-button> -->
        <template slot-scope="scope">
          <el-button @click="del(scope.$index)" size="small"> 忽略 </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :page-size="pagesize"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { MessageBox } from "element-ui";
import axios from "axios";
export default {
  name: "MainPage",

  data() {
    return {
      tableData: [
        {
          id: "",
          name: "",
          t_id: "",
          t_name: "",
          room_name: "",
          room_id: "",
          type: "",
          time: "",
          count: "",
        },
      ],
      // 搜索结果
      searchData: [],
      search: "",
      currentPage:1,
      pagesize:50,
      total:100,
    };
  },
  mounted() {
    var that = this;
    axios
      .get(
        "https://www.fastmock.site/mock/a15186ac9e82089678e43d39dd52698c/eleme/msg"
      )
      .then(function (response) {
        console.log(response.data.arrays);
        that.tableData = response.data.arrays;
        that.searchData = response.data.arrays;
        that.total = that.searchData.length
      });
  },
  methods: {
    // 查询数据
    filterData() {
      this.searchData = this.tableData.filter(
        (data) =>
          !this.search ||
          data.id.toString().toLowerCase().includes(this.search.toLowerCase())
      );
      this.total = this.searchData.length
    },

    // 删除
    del(idx) {
      MessageBox.confirm("此操作将永久删除该表单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(idx, 1);
          this.searchData = this.tableData;
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
      console.log(val);
    },
  },
};
</script>

<style scoped>
@import url(../css/app.css);
</style>