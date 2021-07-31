/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from 'vue';
// theme setup
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App.vue';
import router from './router';
import store from './store';

// extenal styles
const loadExternalStyleSheets = (href) => {
  let linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  document.body.appendChild(linkElement);
  linkElement.href = href;
};
const materialDesignStyle = 'https://fonts.googleapis.com/icon?family=Material+Icons';
// load external stylesheets
loadExternalStyleSheets(materialDesignStyle);

// plugins
Vue.use(Buefy);

Vue.config.productionTip = false;

webstore = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
