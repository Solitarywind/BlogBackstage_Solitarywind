import {
  addSort, delSort, updateSort, getSort,
} from '../http/sortService';

export default {
  namespaced: true,
  state: {
    articList: [],
    artItem: {},
    sortList: [],
  },
  mutations: {
    getAtion(state, payload) {
      state.artItem = payload;
    },
    getSortList(state, list) {
      state.sortList = list;
    },
  },
  actions: {

    async addClassifi({ state }, obj) {
      const res = await addSort(obj);
      return res.code === 0;
    },
    async delClassifi({ state }, id) {
      const res = await delSort(id);
      return res.code === 0;
    },
    async updataClassifi({ state }, payload) {
      const res = await updateSort(payload.id, payload.data);
      return res.code === 0;
    },
    async obtainClassifi({ commit }, userId) {
      const res = await getSort(userId);
      if (res.code === 0) {
        const classList = res.data;
        if (classList.length > 0) {
          classList.forEach((v) => {
            // eslint-disable-next-line no-param-reassign
            v.isEdit = false;
          });
          commit('getSortList', classList);
        }
      }
    },
  },
};
