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
    ],
  },
  mutations: {
    getLabel(state, {
      labeList,
    }) {
      state.labeList = labeList;
    },
  },
  /* eslint no-param-reassign: "error" */
  actions: {
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
  },
};
