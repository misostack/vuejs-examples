import Vue from 'vue';
import VueRouter from 'vue-router';

import chap1Routes from './chap1.routes';

Vue.use(VueRouter);

const routes = [{ path: '/', redirect: { name: 'chap1Home' } }, chap1Routes];

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
