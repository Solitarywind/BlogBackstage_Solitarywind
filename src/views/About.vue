<template>
  <div class="userinfo">
    <el-upload class="uploader"
               action="https://jsonplaceholder.typicode.com/posts/"
               :show-file-list="false">
      <img :src="avatar" class="avatr" alt="">
    </el-upload>
    <el-form label-width="100px">
      <el-form-item label="昵称">
        <el-input class="inputItem" placeholder="请输入昵称" v-model="userinfo.account"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input class="inputItem" placeholder="请输入密码" v-model.trim="password"/>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input class="inputItem" placeholder="请输入手机号" v-model="phone"/>
        <span class="psText">*修改密码就必须要填写手机号和获取验证码</span>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input class="messcode" placeholder="请输入验证码" v-model="messCode"/>
        <el-button type="text" class="hasText">获取验证码</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary">修改</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      userinfo: (state) => state.Login.userinfo,
    }),
  },
  data() {
    return {
      avatar: 'https://himg.bdimg.com/sys/portrait/item/wise.1.fb57baf7.XesiFWlM5iQywMOK1frD0Q.jpg?time=1804',
      password: '',
      phone: '',
      messCode: '',
    };
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
.userinfo{
  background: #ffffff;
  padding:30px 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  .uploader{
     width: 180px;
    height: 180px;
    margin-left: 100px;
    .avatr{
      width: 150px;
      height: 150px;
    }
  }
  .psText{
    color:#999;
    font-size: 13px;
  }
  /*.hasText{*/
  /*  color:var(--sizecolor)*/
  /*}*/
}
</style>
