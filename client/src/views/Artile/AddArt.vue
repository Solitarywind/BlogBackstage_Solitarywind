<template>
  <div class="addArticle">
    <el-form :model="article" label-width="80px" ref="form">
      <el-form-item label="文章标题">
        <el-input
          clearable
          placeholder="请输入标题"
          style="width: 300px"
          v-model="article.articleTitle"
        ></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input
          clearable
          placeholder="请输入作者"
          style="width: 300px"
          v-model="article.authorCode"
        ></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <div class="checkout">
          <el-checkbox-group v-model="article.articleClass">
            <el-checkbox
              v-for="item in classList"
              :key="item"
              :label="item"
              border
            ></el-checkbox>
          </el-checkbox-group>
        </div>
      </el-form-item>
      <el-form-item label="封面图片">
        <el-upload action="/api/upload" :show-file-list="false"  :on-success="getCover">
          <img class="coverImg" v-if="article.coverPic" :src="article.coverPic" alt="">
          <i  class="el-icon-plus coverImg"></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <Editor
      editHeight="650px"
      @edchange="edchange"
       :editVal="artContent"
    />
    <el-row justify="end" type="flex">
      <el-button @click="submitArticle" class="subBtn" type="primary"
        >发布</el-button
      >
    </el-row>
  </div>
</template>

<script>
import Editor from '../../components/Editor/Editor.vue';

export default {
  name: 'AddArt',
  components: { Editor },
  data() {
    return {
      artContent: '',
      article: {
        articleTitle: '',
        authorCode: '',
        articleClass: [],
        top: false,
        artContent: '',
        coverPic: '',
      },
      classList: ['美食', '旅行', '游戏', '天气', '生活'],
      restaurants: [],
    };
  },
  created() {
    if (Object.keys(this.$route.params).length > 0) {
      this.$route.meta.name = '编辑文章';
      const article = this.$store.state.Article.artItem;
      this.artContent = article.artContent;
      this.article = article;
    } else {
      this.$store.commit('Article/getAtion', '');
    }
  },
  methods: {
    handleSelect(item) {
      this.article.tag = item.value;
      // console.log(item);
    },
    edchange(val) {
      this.article.artContent = val;
    },
    submitArticle() {
      console.log(this.article);
    },
    // 获取封面
    getCover(res) {
      if (res.code === 0) {
        this.article.coverPic = res.data.url;
      }
    },
  },
};
</script>
<style lang="scss">
.addArticle {
  width: 1200px;
  margin: 30px auto;
  .subBtn {
    width: 100px;
    margin: 0 auto;
    padding: 0px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 50px;
  }
}
.checkout {
  background: #fff;
  padding: 10px;
}

.coverImg{
  width: 180px;
  height: 180px;
  line-height: 180px;
  font-size: 60px;
  border: 1px dashed #909399;
}
</style>
