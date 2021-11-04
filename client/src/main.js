import Vue from 'vue';
import element from 'element-ui';
import editor from 'mavon-editor';
import * as echarts from 'echarts';
import App from './App.vue';
import router from './router';
import store from './store';
import toastMess from './components/Toast/index';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.scss';
import 'mavon-editor/dist/css/index.css';

Vue.config.productionTip = false;
Vue.prototype.$toast = toastMess;
Vue.prototype.$echarts = echarts;
Vue.use(element);
Vue.use(editor);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
