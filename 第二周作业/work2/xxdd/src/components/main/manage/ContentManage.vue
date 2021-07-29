<template>
  <div class="wrapper cm-wrapper">
    <!--用户管理-->
    <el-tabs v-model="activeName">
      <el-tab-pane :label="'学习日记' + diaryTotal" name="first">
        <div class="title">
          <span class="title-main">在Timing中，用户会用“学习日记”来记录学习历程、分享学习经验，“学习日记”有 文字+图片 和 文字+视频 两种样式。一篇好的“学习日记”，能够获得大量的曝光，吸引更多人的关注。</span>
          <span class="title-more">了解更多>> </span>
        </div>
        <div class="diary-list">
          <div class="list-item" v-for="item,index in diaryList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
            <div class="avatar">
              <img :src="item.avatar" alt="">
            </div>
            <div class="user">
              <div class="name">{{ item.name }}</div>
              <div class="time">{{ item.time }}</div>
              <div class="brief">{{ item.brief }}</div>
              <div class="pic">
                <img :src="item1" alt="" v-for="item1,index1 in item.pic" :key="index1">
              </div>
              <div class="act">
                <div class="like"><i class="el-icon-thumb"></i><span>{{ item.likeNum }}</span></div>
                <div class="comment"><i class="el-icon-chat-round"></i><span>{{ item.commentNum }}</span></div>
                <div class="share"><i class="el-icon-share"></i><span>{{ item.shareNum }}</span></div>
              </div>
              <el-divider></el-divider>
            </div>
            <div class="delete" @click="deleteEvent(item,id)"><i class="el-icon-delete"></i></div>
          </div>
        </div>
      </el-tab-pane>

      <!--长视频管理-->
      <el-tab-pane :label="'长视频' + videoTotal" name="second">
        暂时没有长视频
      </el-tab-pane>
    </el-tabs>

    <!-- 分页器 -->
    <el-pagination small
                   @current-change="handleCurrentChange"
                   background
                   :page-size="pagesize"
                   layout="prev, pager, next"
                   :total="diaryTotal"></el-pagination>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContentManage',

  data() {
    return {
      activeName: 'first',
      diaryTotal: 0,
      videoTotal: 0,
      diaryList: [],
      pagerCount:5,
      currentPage:1,
      pagesize:4,
    };
  },

  mounted() {
    var that = this;
    axios
        .get(
            "https://www.fastmock.site/mock/75bbdab864ff9aff0f0fcd67ea857dcc/xxdd/learn-diary"
        )
        .then(function (response) {
          console.log(response.data.arrays);
          that.diaryList = response.data.arrays;
          that.diaryTotal = response.data.arrays.length;
        });
  },

  methods: {

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      console.log(this.currentPage);
    },
  },
};
</script>

<style scoped>
@import "../../../css/main/manage/ContentManage.css";
</style>