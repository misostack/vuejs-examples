import Vue from 'vue';
import VueRouter from 'vue-router';

import chap0Routes from './chap0.routes';
import chap1Routes from './chap1.routes';

Vue.use(VueRouter);
// { path: '/', redirect: { name: 'chap1Home' } }
const routes = [chap0Routes, chap1Routes];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(_to, _from, _savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
