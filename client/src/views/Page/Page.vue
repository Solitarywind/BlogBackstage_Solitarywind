<template>
    <div class="pageCont">
        <PageHeader :data="Pagedata" />
        <PageCont  />
        <PageFoot />
    </div>
</template>

<script>
import PageHeader from '../../components/Page/PageHeader.vue';
import PageCont from '../../components/Page/PageCont.vue';
import PageFoot from '../../components/Page/PageFoot.vue';

export default {
  name: 'Page',
  components: { PageCont, PageHeader, PageFoot },
  data() {
    return {
      Pagedata: {
        VisitsNum: 1123, // 访问数量
        PubArtileNum: 112, // 文章发布数量
        PubNoteNum: 134, // 笔记发布数量
        LikeArtile: 11334, // 文章点赞总量
        LikeNotes: 13445, // 笔记点赞总量
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
