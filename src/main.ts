import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as services from './services'
import '../mock'

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  store,
  provide: {
    ...services
  },
  render: h => h(App)
}).$mount('#app')
