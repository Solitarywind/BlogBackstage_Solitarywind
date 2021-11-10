import { verifyCode, loginAdminn } from '../http/loginService';

export default {
  namespaced: true,
  state: {
    userinfo: {},
    loginUser: {
      loginAccount: '',
      loginPwd: '',
      captcha: '',
    }, // 登录操作
  },
  mutations: {
    getUserinfo(state, userInfo) {
      state.userinfo = userInfo;
    },
  },
  actions: {
    async login({ commit }, userinfo) {
      if (userinfo) {
        const res = await loginAdminn(userinfo);
        if (res.code === 0) {
          commit('getUserinfo', res.data);
        }
        return res;
      }
      return false;
    },
    loginOut({ commit }) {
      commit('getUserinfo', {});
      return true;
    },
    async loginCode() {
      // eslint-disable-next-line no-return-await
      return await verifyCode();
    },
  },
};
