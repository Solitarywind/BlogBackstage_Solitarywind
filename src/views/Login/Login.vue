<template>
    <div class="loginUg">
       <div class="loginCont">
          <div class="logo">
              <img class="logoImg" src="../../assets/WindLogo.png" alt="">
          </div>
          <el-form :model="loginUser" status-icon :rules="loginRules"
           ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="账号" prop="account">
              <el-input class="elinput" placeholder="请输入账号" clearable
               v-model.trim="loginUser.account" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input class="elinput" type="password" placeholder="请输入密码"
               v-model="loginUser.pass" clearable  autocomplete="off" />
            </el-form-item>
            <el-form-item  label="验证码" prop="code">
              <div class="elitem">
                <el-input class="elcode" placeholder="请输入验证码"
                          v-model="loginUser.code" clearable />
                <VerifiCode ref="ficode" @updataCode="updataCode"/>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button @click="sumbitLogin('ruleForm')" type="primary">提交</el-button>
              <el-button @click="resetLogin('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import VerifiCode from '../../components/Login/VerifiCode.vue';

export default {
  name: 'Login',
  components: { VerifiCode },
  computed: {
    ...mapState({
      loginUser: (status) => status.Login.loginUser,
    }),
  },
  data() {
    const setAccout = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不可为空'));
      }

      const reg = /^[_|A-Za-z0-9]+$/;
      if (!reg.test(value)) {
        return callback(new Error('账号只能为英文数字下划线'));
      }
      return callback();
    };
    const setPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不可为空'));
      }
      if (value.length < 6) {
        return callback(new Error('密码长度不能少于6位'));
      }
      const reg = /^[_|A-Za-z0-9]+$/;
      if (!reg.test(value)) {
        return callback(new Error('密码只能为英文数字下划线'));
      }
      return callback();
    };
    const setCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不可为空'));
      }
      if (value.length !== 4) {
        return callback(new Error('验证码长度为4位'));
      }
      const reg = /^[A-Za-z0-9]+$/;
      if (!reg.test(value)) {
        return callback(new Error('验证码只能为英文和数字'));
      }
      return callback();
    };
    return {
      vifiCode: '', // 验证码
      loginRules: {
        account: [{
          validator: setAccout,
          trigger: 'blur',
        }],
        pass: [{
          validator: setPass,
          trigger: 'blur',
        }],
        code: [{
          validator: setCode,
          trigger: 'blur',
        }],
      },
    };
  },
  methods: {
    updataCode(val) {
      this.vifiCode = val;
    },
    resetLogin(formName) {
      this.$refs[formName].resetFields();
    },
    sumbitLogin(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { loginUser, vifiCode } = this;
          if (vifiCode.toLowerCase() !== loginUser.code.toLowerCase()) {
            this.$toast({
              msg: '验证码输入有误',
              type: 'error',
            });
          } else {
            const status = await this.$store.dispatch('Login/login', loginUser);
            if (status) {
              this.$toast({
                msg: '登录成功',
                type: 'success',
              });
              this.$router.push('/');
            } else {
              this.$toast({
                msg: '登录失败',
                type: 'error',
              });
            }
          }
          return false;
        }
        console.log('error submit!!');
        return false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/login.scss';
  .elitem{
    display: flex;
    .elcode{
      width: 130px;
      margin-right: 10px;
    }
  }

</style>
