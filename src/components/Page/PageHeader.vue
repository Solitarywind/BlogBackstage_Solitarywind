<template>
    <div class="pageheader">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>访问数量</span>
        </div>
        <CountTo class="number" :startVal='0' :endVal='data.VisitsNum' :duration='3000'  />
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>文章发布数量</span>
        </div>
        <CountTo class="number" :startVal='0' :endVal='data.PubArtileNum' :duration='3000'  />
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>笔记发布数量</span>
        </div>
        <CountTo class="number" :startVal='0' :endVal='data.PubNoteNum' :duration='3000'  />
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>文章点赞总量</span>
        </div>
        <CountTo class="number" :startVal='0' :endVal='data.LikeArtile' :duration='3000'  />
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>笔记点赞总量</span>
        </div>
        <CountTo class="number" :startVal='0' :endVal='data.LikeNotes' :duration='3000'  />
      </el-card>
    </div>
</template>

<script>
import CountTo from 'vue-count-to';

export default {
  name: 'PageHeader',
  props: ['data'],
  components: {
    CountTo,
  },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/css/var.scss";
.pageheader{
    width: 100%;
    display:flex;
  justify-content: space-between;
  .box-card{
    width: calc((100% - 100px) / 5);
    height: 150px;
    .clearfix{
       font-size: 20px;
    }
    .number{
      font-size: 26px;
      color:$themeWord
    }
  }
}
</style>
