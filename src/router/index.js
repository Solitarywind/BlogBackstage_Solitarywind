import Vue from 'vue';
import VueRouter from 'vue-router';

import 'nprogress/nprogress.css';
import { start, done, configure } from 'nprogress';

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
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: getPageComponent(() => import(/* webpackChunkName: "about" */ '../views/About.vue')),
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

export default router;
