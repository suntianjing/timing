<template>
  <div>
    {{ arr }}

    <button @click="setdata">改变数据</button>
    <div v-for="(value, key, index) in arr" :key="index">
      {{ key }} {{ ":" }} {{ value }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "cHbar",

  // 测试axios
  data() {
    return {
      arr: {},
      data: [1, 2, 3, 4, 5],
      isShow: true,
    };
  },

  mounted() {},

  methods: {
    setdata() {
      var that = this;
      console.log(that.arr);
      axios
        .get(
          "https://www.fastmock.site/mock/c2d703b29ffa155bbb3ea7e2e66655a8/test/hello"
        )
        .then(function (response) {
          console.log(response.data);
          that.arr = response.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>