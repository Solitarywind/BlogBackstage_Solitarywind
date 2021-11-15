import { addLabel, getLabel, deLabel } from '../http/labelService';

export default {
  namespaced: true,
  state: {
    labeList: [],
    noteData: {},
  },
  mutations: {
    getLabel(state, {
      labeList,
    }) {
      state.labeList = labeList;
    },
    getNoteData(state, { noteData }) {
      state.noteData = noteData;
    },
  },
  actions: {
    // 选择标签
    changeLabel({
      state,
      commit,
    }, { tag, type }) {
      const labelitem = state.labeList;
      labelitem.forEach((item) => {
        if (item.label === tag) {
          // eslint-disable-next-line no-param-reassign
          item.effect = type;
        }
      });
      commit('getLabel', {
        labeList: labelitem,
      });
    },
    // 删除标签
    async deleteLabel({ state }, id) {
      // eslint-disable-next-line no-return-await
      return await deLabel(id);
    },
    // 添加标签
    async newLabel({ state }, data) {
      const res = await addLabel(data);
      return res.code === 0;

      // eslint-disable-next-line no-return-await
      // return await addLabel(data);
    },

    // eslint-disable-next-line consistent-return
    async label({ state, commit }, userId) {
      const res = await getLabel(userId);
      if (res.code === 0) {
        const labeList = res.data;
        if (labeList.length > 0) {
          labeList.forEach((v) => {
            v.effect = false;
          });
        }
        commit('getLabel', { labeList });
      }
    },

  },
};
