<template>
    <div id="app">
    <!-- 搜索框 -->
    <el-row class="search">
      <el-col :span="3" :offset="1"><p>被举报答疑室ID</p></el-col>
      <el-col :span="4"
        ><el-input placeholder="userID" v-model="search" clearable> </el-input
      ></el-col>
      <el-col :span="2"><el-button type="primary" @click="filterData">搜索</el-button></el-col>
    </el-row>
    <!-- 表格 -->
    <!-- 实现数据搜索 -->
    <el-table
      :data="searchData"
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
      <el-table-column prop="room_name" label="答疑室名字" cell-class-name="room_name"> </el-table-column>
      <el-table-column prop="room_id" label="答疑室ID"> </el-table-column>
      <el-table-column prop="type" label="举报类型"> </el-table-column>
      <el-table-column prop="time" label="举报时间"> </el-table-column>
      <el-table-column prop="count" label="被举报次数"> </el-table-column>
      <el-table-column label="操作">
        <el-button type="primary">忽略</el-button>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'MainPage',   

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
        }
      ],
      // 搜索结果
      searchData:[],
      search: "",
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
      });
  },
  methods:{
    filterData(){
      this.searchData = this.tableData.filter(data => !this.search || data.id.toString().toLowerCase().includes(this.search.toLowerCase()))
    }
  }
};
</script>

<style scoped>
@import url(../css/app.css);
</style>