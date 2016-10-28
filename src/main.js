import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router'
import { currency } from 'filters/currency'

Vue.filter('currency', currency)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
