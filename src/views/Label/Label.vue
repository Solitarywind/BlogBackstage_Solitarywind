<template>
  <div class="labelBox">
    <div class="labeList">
      <el-tag
        v-for="tag in tagList"
        :key="tag.label"
        closable
        class="checklabel"
        @close="handleClose(tag)"
      >
        {{ tag.label }}
      </el-tag>
    </div>
    <div class="searchBox">
      <Search
        confirmText="确认"
        placeholder="输入标签"
        @confirmBtn="confirmBtn"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Search from '../../components/other/Search.vue';

export default {
  name: 'Label',
  components: {
    Search,
  },
  computed: {
    ...mapState({
      tagList: (state) => state.Note.labeList,
    }),
  },
  methods: {
    // 删除标签
    handleClose(tagItem) {
      this.$store.dispatch('Note/deleteLabel', tagItem);
      this.$toast({
        msg: '删除成功',
        type: 'success',
      });
    },
    // 添加标签
    confirmBtn(val) {
      const { tagList } = this;
      let tagstatus = true;
      tagList.forEach((v) => {
        if (v.label === val) {
          tagstatus = false;
          this.$toast({
            msg: '当前标签已存在',
            type: 'error',
          });
        }
      });
      if (tagstatus) {
        this.$store.dispatch('Note/addLabel', {
          label: val,
          effect: false,
        });
        this.$toast({
          msg: '添加成功',
          type: 'success',
        });
      }
    },
  },
};
</script>

<style lang="scss">
.labelBox {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
  .labeList {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    box-sizing: border-box;
    background-color: rgba($color: #cdcddb, $alpha: 0.15);
    .checklabel {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .searchBox {
    margin: 30px auto;
    text-align: center;
  }
}
</style>
