import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import routes from './router/routes';
import { store } from './store/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
