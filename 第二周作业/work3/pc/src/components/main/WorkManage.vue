<template>
  <div class="wrapper">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="全部">
        <ul class="video-list">
          <li class="video-list-item" v-for="item,index in videoLists.slice((current-1)*pagesize,current*pagesize)" :key="index">
            <div class="info">
              <div :class="item.type==='搬运' ? 'type1' : 'type2'">{{ item.type }}</div>
              <img :src="item.imgUrl" alt="">
              <div class="text">
                <h2>{{ item.title }}</h2>
                <p>话题:  <span class="topic">{{ item.topic }}</span></p>
                <p>标签:  <span class="tips">{{ item.tips }}</span></p>
              </div>
            </div>
            <div class="dosth">
              <p v-show="item.is" style="color: #e56c6b">审核中</p>
              <a-button class="del-btn"><a-icon type="delete" />删除</a-button>
            </div>
          </li>
        </ul>
        <!--分页-->
        <a-pagination
            v-model="current"
            :total="videoTotal"
            :defaultPageSize="pagesize"
            show-less-items
            @change="handleCurrentChange"
            class="pagination"
        />

      </a-tab-pane>

      <a-tab-pane key="2" tab="审核异常结果" force-render>
        Content of Tab Pane 2
      </a-tab-pane>

    </a-tabs>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WorkManage',


  data() {
    return {
      videoLists: [],
      resLists:[],
      videoTotal: 0,
      current: 1,
      pagesize:8,
    };
  },

  mounted() {
    var that = this;
    axios
        .get(
            "https://www.fastmock.site/mock/f43393f4c388ee3b26a1f7249b1232eb/timing/videoLists"
        )
        .then(function (response) {
          console.log(response.data.arrays);
          that.videoLists = response.data.arrays;
          that.videoTotal = response.data.arrays.length;
        });
  },

  methods: {
    callback(key) {
      console.log(key);
    },
    handleCurrentChange(page, pageSize){
      console.log(page);
      console.log(pageSize);
      this.resLists = this.videoLists.slice((this.current-1)*this.pagesize,this.current*this.pagesize);
    }
  },
};
</script>

<style lang="scss" scoped>

.wrapper{
  background-color: #fff;
}

.video-list {
  list-style: none;

  .video-list-item {
    width: 100%;
    margin: 0 0 20px 0;
    height: 180px;
    //background-color: #fafafa;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      .type1{
        position: absolute;
        top: 0;
        left: 0;
        padding: 4px 14px;
        color: #fff;
        background: linear-gradient(to bottom, #DA22FF, #9733EE);
        border-radius: 0 0 24px 0;
      }

      .type2{
        position: absolute;
        top: 0;
        left: 0;
        padding: 4px 14px;
        color: #fff;
        background: linear-gradient(to bottom, #72C6EF, #004E8F);
        border-radius: 0 0 24px 0;
      }

      img {
        width: 240px;
        height: 140px;
        margin-right: 30px;
      }
      .text{
        h2{
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .topic{
          padding: 2px 6px;
          background-color: #e7f8ff;
          color: #85b5ec;
          border: 1px solid #c5e6f6;
          border-radius: 7px;
          margin-left: 6px;
        }
        .tips{
          padding: 2px 6px;
          border-radius: 7px;
          margin-left: 6px;
          background-color: #f6f6f6;
          color: #6b6b6b;
          border: 1px solid #dddddd;
        }
      }
    }

    .dosth {
      width: 120px;
      height: 100%;
      position: relative;

      p {
        position: absolute;
        right: 20px;
        top: 20px;
      }

      .del-btn {
        position: absolute;
        right: 10px;
        bottom: 24px;
      }
    }
  }
}

.pagination{
  float: right;
}

</style>