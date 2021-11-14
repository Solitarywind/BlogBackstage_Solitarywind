<template>
  <div class="labelBox">
    <div class="labeList">
      <el-tag
        v-for="tag in tagList"
        :key="tag.name"
        closable
        class="checklabel"
        @close="handleClose(tag)"
      >
        {{ tag.name }}
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
import { mapState, mapActions } from 'vuex';
import Search from '../../components/other/Search.vue';

export default {
  name: 'Label',
  components: {
    Search,
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.Login.userinfo,
      tagList: (state) => state.Note.labeList,
    }),
  },
  mounted() {
    this.hasLabel();
  },
  methods: {
    ...mapActions({
      newLabel: 'Note/newLabel',
      getLabel: 'Note/label',
      deleteLabel: 'Note/deleteLabel',
    }),
    async hasLabel() {
      const { userInfo } = this;
      await this.getLabel(userInfo.id);
    },
    // 删除标签
    async handleClose(tagItem) {
      await this.deleteLabel(tagItem.id);
      this.$toast({
        msg: '删除成功',
        type: 'success',
      });
      this.hasLabel();
    },
    // 添加标签
    async confirmBtn(val) {
      const { tagList, userInfo } = this;
      let tagstatus = true;
      if (val) {
        if (tagList.length > 0) {
          tagList.forEach((v) => {
            if (v.name === val) {
              tagstatus = false;
              this.$toast({
                msg: '当前标签已存在',
                type: 'error',
              });
            }
          });
        }

        if (tagstatus) {
          const data = {
            userId: userInfo.id,
            name: val,
          };
          console.log(data);
          const status = await this.newLabel(data);
          if (status) {
            this.$toast({
              msg: '添加成功',
              type: 'success',
            });
            this.hasLabel();
          } else {
            this.$toast({
              msg: '添加失败',
              type: 'error',
            });
          }
        }
      } else {
        this.$toast({
          msg: '请填写标签名',
          type: 'info',
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
