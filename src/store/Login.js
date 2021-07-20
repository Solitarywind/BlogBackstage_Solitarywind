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
      console.log(userinfo);
      if (userinfo) {
        commit('getUserinfo', userinfo);
        return true;
      }
      return false;
    },
  },
};
