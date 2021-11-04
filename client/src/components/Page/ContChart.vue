<template>
  <div class="hascont">
    <div class="head">
      <el-radio-group @change="changeGroup" v-model="dateStatus">
        <el-radio-button label="0">今天</el-radio-button>
        <el-radio-button label="1">本周</el-radio-button>
        <el-radio-button label="2">这月</el-radio-button>
        <el-radio-button label="3">本年</el-radio-button>
      </el-radio-group>
    </div>
    <div style="height:500px " ref="Pagechart"></div>
  </div>
</template>

<script>
// import echart from 'echarts';
import { hasChart } from '../../util/EchartList';

export default {
  name: 'ContChart',
  data() {
    return {
      dateStatus: 0,
      chartId: 0,
    };
  },
  methods: {
    changChartId(id) {
      this.chartId = id;
      this.changeGroup();
    },
    changeGroup() {
      const { chartId, dateStatus } = this;
      const option = hasChart(chartId, dateStatus);
      const { Pagechart } = this.$refs;
      this.$nextTick(() => {
        this.$echarts.init(Pagechart).setOption(option);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .hascont {
    .head {
      text-align: right;
    }
  }
</style>
