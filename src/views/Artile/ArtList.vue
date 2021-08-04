<template>
  <div class="artCont">
    <div class="artHead">
      <el-date-picker
        v-model="searchData.artDate"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
        clearable
        value-format="yyyy-MM-dd"
      />
      <el-select
        placeholder="请选择分类"
        v-model="searchData.classActive"
        clearable
        style="margin: 0px 20px"
      >
        <el-option
          v-for="item in classification"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        ></el-option>
      </el-select>
      <el-input
        style="width: 280px"
        placeholder="请输入你想输入的"
        v-model="keyword"
      >
        <el-button type="primary" @click.stop="confirmBtn" slot="append"
          >搜索</el-button
        >
      </el-input>
    </div>
    <el-button style="margin: 20px 0px">全部删除</el-button>
    <el-table border :data="artList">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="creatDate" label="发布时间"> </el-table-column>
      <el-table-column prop="authorCode" label="作者代号"> </el-table-column>
      <el-table-column prop="articleTitle" label="文章名称"> </el-table-column>
      <el-table-column prop="articleClass" label="文章分类">
        <template slot-scope="scope">
          <span style="margin-right:5px" v-for="item in scope.row.articleClass" :key="item">{{
            item
          }} </span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            class="textLook"
            type="warning"
            @click="checkout(scope.$index)"
            >查看</el-button
          >
          <el-button
            class="texteEdit"
            type="primary"
            @click.stop="editOut(scope.$index)"
            >编辑</el-button
          >
          <el-button class="textDel" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Popup :popupStatus="popupStatus" @closePopup="closePopup">
      <template #content>
        <Artpopup :artdata="artdata" />
      </template>
    </Popup>
  </div>
</template>

<script>
import Artpopup from '../../components/other/Artpopup.vue';
import Popup from '../../components/other/Popup.vue';

export default {
  name: 'ArtList',
  components: {
    Popup,
    Artpopup,
  },
  data() {
    return {
      popupStatus: false,
      keyword: '', // 关键字
      searchData: {
        artDate: '', // 选择日期
        classActive: '', // 选择分类
      },
      classification: [
        {
          name: '美食',
          id: '1',
        },
        {
          name: '运动',
          id: '2',
        },
        {
          name: '旅游',
          id: '3',
        },
        {
          name: '健身',
          id: '4',
        },
        {
          name: '摄影',
          id: '5',
        },
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      artList: [
        {
          id: 1,
          creatDate: '2021年7月28日11:35:56',
          authorCode: 'solitaryWind',
          articleTitle: '今天为啥没有下雨呢',
          artContent: '<p>why</p> <span>今天没有下雨，热热热热热热</span>',
          articleClass: ['天气', '生活'],
        },
      ],
      artdata: '', // 选中查看的文章
    };
  },
  watch: {
    searchData: {
      handler(val) {
        console.log(val);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    closePopup() {
      this.popupStatus = false;
    },
    confirmBtn() {
      this.searchData.keyword = this.keyword;
    },
    // 查看
    checkout(index) {
      this.popupStatus = true;
      this.artdata = this.artList[index];
    },
    // 编辑
    editOut(index) {
      this.$store.commit('Article/getAtion', this.artList[index]);
      this.$router.push({
        name: 'AddArt',
        meta: {
          name: '编辑文章',
          isLogin: true,
        },
        params: {
          id: 1,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.artCont {
  width: 100%;
  background: #ffffff;
  padding: 20px;
  box-sizing: border-box;
}

.textLook,
.textDel,
.texteEdit {
  padding: 10px;
}
</style>
