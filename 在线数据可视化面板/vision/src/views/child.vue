<template>
  <div>
    <button @click="add">增加</button>
  </div>
</template>

<script>
export default {
  name: 'child',
  props:[
      'title',
  ],

  data() {
    return {};
  },

  mounted() {

  },

  methods: {
    add(){
      this.$emit('add',2);
    }
  },
};
</script>

<style lang="scss" scoped>

</style>