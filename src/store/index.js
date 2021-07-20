import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Login from './Login';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Login,
  },
  plugins: [createPersistedState()],
});
