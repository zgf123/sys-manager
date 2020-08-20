import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import '../mock'
import './components'
import './filters'
import './global-variable'

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
