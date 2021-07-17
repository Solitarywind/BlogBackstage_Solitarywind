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
              name: '拖拽竟然还能这样玩拖拽竟然还能这样玩拖拽竟然还能这样玩',
              id: 1,
              createTime: '2021年7月17日23:08:56',
              tag: ['web', 'javascript'],
              author: 'Solitarywind',
              likeum: '2233',
            },
            {
              name: '拖拽竟然还能这样玩拖拽竟然还能这样玩拖拽竟然还能这样玩',
              id: 2,
              createTime: '2021年7月17日23:12:32',
              tag: ['web', 'javascript'],
              author: 'Solitarywind',
              likeum: '3233',
            },
            {
              name: '拖拽竟然还能这样玩拖拽竟然还能这样玩拖拽竟然还能这样玩',
              id: 3,
              createTime: '2021年7月17日23:12:36',
              tag: ['web', 'javascript'],
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
              createTime: '2021年7月17日23:20:21',
              author: 'Solitarywind',
              likeum: '313',
              tag: ['web', 'javascript'],
            },
            {
              name: 'js原型链',
              id: '2',
              createTime: '2021年7月17日23:20:21',
              author: 'Solitarywind',
              likeum: '1233',
              tag: ['web', 'javascript'],
            },
            {
              name: 'js闭包',
              id: '3',
              createTime: '2021年7月17日23:20:21',
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
