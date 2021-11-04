export default {
  namespaced: true,
  state: {
    articList: [],
    artItem: {},
  },
  mutations: {
    getAtion(state, payload) {
      state.artItem = payload;
    },
  },
  actions: {

  },
};
