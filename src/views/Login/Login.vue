<template>
    <div class="loginUg">
       <div class="loginCont">
          <div class="logo">
              <img class="logoImg" src="../../assets/WindLogo.png" alt="">
          </div>
          <el-form :model="loginUser" status-icon
           ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="账号" prop="account">
              <el-input class="elinput" plplaceholder="请输入账号"
               v-model="loginUser.account" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
              <el-input class="elinput" type="password" placeholder="请输入密码"
               v-model="loginUser.pass"  autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="age">
              <el-input class="elinput" plplaceholder="请输入验证码"
               v-model.number="loginUser.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">提交</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
       </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginUser: {
        account: '',
        pass: '',
        age: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/login.scss';
</style>
