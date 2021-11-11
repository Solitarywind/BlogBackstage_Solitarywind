<template>
  <div class="userinfo">
    <el-upload class="uploader"
               action="https://jsonplaceholder.typicode.com/posts/"
               :show-file-list="false">
      <img :src="avator" class="avatr" alt="">
    </el-upload>
    <el-form label-width="100px">
      <el-form-item label="昵称">
        <el-input class="inputItem" placeholder="请输入昵称" v-model="nickName"/>
      </el-form-item>
      <el-form-item label="账号">
        <el-input class="inputItem" placeholder="请输入账号" v-model="loginAccount"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input class="inputItem" placeholder="请输入密码" v-model.trim="password"/>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="Tocomfirm">修改</el-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      userinfo: (state) => state.Login.userinfo,
    }),
  },
  data() {
    return {
      avator: '',
      password: '',
      nickName: '',
      loginAccount: '',
      id: '',
    };
  },
  mounted() {
    this.nickName = this.userinfo.nickName;
    this.avator = this.userinfo.avator || 'https://himg.bdimg.com/sys/portrait/item/wise.1.fb57baf7.XesiFWlM5iQywMOK1frD0Q.jpg?time=1804';
    this.loginAccount = this.userinfo.loginAccount;
    this.id = this.userinfo.id;
  },
  methods: {
    ...mapActions({
      Updatainfo: 'Login/Updatainfo',
    }),
    async Tocomfirm() {
      const {
        password, accountName, account, avator, id, nickName,
      } = this;
      const data = {
        password, accountName, account, avator, id, nickName,
      };
      const res = await this.Updatainfo(data);
      if (res.code === 0) {
        this.$toast({
          msg: '信息修改成功',
          type: 'success',
        });
      }
    },
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
  }
</style>
