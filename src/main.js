import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/styles/base.css"
import "./assets/styles/calculator.css"


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
