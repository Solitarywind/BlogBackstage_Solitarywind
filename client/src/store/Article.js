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

  },
  actions: {
    async addClassifi({ state }, obj) {
      return await addSort(obj);
    },
    async delClassifi({ state }, id) {
      return await delSort(id);
    },
    async updataClassifi({ state }, id, obj) {
      return await updateSort(id, obj);
    },
    async obtainClassifi({ state }, userId) {
      const res = await getSort(userId);
      console.log(res);
    },
  },
};
