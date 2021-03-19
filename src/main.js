import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
