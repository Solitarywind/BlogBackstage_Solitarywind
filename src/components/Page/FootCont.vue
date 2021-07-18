<template>
  <el-card class="box-card footCont">
    <div class="clearfix" slot="header">
      <h3>{{ contData.name }}</h3>
      <div class="header-right">
        <el-select
          v-model="tagval"
          @change="changeTag($event)"
          clearable
          placeholder="标签选择"
        >
          <el-option
            v-for="item in tagList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
        <span class="hasnew" @click="changeNew"
          >最新 <i v-show="isNew == 0" class="el-icon-bottom active" />
          <i v-show="isNew == 1" class="el-icon-top active" />
        </span>
      </div>
    </div>
    <div class="itemtext" v-for="item in contData.list" :key="item.id">
      <el-link class="itemTitle" :underline="false">{{ item.name }}</el-link>
      <div class="itembtn">
        <el-col :span="24">
          作者: <span class="author">{{ item.author }}</span>
          <span class="tags"
            >标签:
            <span v-for="tagitem in item.tag" :key="tagitem"
              >#{{ tagitem }}
            </span>
          </span>
          <i class="icon-hot iconfont" />{{ item.likeum }}
        </el-col>
        <el-col :span="14" class="createTime"
          >发布时间:{{ item.createTime }}</el-col
        >
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'FootCont',
  props: ['contData'],
  data() {
    return {
      isNew: 0,
      tagval: '',
      tagList: [
        {
          id: '0',
          name: '美食',
        },
        {
          id: '1',
          name: '旅游',
        },
        {
          id: '2',
          name: 'web',
        },
        {
          id: '3',
          name: 'javascript',
        },
        {
          id: '4',
          name: 'vue',
        },
      ],
    };
  },
  methods: {
    changeTag(val) {
      console.log(val, this.tagval);
    },
    changeNew() {
      let { isNew } = this;
      if (isNew === 0) {
        isNew = 1;
        this.contData.list.sort((a, b) => Date.parse(a.createTime) - Date.parse(b.createTime));
      } else {
        isNew = 0;
        this.contData.list.sort((a, b) => Date.parse(b.createTime) - Date.parse(a.createTime));
      }
      this.isNew = isNew;
      console.log(this.contData.list);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/page.scss";
</style>
