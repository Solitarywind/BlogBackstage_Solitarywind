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
            @blur="scope.row.isEdit = false"
            @keyup.enter="scope.row.isEdit = false"
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
import Search from '../../components/other/Search.vue';

export default {
  components: { Search },
  name: 'Classification',
  data() {
    return {
      classList: [
        {
          name: '生活',
          id: 1,
          isEdit: false,
        },
      ],
    };
  },
  methods: {
    confirmBtn(val) {
      const { classList } = this;
      let tagstatus = true;
      classList.forEach((v) => {
        if (v.name === val) {
          tagstatus = false;
          this.$toast({
            msg: '当前分类已存在',
            type: 'error',
          });
        }
      });
      if (tagstatus) {
        this.classList.push({
          id: Math.floor(Math.random() * 10000),
          isEdit: false,
          name: val,
        });
        this.$toast({
          msg: '添加成功',
          type: 'success',
        });
      }
    },
    textDel(item) {
      this.$confirm('是否删除此分类', '提示')
        .then(() => {
          this.classList.splice(this.classList.indexOf(item), 1);
          this.$toast({
            msg: '删除成功',
            type: 'success',
          });
        })
        .catch(() => {
          this.$toast({
            msg: '已取消该操作',
          });
        });
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
