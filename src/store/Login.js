export default {
  namespaced: true,
  state: {
    userinfo: {},
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
      }
    },
  },
};
