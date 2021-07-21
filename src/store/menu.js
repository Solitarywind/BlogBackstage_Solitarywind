import menuList from '../util/MenuList';

export default {
  namespaced: true,
  state: {
    breadName: [],
  },
  mutations: {
    getbread(state, breadName) {
      state.breadName = breadName;
    },
  },
  actions: {
    assemble({ commit }, val) {
      // window.menuList = menuList;
      const flatten = (arr) => arr.forEach((item) => {
        if (item.index !== val) {
          if (item.children && item.children.length > 0) {
            flatten(item.children);
          }
        }
        return item;
      });
      const arr = flatten(menuList);
      console.log(val, arr);
    },
  },
};
