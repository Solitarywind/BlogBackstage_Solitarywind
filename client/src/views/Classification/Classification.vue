<template>
  <div class="cationbox">
    <div class="catHead">
      <Search
        placeholder="输入分类"
        confirmText="确认"
        @confirmBtn="confirmBtn"
      />
    </div>
    <el-table
      :data="classList"
      border
      style="width: 800px; margin: 0 auto 30px"
    >
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="分类名称" align="center">
        <template slot-scope="scope">
          <span
            v-show="scope.row.isEdit === false"
            @click="scope.row.isEdit = true"
          >
            {{ scope.row.name }}
          </span>
          <el-input
            type="text"
            v-show="scope.row.isEdit === true"
            v-model="scope.row.name"
            @focus="foucusName(scope.row.name)"
            @blur="updataName(scope.row,scope.$index)"
            @keyup.enter="updataName(scope.row,scope.$index)"
          />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="textDel(scope.row)" class="textDel" type="danger"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Search from '../../components/other/Search.vue';

export default {
  components: { Search },
  name: 'Classification',
  computed: {
    ...mapState({
      classList: (state) => state.Article.sortList,
      userId: (state) => state.Login.userinfo.id,
    }),
  },
  data() {
    return {
      className: '',
    };
  },
  mounted() {
    this.hasClass();
  },
  methods: {
    ...mapActions({
      obtainClassifi: 'Article/obtainClassifi',
      addClassifi: 'Article/addClassifi',
      updataClassifi: 'Article/updataClassifi',
      delClassifi: 'Article/delClassifi',
    }),
    hasClass() {
      const { userId } = this;
      this.obtainClassifi(userId);
    },
    async confirmBtn(val) {
      const { classList, userId } = this;
      let tagstatus = true;
      if (val) {
        if (classList.length > 0) {
          classList.forEach((v) => {
            if (v.name === val) {
              tagstatus = false;
              this.$toast({
                msg: '当前分类已存在',
                type: 'error',
              });
            }
          });
        }
        if (tagstatus) {
          const data = {
            userId,
            name: val,
          };
          const status = await this.addClassifi(data);
          if (status) {
            this.$toast({
              msg: '添加成功',
              type: 'success',
            });
            this.hasClass();
          } else {
            this.$toast({
              msg: '添加失败',
              type: 'error',
            });
          }
        }
      } else {
        this.$toast({
          msg: '请填写分类名',
          type: 'info',
        });
      }
    },
    textDel(item) {
      this.$confirm('是否删除此分类', '提示')
        .then(async () => {
          const status = await this.delClassifi(item.id);
          if (status) {
            this.$toast({
              msg: '删除成功',
              type: 'success',
            });
            this.hasClass();
          } else {
            this.$toast({
              msg: '数据删除失败',
              type: 'error',
            });
          }
        })
        .catch(() => {
          this.$toast({
            msg: '已取消该操作',
          });
        });
    },
    foucusName(name) {
      this.className = name;
    },
    async updataName(data, index) {
      const { classList, className } = this;
      if (data.name === className) {
        classList[index].isEdit = false;
        this.$store.commit('Article/getSortList', classList);
      } else {
        const status = await this.updataClassifi({ id: data.id, data });
        if (status) {
          this.hasClass();
        } else {
          this.$toast({
            msg: '更新失败',
            type: 'error',
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cationbox {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
  .catHead {
    text-align: center;
    margin: 10px auto 30px;
  }
}
</style>
