<template>
  <el-card class="box-card contCard">
    <div class="clearfix" slot="header">
      <span :class="{hotactive:hotstatus == 0}" @click="gethot(0)" class="hotArt"> 热门文章 </span> |
      <span :class="{hotactive:hotstatus == 1}" @click="gethot(1)" class="hotNote"> 热门笔记 </span>
    </div>
    <div :key="o" class="text item" v-for="o in 10">
      <span class="itemNum">{{o}}</span>
      <el-link class="itemTitle">这个标题是非常非常非常非常这个标题是非常非常非常非常这个标题是非常非常非常非常</el-link>
      <span class="hotNum">
          <i class="icon-hot iconfont"/>
          <span>{{ Math.floor( 11222 / o - o ) }}</span>
        </span>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'ContCard',
  data() {
    return {
      hotstatus: 0, // 0 热门文章 1 热门笔记
    };
  },
  methods: {
    gethot(hotstatus) {
      this.hotstatus = hotstatus;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/css/page.scss";
</style>
