import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/store.js'

import routes from './Routes.js'


Vue.config.productionTip = false;

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
