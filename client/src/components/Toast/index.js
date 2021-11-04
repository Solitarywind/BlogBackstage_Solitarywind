import Vue from 'vue';
import toast from './Toast.vue';

const Toast = Vue.extend(toast);

export default ({ msg, type }, duration = 2500) => {
  let reduration = duration;
  const app = new Toast({
    el: document.createElement('div'),
    data() {
      return {
        msg,
        type,
      };
    },
  });
  if (reduration < 1500) {
    reduration = 1500;
  }
  document.body.appendChild(app.$el);
  setTimeout(() => {
    app.flag = false;
  }, reduration - 500);
  setTimeout(() => {
    document.body.removeChild(app.$el);
  }, reduration);
};
