import Vue from 'vue'
import HelloWorld from './HelloWorld.vue'

const components: any = {
  HelloWorld
}

Vue.use(() => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
})
