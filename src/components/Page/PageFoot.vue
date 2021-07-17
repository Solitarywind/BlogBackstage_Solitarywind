<template>
    <div class="pageFoot">
        <div class="footCont">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PageFoot',
  data() {
    return {
      artlist: [
        {
          name: '拖拽竟然还能这样玩拖拽竟然还能这样玩拖拽竟然还能这样玩',
          id: 1,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/page.scss";
</style>
