import * as login from '../http/loginService';

export default {
  namespaced: true,
  state: {
    userinfo: {},
    loginUser: {
      account: '',
      pass: '',
      code: '',
    }, // 登录操作
  },
  mutations: {
    getUserinfo(state, userInfo) {
      state.userinfo = userInfo;
    },
  },
  actions: {
    login({ commit }, userinfo) {
      if (userinfo) {
        commit('getUserinfo', userinfo);
        return true;
      }
      return false;
    },
    loginOut({ commit }) {
      commit('getUserinfo', {});
      return true;
    },
    async loginCode() {
      // eslint-disable-next-line no-return-await
      return await login.verifyCode();
    },
  },
};
