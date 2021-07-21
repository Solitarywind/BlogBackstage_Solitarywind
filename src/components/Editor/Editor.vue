<template>
  <mavon-editor :code_style="codeStyle"
                :ishljs="true" :style="{ height:editHeight,marginBottom:'20px'}" :toolbars="toolbar"
                :value="edvalue" @change="edchange"
  />
</template>

<script>
import { toolbar } from './index';

export default {
  name: 'Editor',
  props: {
    edvalue: {
      default: '',
    },
    editHeight: {
      type: String,
    },
  },
  data() {
    return {
      toolbar,
      codeStyle: 'solarized-dark',
    };
  },
  methods: {
    edchange(e, value) {
      // console.log(e, value);
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>

</style>
