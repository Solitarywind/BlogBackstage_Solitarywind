<template>
  <div class="commbox">
    <select-date @input="changeDate" />
    <el-table style="margin-top: 30px" border :data="commList">
      <el-table-column label="序号" align="center" width="50" >
        <template slot-scope="scope">
             {{ scope.$index + (currentPage - 1) * eachPage + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="头像" align="center">
        <template slot-scope="scope">
          <el-avatar shape="square" size="small" :src="scope.row.avatar"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column label="昵称" prop="nickName" align="center"></el-table-column>
      <el-table-column label="评论文章" prop="title" align="center"></el-table-column>
      <el-table-column label="评论内容"  align="center">
        <template slot-scope="scope">
           <div class="content" :title="scope.row.content">
             {{ scope.row.content }}
           </div>
        </template>
      </el-table-column>
      <el-table-column label="评论时间" prop="createDate" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button class="textDel"
                     @click="deleteComment(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-size :current-page="currentPage" :each-page="eachPage" :page-total="total"
     @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"
    />
  </div>
</template>

<script>
import SelectDate from '../../components/other/SelectDate.vue';
import PageSize from '../../components/PageSize/PageSize.vue';

export default {
  name: 'Comment',
  components: { PageSize, SelectDate },
  data() {
    return {
      currentPage: 1, // 当前页码
      rows: 10,
      eachPage: 10, // 每页显示条数
      total: 1,
      commList: [
        {
          avatar: 'https://himg.bdimg.com/sys/portrait/item/wise.1.fb57baf7.XesiFWlM5iQywMOK1frD0Q.jpg?time=1804',
          nickName: '孤风',
          title: '今天天气很好',
          content: '啦啦啦啦哗啦啦',
          createDate: '2021年11月3日 23:12:28',
          id: 1,
        },
      ],
    };
  },
  methods: {
    changeDate(value) {
      console.log(value);
    },
    deleteComment(commId) {
      this.$confirm('是否删除此条评论信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
          console.log(commId);
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
    },
    handleSizeChange(val) {
      this.rows = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
};
</script>

<style lang="scss" scoped>
  .commbox{
    width: 100%;
    background: #ffffff;
    padding: 20px;
    box-sizing: border-box;
    .content{
        white-space: nowrap;
        width: 220px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
  }
</style>
