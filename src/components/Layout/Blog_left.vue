<template>
  <el-aside class="blog-aside" style="background-color:#7f7e7e;height: 100%" width="200px">
    <div class="logo">
      <el-avatar :src="require('../../assets/WindLogo.png')" size="large"
                 style="vertical-align: middle"/>
      <h1>Solitary Wind</h1>
    </div>
    <el-menu :default-active="menuList[0].id" :unique-opened="true" collapse-transition>
      <template v-for="item in menuList">
        <el-submenu class="subitem" :index="item.id" :key="item.id" v-if="item.children">
          <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
          <el-menu-item :index="menuitem.id"
                        :key="menuitem.id"
                        v-for="menuitem in item.children">{{menuitem.name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.id" :key="item.id" v-else>
          <i :class="item.icon"/>
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
    };
  },
};
</script>
<style scoped>
 /deep/ .el-submenu__title:hover{
     background: #60a4ff7f;
    color:var(--sizecolor);
 }
 /deep/ .el-submenu__title:hover i,
 /deep/ .el-menu-item.is-active i{
   color:var(--sizecolor);
 }
 /deep/ .el-submenu__title,
 /deep/ .el-submenu__title i{
   color:#fff;
 }
 /deep/ .el-submenu .el-menu{
    background: none;
  }
</style>
<style lang="scss" scoped>
  @import "../../assets/css/var.scss";

  .el-menu{
    background: none;
  }

  .subitem .el-menu{
    background: none;
  }

  .el-submenu__title:focus, .el-submenu__title:hover,
  .el-menu-item:focus, .el-menu-item:hover, .el-menu-item.is-active {
    background: $themeBg;
  }

  .el-submenu__title:focus,
  .el-menu-item:focus, .el-menu-item.is-active{
    color:var(--sizecolor);
  }
  .el-menu-item{
    color:#fff;
    i {
      color:#fff;
    }
  }
  .el-menu-item:hover,
  .el-submenu__title:hover{
    color:var(--sizecolor);
    i{
      color:var(--sizecolor);
    }
  }
  .logo {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
       margin-left: 10px;
      color:#fff;
    }
  }

</style>
