import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import allMatrett from '@/views/AllMatrett'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/all-matrett',
    name: 'AllMatrett',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: allMatrett
  },
  {
    path: '/add-matrett',
    name: 'AddMatrett',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "AddMatrett" */ '../views/AddMatrett.vue')
  },
  {
    path: '/delete-matrett',
    name: 'DeleteMatrett',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "delete-matrett" */ '../views/DeleteMatrett.vue')
  },
  {
    path: '/edit-matrett',
    name: 'EditMatrett',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "edit-matrett" */ '../views/EditMatrett.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router