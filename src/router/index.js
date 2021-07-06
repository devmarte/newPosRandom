import Vue from 'vue'
import VueRouter from 'vue-router'
// import about from '../views/About.vue'
import works from '../views/Works.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Works',
    component: works
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
