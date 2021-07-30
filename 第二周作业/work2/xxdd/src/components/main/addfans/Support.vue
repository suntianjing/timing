<template>
  <div class="wrapper">
    <div class="title">
      <span>认证</span>
      <span>/</span>
      <span>个人认证</span>
    </div>
    <el-divider></el-divider>
    <div class="step">
      <p>第一步：上传证件照</p>
      <p>上传清晰的身份证 正 / 反面照 手持证件照</p>
      <div class="form">
        <el-form :model="authForm" :rules="authRules" ref="authForm" label-width="100px">
          <el-form-item label="证件类型" required class="type" prop="type">
            <el-select v-model="authForm.type" placeholder="请选择证件类型">
              <el-option label="居民身份证" value="type1"></el-option>
              <el-option label="学生证" value="type2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件号码" required class="number" prop="number">
            <el-input v-model="authForm.number" placeholder="请输入证件号码"></el-input>
          </el-form-item>
          <el-form-item label="证件照" required class="pic" prop="pic">
            <div class="sample">
              <div class="s-title">示例</div>
              <div class="s-pic">
                <img src="../../../assets/img/idcard-sample.png" alt="">
              </div>
              <div class="s-title">示例</div>
              <div class="s-pic">
                <img src="../../../assets/img/idcard-sample.png" alt="">
              </div>
              <div class="s-title">示例</div>
              <div class="s-pic">
                <img src="../../../assets/img/idcard-sample.png" alt="">
              </div>
            </div>
            <div class="upload">
              <div class="u-title">请上传手持身份证照片</div>
              <div class="u-pic">
                <el-upload class="idcard-uploader" action="/api/get/idcard-image" :show-file-list="false" :on-success="handleAvatarSuccess1" :before-upload="beforeAvatarUpload">
                  <img v-if="authForm.imageUrl1" :src="authForm.imageUrl1" class="id-pic">
                  <i v-else class="el-icon-picture idcard-uploader-icon"></i>
                  <p v-if="authForm.tip1" class="tip">请上传图片</p>
                </el-upload>
              </div>
              <div class="u-title">上传身份证正面</div>
              <div class="u-pic">
                <el-upload class="idcard-uploader" action="/api/get/idcard-image" :show-file-list="false" :on-success="handleAvatarSuccess2" :before-upload="beforeAvatarUpload">
                  <img v-if="authForm.imageUrl2" :src="authForm.imageUrl2" class="id-pic">
                  <i v-else class="el-icon-picture idcard-uploader-icon"></i>
                  <p v-if="authForm.tip2" class="tip">请上传图片</p>
                </el-upload>
              </div>
              <div class="u-title">上传身份证证反面</div>
              <div class="u-pic">
                <el-upload class="idcard-uploader" action="/api/get/idcard-image" :show-file-list="false" :on-success="handleAvatarSuccess3" :before-upload="beforeAvatarUpload">
                  <img v-if="authForm.imageUrl3" :src="authForm.imageUrl3" class="id-pic">
                  <i v-else class="el-icon-picture idcard-uploader-icon"></i>
                  <p v-if="authForm.tip3" class="tip">请上传图片</p>
                </el-upload>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="step">
      <p>第二步：你的学历/成就/奖励（选填）</p>
      <p>上传清晰的身份证 正 / 反面照 手持证件照</p>
      <div class="form two">
        <el-form :model="otherForm" ref="otherForm" label-width="100px">
          <el-form-item label="获奖情况" class="prize">
            <p class="prize-tip">如果有多项成就，请用分号隔开</p>
            <el-input v-model="otherForm.prize" type="textarea" rows="6" placeholder="例：2019国际物理竞赛一等奖" style="min-height: 60px"></el-input>
          </el-form-item>
          <el-form-item label="上传证明" class="upload-certificate">
            <el-upload action="#" list-type="picture-card" :auto-upload="false" ref='upload'>
              <i slot="default" class="el-icon-picture">
                <p>请上传图片</p>
              </i>
              <div slot="file" slot-scope="{file}">
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                <span class="el-upload-list__item-actions">
                      <span v-if="!otherForm.disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                        <i class="el-icon-delete"></i>
                      </span>
                    </span>
              </div>
            </el-upload>
            <p>请上传能证明以上所述的图片，最多选择9张</p>
          </el-form-item>
          <el-divider></el-divider>
          <el-form-item class="submit">
            <div class="warn">为维护安全良好的网络环境，根据《国家网络安全法》的规定,<br>在您进行直播或发布付费内容前需要提供真实的身份信息。</div>
            <el-button class="submit-btn">提交</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Support',
  data(){
    return{
      authForm:{
        type: '',
        tip1: true,
        tip2: true,
        tip3: true,
        imageUrl1: '',
        imageUrl2: '',
        imageUrl3: ''
      },
      authRules: {
        type: [
          { required: true, message: '请选择证件类型！', trigger: 'change' }
        ],
        number: [
          { required: true, message: '请输入证件号码！', trigger: 'blur' }
        ],
        pice: [
          { required: true, message: '请上传证件照！', trigger: 'change' }
        ]
      },
      otherForm: {
        prize: '',
        disabled: false,
        // files: []
      }
    }
  },
  methods:{
    handleAvatarSuccess1(res,file) {
      this.authForm.tip1 = false;
      this.authForm.imageUrl1 = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess2(res,file) {
      this.authForm.tip2 = false;
      this.authForm.imageUrl2 = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess3(res,file) {
      this.authForm.tip3 = false;
      this.authForm.imageUrl3 = URL.createObjectURL(file.raw);
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
    // handleRemove(file, fileList) {
    //   this.$refs.upload.clearFiles()
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../../css/main/addfans/Support.css";
</style>
