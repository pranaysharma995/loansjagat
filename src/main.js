import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Vuelidate from 'vuelidate'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import LandingPage from './components/LandingPage.vue';
import BasicDetailSalaried from './components/BasicDetailSalaried.vue';
import PersonalDetailSalaried from './components/PersonalDetailSalaried.vue';
import TransactionDetailSalaried from './components/TransactionDetailSalaried.vue';
import OfferDetailSalaried from './components/OfferDetailSalaried.vue'

import BasicDetailSelfEmployed from './components/BasicDetailSelfEmployed.vue';
import PersonalDetailSelfEmployed from './components/PersonalDetailSelfEmployed.vue';
import TransactionDetailSelfEmployed from './components/TransactionDetailSelfEmployed.vue';
// import OfferDetailSelfEmployed from './components/OfferDetailSelfEmployed.vue';
import PersonalLonOffers from './components/PersonalLonOffers.vue';
Vue.use(Vuelidate);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: LandingPage },
  { path: '/salaried/basic-detail', component:BasicDetailSalaried },
  { path: '/salaried/personal-detail', component:PersonalDetailSalaried},
  { path: '/salaried/transaction-detail', component:TransactionDetailSalaried },
  { path: '/salaried/offer-detail', component:OfferDetailSalaried },
  { path: '/self-employed/basic-detail', component:BasicDetailSelfEmployed },
  { path: '/self-employed/personal-detail', component:PersonalDetailSelfEmployed },
  { path: '/self-employed/transaction-detail', component:TransactionDetailSelfEmployed },
  { path: '/self-employed/offer-detail', component:PersonalLonOffers },
  { path: '/personal-loan-offers', component:PersonalLonOffers }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
