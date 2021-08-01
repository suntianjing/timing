<template>
  <div class="wrapper">
    <div class="aside">
      <a-button type="primary" class="upload">
        <a-icon type="upload" />发布作品
      </a-button>
      <a-menu
          class="menu"
          style="width: 100%"
          :default-selected-keys="['1']"
          mode="inline"
          @click="handleClick"
          @select="handleSelect"
      >
        <a-menu-item key="page1"><a-icon type="home" />首页<router-link to="/index"></router-link></a-menu-item>
        <a-menu-item key="page2"><a-icon type="table" />作品管理<router-link to="/work"></router-link></a-menu-item>
        <a-menu-item key="page3"><a-icon type="bar-chart" />视频数据<router-link to="/video"></router-link></a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsideNav',


  data() {
    return {
    };
  },

  mounted() {

  },

  methods: {
    handleClick(e){
      console.log(e.key);
    },
    handleSelect(e){
      console.log(e.key);
      this.$emit('togglePage', e.key);
    },
  },
};
</script>

<style lang="scss">

.wrapper{
  margin: 0;
  padding: 0;
  .aside{
    position: relative;
    width: 240px;
    height: 900px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 16px;

    .upload{
      display: block;
      margin: 20px auto;
      padding: 0 50px;
      font-weight: inherit;
      border-radius: 9px;
      box-shadow: 0 0 6px 1px rgba(0, 0, 0, .3);
    }
  }
}

</style>