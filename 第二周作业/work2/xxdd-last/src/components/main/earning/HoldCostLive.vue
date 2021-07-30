<template>
  <div class="wrapper">
    <div class="title">
      <span>付费Live</span>
      <span>/</span>
      <span>创建付费Live</span>
    </div>
    <el-divider></el-divider>
    <div class="album-form">
      <el-form :form="albumForm" :rules="albumRules" ref="albumForm" label-width="100px">
        <el-form-item required label="专辑主题" prop="name">
          <el-input v-model="albumForm.name" placeholder="起一个响亮亮的名字吧"></el-input>
        </el-form-item>
        <el-form-item label="专辑简介" required class="prize" prop="brief">
          <el-input v-model="albumForm.brief" type="textarea" rows="6" placeholder="可以介绍你的专辑主题、卖点与作者，用来吸引更多的用户购买你的专辑" style="min-height: 60px"></el-input>
        </el-form-item>
        <el-form-item label="专辑封面" required class="cover">
          <el-upload class="avatar-uploader" action="/api/get/image" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="albumForm.imageUrl" :src="albumForm.imageUrl" class="avatar">
            <i v-else class="el-icon-picture avatar-uploader-icon"></i>
            <p v-if="albumForm.tip" class="tip">请上传图片</p>
          </el-upload>
          <p>建议尺寸374*544，JPG、PNG格式，图片小于10M</p>
        </el-form-item>
        <el-form-item>
          <el-button class="add-btn" @click="addTheme">添加主题</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-divider></el-divider>
    <div class="write-outline" v-for="item,index in outlineList" :key="index">
      <div class="w-title">
        <div class="title-name">编写题纲（{{index+1}}）</div>
        <div class="title-delete" @click="deleteTheme(index)"><i class="el-icon-delete"></i></div>
      </div>
      <el-form class="w-content" label-width="100px">
        <el-form-item :label="'第'+(index+1)+'期主题'">
          <el-input placeholder="起一个响亮亮的名字吧"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-input placeholder="请选择开始时间"></el-input>
        </el-form-item>
        <el-form-item label="课时数">
          <el-input placeholder="请选择课时"></el-input>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
    </div>
    <el-form label-width="100px" :form="priceForm" :rules="priceRules" ref="priceForm" class="priceform">
      <el-form-item label="课时定价" required prop="price">
        <el-input v-model="priceForm.price" placeholder="请输入商品定价"></el-input>
        <span class="unit">T币</span>
      </el-form-item>
      <p><i class="el-alert__icon el-icon-warning"></i>每期Live直播结束后，付费Live的总价格会进行衰减，衰减规则</p>
      <el-form-item>
        <el-button class="create-btn">立即创建</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>

export default {
  name: 'HoldCostLive',
  data(){
    return{
      albumForm:{
        name: '',
        brief: '',
        tip: true,
        imageUrl: ''
      },
      albumRules: {
        name: [
          { required: true, message: '请输入专辑主题！', trigger: 'blur' }
        ],
        brief: [
          { required: true, message: '请输入专辑封面！', trigger: 'blur' }
        ],
      },
      outlineList: [],
      priceForm:{
        price:''
      },
      priceRules:{
        price: [
          { required: true, message: '请输入商品定价！', trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
    handleAvatarSuccess(res, file) {
      this.albumForm.tip = false;
      this.albumForm.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isTrueType = file.type === 'image/jpeg' || file.type === 'image/png';
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isTrueType) {
        this.$message.error('上传头像图片只能是 JPG、PNG 格式!');
      }
      if (!isLt10M) {
        this.$message.error('上传头像图片大小不能超过 10MB!');
      }
      return isTrueType && isLt10M;
    },
    addTheme(){
      this.outlineList.push('{}');
    },
    deleteTheme(index){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.outlineList.splice(index,1);
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
theme-color = #00c896
theme-hover-color = #e6faf5

.album-form
  .cover
    .el-form-item__content
      display block
  .el-textarea__inner:focus
    border-color theme-color
  .el-textarea__inner
    width 400px
  .el-form-item__content
    display flex
    .avatar-uploader .el-upload
      border 1px dashed #d9d9d9
      border-radius 6px
      cursor pointer
      position relative
      overflow hidden
    .avatar-uploader .el-upload:hover
      border-color: theme-color
    .avatar-uploader-icon
      padding-top 28px
      font-size 28px
      color theme-color
      width 178px
      text-align center
    .avatar
      width 178px
      height 178px
      display block
    .tip
      padding-bottom 28px
    p
      color #b1b1b1
      font-size 14px
      line-height 2
      &:nth-child(3)
        width 84px
        color theme-color
        cursor pointer
    .add-btn
      color #fff
      background-color theme-color
      &:hover
        background-color theme-color
        color #fff
      &:focus
        background-color theme-color
        border-color theme-color
        color #fff
.write-outline
  .w-title
    display flex
    justify-content space-between
    margin-bottom 15px
    i
      cursor pointer
      &:hover
        color theme-color
  .w-content
    .el-form-item__content
      display flex
.create-btn
  color #fff
  background-color theme-color
  &:hover
    background-color theme-color
    color #fff
  &:focus
    background-color theme-color
    border-color theme-color
    color #fff
.priceform
  .el-input
    width 200px
  .el-input__inner
    width 200px
  .unit
    margin-left 5px
  p
    margin 10px 0 10px 100px
    color theme-color
    font-size 14px
    i
      color #E6A23C
</style>
