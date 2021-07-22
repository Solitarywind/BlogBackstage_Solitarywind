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
      // console.log(val);
      if (val !== 'Page') {
        const barms = (nodes = [], yarr = []) => {
          const domearr = [];
          const assArr = (v) => { // 树形结构拍扁
            v.forEach((item) => {
              yarr.push(item);
              if (item.children && item.children.length) assArr(item.children, yarr);
            });
          };
          assArr(nodes);
          let obj = yarr.filter((v) => v.index === val)[0];
          domearr.push(obj.name);
          const setArr = (arr) => { // 递归获取父级
            arr.forEach((v) => {
              if (v.id === obj.aId) {
                domearr.push(v.name);
                obj = v;
                setArr(arr);
              }
            });
          };
          setArr(yarr);
          return domearr.reverse();
        };
        const breadlist = barms(menuList);
        commit('getbread', breadlist);
      } else {
        commit('getbread', []);
      }
    },
  },
};
