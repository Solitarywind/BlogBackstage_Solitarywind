<template>
  <el-date-picker
    v-model="value"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :picker-options="pickerOptions"
    clearable
    value-format="yyyy-MM-dd"
    @change="selectTime"
  />
</template>

<script>
export default {
  name: 'SelectDate',

  data() {
    return {
      value: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    };
  },
  methods: {
    selectTime(value) {
      this.$emit('input', value);
    },
  },
};
</script>
