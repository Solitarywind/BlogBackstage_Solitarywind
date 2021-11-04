<template>
  <mavon-editor :code_style="codeStyle"
                :ishljs="true" :style="{ height:editHeight,marginBottom:'20px'}" :toolbars="toolbar"
                v-model="editorValue" @change="edchange"
  />
</template>

<script>
import { toolbar } from './index';

export default {
  name: 'Editor',
  props: {
    editVal: {
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
      editorValue: '',
    };
  },
  watch: {
    editVal: {
      handler(val) {
        console.log(val);
        if (val) {
          this.editorValue = val;
        }
      },
      immediate: true,
    },
  },
  methods: {
    edchange(e, value) {
      this.$emit('edchange', value);
    },
  },
};
</script>

<style scoped>

</style>
