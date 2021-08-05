<template>
  <el-container style="height: 100%;width: 100%">
    <BlogLeft/>
    <div class="contright">
      <BlogRightHead/>
      <el-main class="contmain">
        <router-view  />
      </el-main>
    </div>
  </el-container>

</template>

<script>

import BlogLeft from '../components/Layout/Blog_left.vue'; // 主页左边
import BlogRightHead from '../components/Layout/Blog_right.vue'; // 主页右边头部

export default {
  name: 'Home',
  components: {
    BlogLeft,
    BlogRightHead,
  },
  destroyed() {
    this.$store.dispatch('Login/login', '');
  },
};
</script>

<style scoped>
  .contright {
    width: calc(100% - 200px);
  }

  .contmain {
    background: #e6effb;
    height: 100%;
  }
</style>
