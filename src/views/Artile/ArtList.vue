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
           <el-select placeholder="请选择分类" v-model="searchData.classActive"
                      clearable style="margin:0px 20px">
               <el-option v-for="item in classification" :key="item.id"
                          :label="item.name" :value="item.id"></el-option>
           </el-select>
          <el-input style="width: 280px;" placeholder="请输入你想输入的" v-model="keyword">
             <el-button type="primary" @click.stop="confirmBtn" slot="append">搜索</el-button>
          </el-input>
        </div>
        <el-table style="margin-top:30px" border :data="artList">
          <el-table-column
            type="selection"
            width="55" />
          <el-table-column
            prop="creatDate"
            label="发布时间">
          </el-table-column>
          <el-table-column
            prop="authorCode"
            label="作者代号">
          </el-table-column>
          <el-table-column
            prop="articleTitle"
            label="文章名称">
          </el-table-column>
          <el-table-column
            prop="articleClass"
            label="文章分类">
            <template slot-scope="scope">
                <span v-for="item in scope.row.articleClass" :key="item">{{item}}</span>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template>
              <el-button type="text">查看</el-button>
              <el-button type="text">编辑</el-button>
              <el-button type="text">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: 'ArtList',
  data() {
    return {
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
    confirmBtn() {
      this.searchData.keyword = this.keyword;
    },
  },
};
</script>

<style lang="scss" scoped>
 .artCont{
    width: 100%;
   background: #ffffff;
   padding: 20px;
   box-sizing: border-box;
   .artHead{

   }
 }

</style>
