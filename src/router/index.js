import Vue from 'vue'
import VueRouter from 'vue-router'
import blogList from '../pages/list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'blogList',
    component: blogList
  },
  {
    path: '/post/:id',
    name: 'post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
