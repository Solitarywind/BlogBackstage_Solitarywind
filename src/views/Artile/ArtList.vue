<template>
    <div class="artCont">
        <div class="artHead">
          <el-date-picker
            v-model="artDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          />
        </div>
    </div>
</template>

<script>
export default {
  name: 'ArtList',
  data() {
    return {
      artDate: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    };
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
