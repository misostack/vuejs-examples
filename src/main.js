/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from 'vue';
// theme setup
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App.vue';
import router from './router';
import store from './store';

// plugins
Vue.use(Buefy);

Vue.config.productionTip = false;

webstore = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
