<template>
      <el-input
        style="width: 280px"
        :placeholder="placeholder"
        v-model="keyword"
      >
        <el-button type="primary" @click.stop="confirmBtn" slot="append"
          >{{confirmText}}</el-button
        >
      </el-input>
</template>

<script>
export default {
  name: 'Search',
  props: {
    placeholder: {
      default: '输入你想输入的',
    },
    confirmText: {
      default: '搜索',
    },
  },
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    confirmBtn() {
      this.$emit('confirmBtn', this.keyword);
      this.keyword = '';
    },
  },
};
</script>
