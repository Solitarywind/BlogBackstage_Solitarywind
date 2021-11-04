import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Login from './Login';
import menu from './menu';
import Article from './Article';
import Note from './Note';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Login,
    menu,
    Article,
    Note,
  },
  plugins: [createPersistedState()],
});
