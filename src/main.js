// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router';
import Routers from './router';
import iView from 'iview';
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'iview/dist/styles/iview.css';

// Vue.use(VueRouter);
Vue.use(iView,axios,VueAxios);

Vue.config.productionTip = false
axios.defaults.headers['Content-Type'] = 'application/json';
// The routing configuration
// const RouterConfig = {
//   routes: Routers
// };
// const router = new VueRouter(RouterConfig);

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  el: '#app',
  router: Routers,
  render: h => h(App)
})
