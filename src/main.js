import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line import/order
import Axios from 'axios';

Vue.use(BootstrapVue);
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
