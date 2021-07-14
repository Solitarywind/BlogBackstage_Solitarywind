<template>
  <el-container style="height: 100%">
    <BlogLeft />
    <el-container>
      <BlogRightHead />
      <el-main>
         <router-view/>
      </el-main>
    </el-container>
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
};
</script>
