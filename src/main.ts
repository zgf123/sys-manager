import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import Interfaces from './services/interfaces'
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import '../mock'
import './components'
import './filters'

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  store,
  provide: {
    ...Interfaces
  },
  render: h => h(App)
}).$mount('#app')
