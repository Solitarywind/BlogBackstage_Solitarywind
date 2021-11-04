<template>
     <el-dialog :visible.sync="popupStatus" width="800px" :before-close="closePopup">
         <slot name="content" />
     </el-dialog>
</template>

<script>
export default {
  name: 'Popup',
  props: ['popupStatus'],
  methods: {
    closePopup() {
      // console.log(323);
      this.$emit('closePopup');
    },
  },
};
</script>

<style lang='css' scoped>
 /deep/ .el-dialog__header{
    padding-top: 0px;
}
</style>
