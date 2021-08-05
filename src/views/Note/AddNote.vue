<template>
  <div class="noteBox">
    <el-form :model="noteData" label-width="80px">
      <el-form-item label="笔记标题">
        <el-input
          type="text"
          v-model="noteData.noteTitle"
          clearable
          placeholder="请输入标题"
          style="width: 300px"
        />
      </el-form-item>
      <el-form-item label="笔名">
        <el-input
          clearable
          placeholder="请输入笔名"
          style="width: 300px"
          v-model="noteData.noteCode"
        ></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <div class="labelBox">
          <el-tag
            :key="tagItem"
            v-for="tagItem in noteData.noteLabel"
            closable
            :disable-transitions="false"
            @close="handleClose(tagItem)"
            type="info"
            >{{ tagItem }}</el-tag
          >
        </div>
        <div class="tagbox">
          <div>请选择:</div>
          <div class="tagList">
            <el-tag
              v-for="tagItem in labeList"
              :key="tagItem.label"
              @click.prevent="handleIConfirm(tagItem.label)"
              :effect="tagItem.effect ? 'dark' : 'plain'"
              @dblclick.native="handleClose(tagItem.label)"
            >
              {{ tagItem.label }}
            </el-tag>
          </div>
        </div>
      </el-form-item>
      <Editor editHeight="650px" v-model="noteData.noteCont" />
      <el-row justify="end" type="flex">
        <el-button @click="submitNote" class="subBtn" type="primary"
          >发布</el-button
        >
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Editor from '../../components/Editor/Editor.vue';

export default {
  components: { Editor },
  name: 'AddNote',
  data() {
    return {
      noteData: {
        noteTitle: '',
        noteCode: '',
        noteLabel: [],
        noteCont: '',
      },
    };
  },
  computed: {
    ...mapState({
      labeList: (state) => state.Note.labeList,
    }),
  },
  methods: {
    // 删除标签
    handleClose(tag) {
      console.log(tag);
      this.noteData.noteLabel.splice(this.noteData.noteLabel.indexOf(tag), 1);
      this.$store.dispatch('Note/changeLabel', { tag, type: false });
    },
    // 添加标签
    handleIConfirm(tag) {
      let { noteLabel } = this.noteData;
      noteLabel.push(tag);
      noteLabel = noteLabel.filter((item, index, self) => self.indexOf(item) === index);
      this.noteData.noteLabel = noteLabel;
      this.$store.dispatch('Note/changeLabel', { tag, type: true });
    },
    submitNote() {
      console.log(this.noteData);
    },
  },
};
</script>

<style lang="scss" scoped>
.noteBox {
  width: 1200px;
  margin: 30px auto;
  .labelBox {
    width: 100%;
    border-bottom: 1px solid #dad5d5;
    padding: 10px 0px;
    min-height: 30px;
    .el-tag {
        margin-right:10px;
        margin-bottom: 5px;
      }
  }
  .tagbox {
    background: #fff;
    padding: 10px 10px 20px;
    margin-top: 20px;
    .tagList {
      display: flex;
      flex-wrap: wrap;
      .el-tag {
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
  .subBtn {
    width: 100px;
    margin: 0 auto;
    padding: 0px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 50px;
  }
}
</style>
