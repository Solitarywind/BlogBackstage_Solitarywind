<template>
  <div class="noteBox">
    <el-form :model="noteData" label-width="80px">
      <el-form-item label="笔记标题">
        <el-input
          type="text"
          v-model="noteData.noteName"
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
          <div class="tagName">请选择标签:</div>
          <div class="tagList">
            <el-tag
              v-for="tagItem in labeList"
              :key="tagItem.name"
              @click.prevent="handleIConfirm(tagItem.name)"
              :effect="tagItem.effect ? 'dark' : 'plain'"
              @dblclick.native="handleClose(tagItem.name)"
            >
              {{ tagItem.name }}
            </el-tag>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="封面图片">
        <el-upload action="/api/upload" :show-file-list="false"  :on-success="getCover">
          <img class="coverImg" v-if="noteData.coverPic" :src="noteData.coverPic" alt="">
           <i  class="el-icon-plus coverImg"></i>
        </el-upload>
      </el-form-item>
      <Editor editHeight="650px" @edchange="edchange" :editVal="noteCont"/>
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
      noteCont: '',
      noteData: {
        noteName: '',
        noteCode: '',
        noteLabel: [],
        noteCont: '',
        coverPic: '',
      },
    };
  },
  computed: {
    ...mapState({
      labeList: (state) => state.Note.labeList,
    }),
  },
  created() {
    if (Object.keys(this.$route.params).length > 0) {
      this.$route.meta.name = '编辑笔记';
      const note = this.$store.state.Note.noteData;
      // console.log(note);
      this.noteCont = note.noteCont;
      this.noteData = note;
    } else {
      this.$store.commit('Note/getNoteData', '');
    }
  },
  methods: {
    // 取消标签
    handleClose(tag) {
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
    edchange(val) {
      this.noteData.noteCont = val;
    },
    submitNote() {
      console.log(this.noteData);
    },
    // 获取封面
    getCover(res) {
      if (res.code === 0) {
        this.noteData.coverPic = res.data.url;
      }
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
    padding: 10px;
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
    display: flex;
    align-items: center;
    .tagName{
      margin-right: 10px;
    }
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

  .coverImg{
    width: 180px;
    height: 180px;
    line-height: 180px;
    font-size: 60px;
    border: 1px dashed #909399;
  }

}
</style>
