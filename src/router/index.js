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
      {
        path: '/Article/ArtList',
        name: 'ArtList',
        meta: {
          name: '文章列表',
          isLogin: true,
        },
        component: getPageComponent(() => import('../views/Artile/ArtList.vue')),
      },
      {
        path: '/Article/AddArt',
        name: 'AddArt',
        meta: {
          name: '新增文章',
          isLogin: true,
        },
        component: getPageComponent(() => import('../views/Artile/AddArt.vue')),
      },
      {
        path: '/Note/NoteList',
        name: 'NoteList',
        mate: {
          name: '笔记列表',
          isLogin: true,
        },
        component: getPageComponent(() => import('../views/Note/NoteList.vue')),
      },
      {
        path: '/Note/AddNote',
        name: 'AddNote',
        mate: {
          name: '添加笔记',
          isLogin: true,
        },
        component: getPageComponent(() => import('../views/Note/AddNote.vue')),
      },
      {
        path: '/Classification',
        name: 'Classification',
        meta: {
          name: '分类',
          isLogin: true,
        },
        component: getPageComponent(() => import('../views/Classification/Classification.vue')),
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
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    if (Object.keys(store.state.Login.userinfo).length === 0) {
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
