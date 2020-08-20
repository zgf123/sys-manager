import Vue from 'vue'
import Interfaces from '@/services/interfaces'

for (const [key, val] of Object.entries(Interfaces)) {
  if (!!Vue.prototype[`$${key}`]) {
    throw new Error(`全局变量 $${key} 已存在！`)
  } else {
    Vue.prototype[`$${key}`] = val
  }
}
