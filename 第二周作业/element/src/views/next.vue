<template>
  <div id="next">
    <el-row>
      <el-col :span="3">
        <el-button type="primary" @click="add">新建</el-button>
      </el-col>
      <el-col :span="15">
        <el-col :span="2" :offset="5"
          ><p style="line-height: 40px; margin: 0 auto">标签搜索：</p></el-col
        >
        <el-col :span="4"
          ><el-input v-model="search" placeholder="请输入内容"></el-input
        ></el-col>
        <el-col :span="2" :offset="1"
          ><p style="line-height: 40px; margin: 0 auto">状态：</p></el-col
        >
        <el-col :span="4"
          ><el-input placeholder="请输入状态"></el-input
        ></el-col>
        <el-col :span="2"> <el-button type="primary">查询</el-button></el-col>
        <el-col :span="2"> <el-button>重置</el-button></el-col>
      </el-col>
    </el-row>

    <!-- 数据表格 -->
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column prop="name" label="标签名称" width="400">
      </el-table-column>
      <el-table-column prop="status" label="状态" width="400">
      </el-table-column>
      <el-table-column prop="keyword" label="主题关键词" width="400">
      </el-table-column>
      <el-table-column prop="do" label="操作" width="400">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="del(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改信息 -->
    <el-dialog
      title="编辑信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <el-form ref="form" :model="editmsg" label-width="40px">
          <el-form-item label="标签名称">
            <el-input v-model="editmsg.name"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-input v-model="editmsg.status"></el-input>
          </el-form-item>
          <el-form-item label="主题关键词">
            <el-input v-model="editmsg.keyword"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import { MessageBox } from 'element-ui'
export default {
  name: "next",

  data() {
    return {
      //   搜索
      search: "",
      tableData: [
        {
          name: "学习过程",
          status: "已关联",
          keyword: "学习工程、学习日常",
        },
        {
          name: "户外",
          status: "已关联",
          keyword: "野外求生",
        },
        {
          name: "职场提升",
          status: "已关联",
          keyword: "职业职场、求职、创业",
        },
        {
          name: "高中",
          status: "已关联",
          keyword: "高考、高中",
        },
        {
          name: "初中",
          status: "已关联",
          keyword: "初中",
        },
        {
          name: "小学",
          status: "已关联",
          keyword: "小学",
        },
      ],
      addmsg: {
        name: "",
        status: "",
        keyword: "",
      },
      dialogVisible: false, //编辑弹框显示
      editmsg: {
        name: "",
        status: "",
        keyword: "",
      },
      userIndex: 0,
    };
  },

  mounted() {},

  methods: {
    add() {
      if (!this.addmsg.name) {
        this.$message({
          message: "请输入姓名",
          type: "warning",
        });
        return;
      }

      if (!this.addmsg.status) {
        this.$message({
          message: "请添加状态",
          type: "warning",
        });
        return;
      }

      if (!this.addmsg.keyword) {
        this.$message({
          message: "请添加关键词",
          type: "warning",
        });
        return;
      }
      this.tableData.push(this.addmsg)
      this.addmsg = {}

    },

    // 删除
    del(idx){
      MessageBox.confirm('此操作将永久删除该表单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(idx,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    edit(item,idx){
      this.userIndex = idx
      this.editmsg = {
        name:item.name,
        status:item.status,
        keyword:item.keyword,
      }
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
    },
    confirm(){
      this.dialogVisible = false
      //this.tableData[this.userIndex] = this.editUser   由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。深入响应式原理
      Vue.set(this.tableData,this.userIndex, this.editmsg)
    }

  },
};
</script>

<style scoped>
#next {
  width: 80%;
  margin: 50px auto;
  padding: 0;
}
</style>