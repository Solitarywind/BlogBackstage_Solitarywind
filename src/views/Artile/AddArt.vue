<template>
  <div class="addArticle">
    <el-form :model="article" label-width="80px" ref="form">
      <el-form-item label="文章标题">
        <el-input clearable  placeholder="请输入标题"
                  style="width:300px" v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-autocomplete
          :fetch-suggestions="querySearch"
          @select="handleSelect"
          clearable
          placeholder="请输入分类"
          v-model="article.tag">
        </el-autocomplete>
      </el-form-item>
    </el-form>
    <Editor edit-height="700px" v-model="article.content"/>
    <el-row justify="end" type="flex">
      <el-button @click="submitArticle"
                 class="subBtn" type="primary">发布</el-button>
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
        title: '',
        tag: '',
        top: false,
        content: '输入内容',
      },
      restaurants: [],
    };
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    handleSelect(item) {
      this.article.tag = item.value;
      // console.log(item);
    },
    querySearch(queryString, cb) {
      const { restaurants } = this;
      const results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      cb(results);
    },
    loadAll() {
      return [
        {
          value: '美食',
        },
        {
          value: '旅行',
        },
        {
          value: '游戏',
        },
      ];
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
</style>
