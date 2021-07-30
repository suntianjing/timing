<template>
  <div class="wrapper cm-wrapper" style="position:relative;">
    <!--学习日记-->
    <el-button type="success" class="new-diary">新建学习日记</el-button>
    <el-tabs v-model="activeName" class="tabs">
      <el-tab-pane :label="'学习日记' + diaryTotal" name="first">
        <div class="title">
          <span class="title-main">在Timing中，用户会用“学习日记”来记录学习历程、分享学习经验，“学习日记”有 文字+图片 和 文字+视频 两种样式。一篇好的“学习日记”，能够获得大量的曝光，吸引更多人的关注。</span>
          <span class="title-more">了解更多>> </span>
        </div>
        <div class="diary-list">
          <div class="list-item" v-for="item,index in diaryList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
               :key="index">

            <div class="user">
              <div class="avatar">
                <img :src="item.avatar" alt="">
              </div>
              <div class="user-info">
                <div class="name">{{ item.name }}</div>
                <div class="time">{{ item.time }}</div>
              </div>
            </div>
            <div class="content">
              <div class="brief">{{ item.brief }}</div>
              <div class="pic">
                <img :src="item1" alt="" v-for="item1,index1 in item.pic" :key="index1">
              </div>
            </div>
            <div class="act">
              <div class="like"><i class="el-icon-thumb"></i><span>{{ item.likeNum }}</span></div>
              <div class="comment"><i class="el-icon-chat-round"></i><span>{{ item.commentNum }}</span></div>
              <div class="share"><i class="el-icon-share"></i><span>{{ item.shareNum }}</span></div>
            </div>
            <div class="delete" @click="deleteEvent(item,id)"><i class="el-icon-delete"></i></div>
            <el-divider></el-divider>
          </div>
        </div>
        <!-- 分页器 -->
        <el-pagination
            background
            @current-change="handleCurrentChange"
            :page-size="pagesize"
            layout="prev, pager, next"
            :total="diaryTotal">
        </el-pagination>

      </el-tab-pane>


      <!--长视频管理-->
      <el-tab-pane :label="'长视频' + videoTotal" name="second">
        暂时没有长视频
      </el-tab-pane>
    </el-tabs>

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
      pagerCount: 5,
      currentPage: 1,
      pagesize: 4,
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

<style lang="scss" scoped>

.new-diary{
  position: absolute;
  top: 0;
  right: 10px;
  background-color: #00c896;
  color: #f7f9fa;
}
.tabs {
  .title {
    margin-bottom: 15px;

    .title-main {
      color: #4b4b4b;
    }

    .title-more {
      color: #00c896;
    }
  }

  .diary-list {
    .list-item {
      position: relative;


      .user{
        display: flex;
        .avatar{
          width: 40px;
          height: 40px;
          margin-right: 12px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .user-info{
          .name{

          }
          .time{
            font-size: 14px;
            color: gray;
          }
        }
      }
      .content{
        .brief{
          margin: 15px auto;
        }
        .pic{
          display: flex;
          align-items: center;
          img{
            width: 150px;
            height: 150px;
            margin-right: 20px;
          }
        }
      }
      .act{
        display: flex;
        width: 200px;
        margin-top: 10px;
        justify-content: space-around;
        align-items: center;
        span{
          margin-left: 5px;
          font-size: 15px;
        }
      }
      //删除按钮
      .delete{
        position: absolute;
        right: 10px;
        top: 0;
      }
    }
  }
}
</style>