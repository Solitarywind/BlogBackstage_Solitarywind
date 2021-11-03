<template>
    <div class="pageFoot">
      <template v-for="item in footConts">
        <FootCont  :key="item.index" :contData="item"/>
      </template>
    </div>
</template>

<script>

import FootCont from './FootCont.vue';

export default {
  name: 'PageFoot',
  components: {
    FootCont,
  },
  data() {
    return {
      footConts: [
        {
          name: '最新文章',
          index: 0,
          list: [
            {
              name: '拖拽竟电饭锅电视柜能这样玩',
              id: 1,
              createTime: '2021-7-17 23:08:56',
              tag: ['生活', '美食'],
              author: 'Solitarywind',
              likeum: '2233',
            },
            {
              name: '萨法是否噶拖拽竟然然还能这',
              id: 2,
              createTime: '2021-7-17 23:12:32',
              tag: ['生活', '美食'],
              author: 'Solitarywind',
              likeum: '3233',
            },
            {
              name: '说法是否然还收到过发送到竟然还能这样玩',
              id: 3,
              createTime: '2021-7-17 23:12:36',
              tag: ['生活', '美食'],
              author: 'Solitarywind',
              likeum: '1233',
            },
          ],
        },
        {
          name: '最新笔记',
          index: 1,
          list: [
            {
              name: 'var,let和const',
              id: '1',
              createTime: '2021-7-18 22:06:21',
              author: 'Solitarywind',
              likeum: '313',
              tag: ['web', 'javascript'],
            },
            {
              name: 'js原型链',
              id: '2',
              createTime: '2021-7-18 21:06:38',
              author: 'Solitarywind',
              likeum: '1233',
              tag: ['web', 'javascript'],
            },
            {
              name: 'js闭包',
              id: '3',
              createTime: '2021-7-18 12:06:49',
              author: 'Solitarywind',
              likeum: '2233',
              tag: ['web', 'javascript'],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/page.scss";
</style>
