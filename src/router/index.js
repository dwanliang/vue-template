import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    meta:{
      keepalive: false
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
