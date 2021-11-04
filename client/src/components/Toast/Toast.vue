<template>
  <div :class="[type,animate]" class="toast_mess">
    <i :class="iconType" class="iconfont"></i>
    <span style="margin-left: 10px;">{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      flag: true,
    };
  },
  computed: {
    iconType() {
      if (this.type === 'success') {
        return 'icon-success';
      } if (this.type === 'error') {
        return 'icon-error';
      } if (this.type === 'info') {
        return 'icon-info';
      } if (this.type === 'warning') {
        return 'icon-warning';
      }
      return 'icon-primary'; // 如果什么状态都不传就是这个
    },
    animate() {
      return this.flag ? 'fade-in' : 'fade-out';
    },
  },
};
</script>

<style scoped>
  @import url('../../assets/blog_font/iconfont.css');
</style>

<style lang="scss" scoped>
  @import '../../assets/css/toast.scss';
</style>
