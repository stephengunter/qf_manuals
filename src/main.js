import './vendor/fontawesome-free/css/all.css';
import './styles/app.css';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

import 'bootstrap';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#wrapper')
