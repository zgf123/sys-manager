import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: {
      name: 'user-info'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'user-info',
        name: 'user-info',
        component: () => import('../views/home/user-info.vue')
      },
      {
        path: 'user-articles',
        name: 'user-articles',
        component: () => import('../views/home/user-articles.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
