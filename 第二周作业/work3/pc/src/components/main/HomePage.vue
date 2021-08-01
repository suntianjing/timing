<template>
  <div class="wrapper">
    <div class="cover-msg">
      <h2>封面选择</h2>
      <a-divider></a-divider>

      <div class="upload-image">
        <div class="screenshot">
          <img src="https://img2.baidu.com/it/u=128592677,686077458&fm=11&fmt=auto&gp=0.jpg" alt="">
          <div class="radio">
            <a-radio>视频截图一</a-radio>
          </div>
        </div>
        <div class="screenshot">
          <img src="https://img1.baidu.com/it/u=2791792678,3446362594&fm=26&fmt=auto&gp=0.jpg" alt="">
          <div class="radio">
            <a-radio>视频截图二</a-radio>
          </div>
        </div>
        <div class="screenshot">
          <img src="https://img2.baidu.com/it/u=1009785900,2203992623&fm=26&fmt=auto&gp=0.jpg" alt="">
          <div class="radio">
            <a-radio>视频截图三</a-radio>
          </div>
        </div>
        <div class="upload-my-image">
          <a-upload
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :before-upload="beforeUpload"
              @change="handleChange"
          >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar"
                 width="184px"
                 height="84px"/>
            <div v-else class="no-upload" style="width: 188px;height: 106px">
              <img src="../../assets/img/logo.jpg" alt="" width="30px" height="30px">
              <div class="ant-upload-text">
                点击上传自定义封面
              </div>
            </div>
          </a-upload>
          <div class="radio">
            <a-radio>自定义封面</a-radio>
          </div>
        </div>
      </div>
      <div class="process">
        <a-progress :percent="50" status="active" />
        <a-button class="reload"> <a-icon type="reload" />重新上传视频</a-button>
      </div>
    </div>

    <div class="video-msg">
      <h2>视频信息</h2>
      <a-divider></a-divider>
      <!--表单验证-->
      <div class="video-msg-form">
        <a-form-model
            ref="ruleForm"
            :model="form"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
          <a-form-model-item ref="name" label="视频标题" prop="name">
            <a-input
                placeholder="取个好标题有利于获得更多的推荐,建议15个字左右"
                v-model="form.name"
                @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
            />
          </a-form-model-item>
          <a-form-model-item label="视频类型" prop="type">
            <a-radio-group v-model="form.resource">
              <a-radio value="1">
                原创
              </a-radio>
              <a-radio value="2">
                搬运
              </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item label="分类选择" prop="select">
            <a-cascader :options="options" placeholder="请选择分类" @change="onChange"/>
          </a-form-model-item>


          <!-- 视频标签-->
          <a-form-model-item label="视频标签" prop="flags">
            <div>
              <template v-for="(tag, index) in tags">
                <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                  <a-tag :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
                    {{ `${tag.slice(0, 20)}...` }}
                  </a-tag>
                </a-tooltip>
                <a-tag v-else :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
                  {{ tag }}
                </a-tag>
              </template>
              <a-input
                  v-if="inputVisible"
                  ref="input"
                  type="text"
                  size="small"
                  :style="{ width: '78px' }"
                  :value="inputValue"
                  @change="handleInputChange"
                  @blur="handleInputConfirm"
                  @keyup.enter="handleInputConfirm"
              />
              <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInput">
                <a-icon type="plus" /> 新建标签
              </a-tag>
              <a-input
                  ref="input"
                  type="text"
                  size="small"
                  :style="{ width: '100%' }"
                  :value="inputValue"
                  placeholder="标签可以为演员/来源/视频类型/视频领域,输入内容按回车Enter创建标签"
                  @change="handleInputChange"
                  @blur="handleInputConfirm"
                  @keyup.enter="handleInputConfirm"
              />
            </div>
          </a-form-model-item>

          <a-form-model-item ref="topic" label="参与话题" prop="topic">
            <a-input
                placeholder="#参与话题"
                v-model="form.topic"
                @blur="
          () => {
            $refs.topic.onFieldBlur();
          }
        "
            />
          </a-form-model-item>

          <a-form-model-item :wrapper-col="{ span: 14, offset: 10 }">
            <a-button type="primary" @click="onSubmit">
              发布视频
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  name: 'HomePage',


  data() {
    return {
      labelCol: {span: 4},
      wrapperCol: {span: 16},
      other: '',
      form: {
        name: '',
        type: '',
        select: undefined,
        flag: "",
      },
      list: [],
      rules: {
        name: [
          {required: true, message: '请输入视频标题!', trigger: 'blur'},
          {min: 3, max: 20, message: '标题的长度应该在3到20个字符!', trigger: 'blur'},
        ],
        select: [{required: true, message: '请选择一种类型!', trigger: 'blur'}],
        type: [
          {
            type: 'String',
            required: true,
            message: '请选择一种视频类型',
            trigger: 'change',
          },
        ],
        flags:[
          {
            required:true,
            message:'请至少选择一种标签!',
            trigger:'blur',
          }
        ]
      },

      options: [
        {
          value: 'select1',
          label: '选项一',
          children: [
            {
              value: 'select12',
              label: '日常',

            },
            {
              value: 'select13',
              label: '动物圈',
            },
            {
              value: 'select14',
              label: '搞笑',
            },
            {
              value: 'select15',
              label: '手工',
            },
            {
              value: 'select16',
              label: '美食圈',
            },
          ],
        },
        {
          value: 'select1',
          label: '选项二',
          children: [
            {
              value: 'select12',
              label: '日常',

            },
            {
              value: 'select13',
              label: '动物圈',
            },
            {
              value: 'select14',
              label: '搞笑',
            },
            {
              value: 'select15',
              label: '手工',
            },
            {
              value: 'select16',
              label: '美食圈',
            },
          ],
        },
        {
          value: 'select1',
          label: '选项三',
          children: [
            {
              value: 'select12',
              label: '日常',

            },
            {
              value: 'select13',
              label: '动物圈',
            },
            {
              value: 'select14',
              label: '搞笑',
            },
            {
              value: 'select15',
              label: '手工',
            },
            {
              value: 'select16',
              label: '美食圈',
            },
          ],
        },
        {
          value: 'select1',
          label: '选项四',
          children: [
            {
              value: 'select12',
              label: '日常',

            },
            {
              value: 'select13',
              label: '动物圈',
            },
            {
              value: 'select14',
              label: '搞笑',
            },
            {
              value: 'select15',
              label: '手工',
            },
            {
              value: 'select16',
              label: '美食圈',
            },
          ],
        },
        {
          value: 'select1',
          label: '选项五',
          children: [
            {
              value: 'select12',
              label: '日常',

            },
            {
              value: 'select13',
              label: '动物圈',
            },
            {
              value: 'select14',
              label: '搞笑',
            },
            {
              value: 'select15',
              label: '手工',
            },
            {
              value: 'select16',
              label: '美食圈',
            },
          ],
        },

      ],
      tags: ['标签',
        '这里是八字标题',
        '这里是八字标题',
        '这里是八字标题',
        '这里是八字标题',
        '这里是八字标题',
        '这里是八字标题',
        '这里是八字标题',
        '这里是八字标题',
      ],
      inputVisible: false,
      inputValue: '',
    };
  },

  mounted() {

  },

  methods: {
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    },

    // 表单验证以及提交方法
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    onChange(value) {
      console.log(value);
    },

    // 标签方法
    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      this.tags = tags;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function() {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: '',
      });
    },
  },
};
</script>

<style lang="scss">

.wrapper {
  background-color: #f6f7f9;

  .cover-msg {
    width: 100%;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 15px;

    h2 {
      text-indent: 1em;
    }
  }

  .upload-image {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .screenshot {
      width: 185px;

      img {
        width: 220px;
        height: 140px;
        padding: 8px;
        border-radius: 16px;
      }

      .radio {
        text-align: center;
        margin-top: 7px;
      }
    }

    .upload-my-image {
      width: 185px;

      .no-upload {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .radio {
        text-align: center;

      }
    }
  }


  .video-msg {
    margin-top: 15px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 15px;

    h2 {
      text-indent: 1em;
    }
  }
  .process{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 50px auto;
    .reload{
      margin-left: 60px;
    }
  }
}

</style>