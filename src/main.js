import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElmentUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/global.styl'
import register from './register'

Vue.config.productionTip = false

Vue.use(ElmentUI)
Vue.use(register)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
