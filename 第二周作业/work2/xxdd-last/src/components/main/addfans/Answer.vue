<template>
  <div class="wrapper ans-wrapper">
    <div class="title">
      <span>答疑</span>
      <span>/</span>
      <span>填写答疑的基本信息</span>
    </div>
    <el-divider></el-divider>
    <div class="form">
      <el-form :model="answerForm" :rules="answerRules" ref="answerForm" label-width="100px">
        <el-form-item label="答疑主题" required class="answerTheme" prop="theme">
          <el-input v-model="answerForm.theme" placeholder="起个吸引人的主题，更能激发用户向你进行提问"></el-input>
        </el-form-item>
        <el-form-item label="结束时间" required class="endTime" prop="time">
          <el-time-select v-model="answerForm.time" :picker-options="answerForm.timepicker" placeholder="选择时间"></el-time-select>
        </el-form-item>
        <el-form-item label="自习室封面" required class="cover" prop="cover">
          <el-upload class="avatar-uploader" action="/api/get/image" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="answerForm.imageUrl" :src="answerForm.imageUrl" class="avatar">
            <i v-else class="el-icon-picture avatar-uploader-icon"></i>
            <p v-if="answerForm.tip" class="tip">请上传图片</p>
          </el-upload>
          <p>建议尺寸374*544，JPG、PNG格式，图片小于10M</p>
          <p>《示例图片》</p>
        </el-form-item>
        <el-form-item label="曝光标签" required class="showTag" prop="tag">
          <el-select v-model="answerForm.tag" placeholder="本次答疑主要曝光给那个学习标签的用户">
            <el-option label="标签一" value="tag1"></el-option>
            <el-option label="标签二" value="tag2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="pact">
          <el-checkbox @change="agreePact">开始答疑即代表同意并支持</el-checkbox>
          <span class="pact-text">《猩猩点灯文明公约》</span>
        </el-form-item>
        <el-form-item class="start">
          <el-button :disabled="answerForm.isDisabled">开始答疑</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Answer',
  data() {
    return {
      answerForm: {
        theme: '',
        time: '',
        timepicker: {
          start: '09:00',
          step: '00:30',
          end: '20:30'
        },
        imageUrl: '',
        tag: '',
        tip: true,
        isDisabled: true,
      },
      answerRules: {
        theme: [
          { required: true, message: '请输入答疑主题！', trigger: 'blur' }
        ],
        time: [
          { required: true, message: '请指定结束时间！', trigger: 'blur' }
        ],
        cover: [
          { required: true, message: '请上传自习室封面！', trigger: 'blur' }
        ],
        tag: [
          { required: true, message: '请选择学习标签！', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.answerForm.tip = false;
      this.answerForm.imageUrl = URL.createObjectURL(file.raw);
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
    agreePact(){
      this.answerForm.isDisabled = !this.answerForm.isDisabled;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
theme-color = #00c896
theme-hover-color = #e6faf5

.ans-wrapper
  font-size 14px
  .title
    span:nth-child(1)
      color #9d9d9d
    span:nth-child(2)
      margin 0 10px
  .el-divider
    margin-top 12px
  .form
    .el-form-item
      display flex
    .el-form-item__label
      text-align left
    .el-form-item__content
      margin-left 0 !important
    .answerTheme
      .el-input
        width 400px
        .el-input__inner:focus
          border-color theme-color
    .endTime
      .el-input
        width 200px
        .el-input__inner:focus
          border-color theme-color
    .showTag
      .el-input
        width 400px
        .el-input__inner:focus
          border-color theme-color
    .start,.pact
      margin-left 100px
    .pact
      .pact-text
        cursor pointer
        color theme-color
      .el-checkbox__input.is-checked+.el-checkbox__label
        color theme-color
      .el-checkbox__input.is-checked .el-checkbox__inner
        color theme-color
        border-color theme-color
        background theme-color
      .el-checkbox__input.is-focus .el-checkbox__inner
        border-color theme-color
      .el-checkbox__inner:hover
        border-color theme-color
    .start
      .el-button
        width 170px
        &:hover,
        &:focus
          background-color theme-hover-color
          color theme-color
          border-color theme-color
    .cover
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
.el-select-dropdown__item.selected
  color theme-color
.el-select .el-input.is-focus .el-input__inner
  border-color theme-color
</style>
