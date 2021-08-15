export default {
  namespaced: true,
  state: {
    labeList: [{
      label: 'html',
      effect: false,
    },
    {
      label: 'css',
      effect: false,
    },
    {
      label: 'vue',
      effect: false,
    },
    {
      label: 'raet',
      effect: false,
    },

    {
      label: 'webpack',
      effect: false,
    },
    {
      label: 'es6',
      effect: false,
    },
    {
      label: 'vite',
      effect: false,
    },
    {
      label: 'VueSSR',
      effect: false,
    },
    {
      label: 'ReatSSR',
      effect: false,
    },
    {
      label: 'Javascript',
      effect: false,
    },
    {
      label: 'DOM',
      effect: false,
    },
    {
      label: 'BOM',
      effect: false,
    },
    ],
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
  /* eslint no-param-reassign: "error" */
  actions: {
    // 选择标签
    changeLabel({
      state,
      commit,
    }, { tag, type }) {
      const labelitem = state.labeList;
      labelitem.forEach((item) => {
        if (item.label === tag) {
          item.effect = type;
        }
      });
      commit('getLabel', {
        labeList: labelitem,
      });
    },
    // 删除标签
    deleteLabel({ state, commit }, played) {
      const labelitem = state.labeList;
      labelitem.splice(state.labeList.indexOf(played), 1);
      commit('getLabel', {
        labeList: labelitem,
      });
    },
    // 添加标签
    addLabel({ state, commit }, played) {
      const labelitem = state.labeList;
      labelitem.push(played);
      commit('getLabel', {
        labeList: labelitem,
      });
    },
  },
};
