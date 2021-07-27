<template>
  <div id="app" :offset="3">
    <!-- 搜索框 -->
    <el-row class="search">
      <el-col :span="3" :offset="1"><p>被举报答疑室ID</p></el-col>
      <el-col :span="4"
        ><el-input placeholder="userID" v-model="input" clearable> </el-input
      ></el-col>
      <el-col :span="2"><el-button type="primary">搜索</el-button></el-col>
    </el-row>
    <!-- 表格 -->
    <el-table
      :data="tableData"
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
      <el-table-column prop="room_name" label="答疑室名字"> </el-table-column>
      <el-table-column prop="room_id" label="答疑室ID"> </el-table-column>
      <el-table-column prop="type" label="举报类型"> </el-table-column>
      <el-table-column prop="time" label="举报时间"> </el-table-column>
      <el-table-column prop="count" label="被举报次数"> </el-table-column>
      <el-table-column label="操作">
        <el-button type="primary">忽略</el-button>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
// import aform from './components/form.vue'
// import MyData from './components/mydata.vue'
import axios from "axios";
export default {
  name: "App",
  components: {
    // aform,
    // MyData
  },
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
      input: "",
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
      });
  },
};
</script>

<style>
@import url("css/app.css");
</style>
