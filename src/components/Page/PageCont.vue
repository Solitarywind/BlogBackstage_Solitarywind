<template>
  <div class="pagecont">
        <el-tabs class="tabchart" v-model="active" @tab-click="handleClick($event.index)">
           <el-tab-pane v-for="item in contList" :key="item.id"
                        :label="item.label" :name="item.name">
              <ContChart :ref="`chart${item.id}`"/>
           </el-tab-pane>
        </el-tabs>
  </div>
</template>

<script>
import ContChart from './ContChart.vue';

export default {
  name: 'PageCont',
  components: { ContChart },
  data() {
    return {
      active: 'visits',
      chartId: 0,
      contList: [
        {
          label: '访问量',
          name: 'visits',
          id: 0,
        },
        {
          label: '文章发布量',
          name: 'article',
          id: 1,
        },
        {
          label: '笔记发布量',
          name: 'notes',
          id: 2,
        },
      ],
    };
  },
  methods: {
    handleClick(index) {
      this.$refs[`chart${index}`][0].chartId = index;
      // console.log(e.index);
      // this.$refs[`Refdeman${dempIndex}`][0]
    },
  },
};
</script>

<style lang="scss" scoped>
  .pagecont {
     margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    .tabchart{
      width: 980px;
      background: #ffff;
      padding: 20px;
      box-sizing: border-box;
      margin-right: 20px;
    }
  }
</style>
