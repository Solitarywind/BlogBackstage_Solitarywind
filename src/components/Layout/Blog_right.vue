<template>
  <el-header class="elehader" height="80px">
    <el-breadcrumb class="elbread" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <template v-for="item in breadName">
        <el-breadcrumb-item v-if="item" :key="item">{{item}}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <el-dropdown>
      <div class="userinfo">
        <el-avatar :size="48" :src="avatar" shape="circle"/>
        <h3>{{userinfo.account}}</h3>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Blog_right',
  computed: {
    ...mapState({
      userinfo: (state) => state.Login.userinfo,
      breadName: (state) => state.menu.breadName,
    }),
  },

  data() {
    return {
      avatar: 'https://himg.bdimg.com/sys/portrait/item/wise.1.fb57baf7.XesiFWlM5iQywMOK1frD0Q.jpg?time=1804',
    };
  },
};
</script>
<style scoped>
  @import "../../assets/css/elcss.css";
</style>
<style lang="scss" scoped>
  .elehader {
    display: flex;
    justify-content: space-between;
    background: rgb(52, 48, 47);
    align-items: center;

    .elbread {
      font-size: 18px;
    }

    .userinfo {
      display: flex;
      align-items: center;

      cursor: pointer;

      h3 {
        color: var(--sizecolor);
        margin-left: 10px;
        font-size: 18px;
      }
    }
  }
</style>
