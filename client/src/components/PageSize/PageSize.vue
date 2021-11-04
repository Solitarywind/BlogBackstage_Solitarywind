<template>
   <div class="block">
     <el-pagination
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
       :current-page="currentPage"
       :page-sizes="[10, 20, 30, 40]"
       :page-size="eachPage"
       layout="total, sizes, prev, pager, next, jumper"
       :total="pageTotal">
     </el-pagination>
<!--     :hide-on-single-page="true"-->
   </div>
</template>

<script>
export default {
  name: 'PageSize',
  props: {
    currentPage: {
      type: Number,
    },
    pageTotal: {
      type: Number,
    },
    eachPage: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val);
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val);
    },
  },
};
</script>

<style lang="scss" scoped>
.block{
  margin-top: 20px;
  text-align: right;
}
</style>
