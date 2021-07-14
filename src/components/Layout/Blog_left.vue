<template>
  <el-aside width="200px" style="background-color:#60a4ff7f;height: 100%">
    <div class="logo">
      <el-avatar size="large" :src="require('../../assets/WindLogo.png')" />
      Solitary Wind
    </div>
    <el-menu :default-active="menuList[0].id"  collapse-transition :unique-opened="true">
     <template v-for="item in menuList">
       <el-submenu v-if="item.children" :key="item.id" :index="item.id">
         <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
         <el-menu-item v-for="menuitem in item.children"
                       :key="menuitem.id"
                       :index="menuitem.id">{{menuitem.name}}</el-menu-item>
       </el-submenu>
       <el-menu-item v-else :index="item.id" :key="item.id">
         <i :class="item.icon" />
         <span>{{item.name}}</span>
       </el-menu-item>
     </template>

    </el-menu>
  </el-aside>
</template>

<script>
import menuList from '../../util/MenuList';

export default {
  name: 'Blog_left',
  data() {
    return {
      menuList,
      // LogoUrl: require('../../assets/WindLogo.png'),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/var.scss";
.el-menu{
   background: none;
}
.el-submenu__title:focus, .el-submenu__title:hover,
.el-menu-item:focus, .el-menu-item:hover,.el-menu-item.is-active{
   background:$themeWord;
}
.el-submenu__title:focus, .el-submenu__title:hover,
.el-menu-item:focus, .el-menu-item:hover{
  color:#fff;
}
</style>
