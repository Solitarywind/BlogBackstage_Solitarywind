import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Login from './Login';
import menu from './menu';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Login,
    menu,
  },
  plugins: [createPersistedState()],
});
