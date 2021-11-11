import {
  verifyCode, loginAdminn, updataUserInfo, getUserInfo,
} from '../http/loginService';

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
          localStorage.setItem('adminToken', res.data.token);
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
    // eslint-disable-next-line consistent-return
    async Updatainfo({ commit }, userInfo) {
      if (userInfo) {
        const res = await updataUserInfo(userInfo);
        if (res.code === 0) {
          const resp = await getUserInfo(userInfo.id);
          if (resp.code === 0) {
            commit('getUserinfo', resp.data);
          }
          return resp;
        }
      }
    },
  },
};
