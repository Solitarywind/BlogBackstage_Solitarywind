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
        <el-form-item label="笔名">
        <el-input
          clearable
          placeholder="请输入笔名"
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
    </el-form>
    <Editor edit-height="700px" v-model="article.artContent" />
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
      article: {
        articleTitle: '',
        authorCode: '',
        articleClass: [],
        top: false,
        artContent: '',
      },
      classList: ['美食', '旅行', '游戏', '天气', '生活'],
      restaurants: [],
    };
  },
  created() {
    if (Object.keys(this.$route.params).length > 0) {
      this.$route.meta.name = '编辑文章';
      this.article = this.$store.state.Article.artItem;
      console.log(this.article.artContent);
    } else {
      this.$store.commit('Article/getAtion', '');
    }
  },
  methods: {
    handleSelect(item) {
      this.article.tag = item.value;
      // console.log(item);
    },

    submitArticle() {
      console.log(this.article);
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
  }
}
.checkout{
  background: #fff;
  padding:10px;
}
</style>
