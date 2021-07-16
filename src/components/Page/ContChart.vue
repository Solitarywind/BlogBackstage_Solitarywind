<template>
     <div class="hascont">
       <div class="head">
         <el-radio-group v-model="dateStatus">
           <el-radio-button label="0">今天</el-radio-button>
           <el-radio-button label="1">本周</el-radio-button>
           <el-radio-button label="2">这月</el-radio-button>
           <el-radio-button label="3">本年</el-radio-button>
         </el-radio-group>
       </div>
       <div id="Pagechart" ></div>
     </div>
</template>

<script>
// import echart from 'echarts'
import { hasChart } from '../../util/EchartList';

export default {
  name: 'ContChart',
  data() {
    return {
      dateStatus: 0,
      chartId: 0,
    };
  },
  watch: {
    chartId: {
      handler(val) {
        hasChart(val);
        console.log(val);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.hascont{
  .head{
    text-align: right;
  }
}
</style>
