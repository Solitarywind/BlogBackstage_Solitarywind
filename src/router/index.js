import Vue from 'vue';
import VueRouter from 'vue-router';
import 'nprogress/nprogress.css';
import { start, done, configure } from 'nprogress';
import store from '../store/index';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
configure({
  showSpinner: false,
});

function delay(duration) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  }));
}

function getPageComponent(pagefn) {
  return async () => {
    start();
    if (process.env.NODE_ENV === 'development') {
      await delay(1000);
    }
    const comp = await pagefn();
    done();
    return comp;
  };
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: getPageComponent(() => import('../views/Home.vue')),
    children: [
      {
        path: '/',
        name: 'Page',
        meta: {
          name: '首页',
          isLogin: true,
        },
        component: getPageComponent(() => import('../views/Page/Page.vue')),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      name: '关于我们',
      isLogin: true,
    },
    component: getPageComponent(() => import(/* webpackChunkName: "about" */ '../views/About.vue')),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      name: '个人登录',
      isLogin: false,
    },
    component: getPageComponent(() => import('../views/Login/Login.vue')),
  },

];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (to.meta.isLogin) {
    if (!store.state['Login/userinfo']) {
      next('/Login');
    } else {
      next();
    }
  }
  next();
});
router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
