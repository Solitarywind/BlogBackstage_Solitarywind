<template>
  <div class="cont">
    <div class="arthead">
      <h2>{{artdata.articleTitle}}</h2>
      <el-row type="flex" justify="center">
        <el-col  class="artspan">笔名：{{artdata.authorCode}}</el-col>
        <el-col  class="artspan"
          >分类：
              <span v-for="item in artdata.articleClass" :key="item"># {{item}}</span>
          </el-col>
        <el-col  class="artspan">时间: {{artdata.creatDate}} </el-col>
      </el-row>
    </div>
    <div v-html="artdata.artContent"></div>
  </div>
</template>

<script>
export default {
  name: 'Artpopup',
  props: {
    artdata: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.cont {
  .arthead {
    h2 {
      text-align: center;
      margin-top: 0px;
    }
    .artspan {
      text-align: center;
      font-size: 13px;
      color:var(--fontColor);
      span{
        margin-right: 5px;
      }
    }
    padding-bottom: 20px;
    border-bottom: 1px solid #f1f2f2;
    margin-bottom: 20px;
  }
}
</style>
