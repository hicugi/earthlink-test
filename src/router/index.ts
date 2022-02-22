import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import store from '../store'

const homeName = 'home'
const dashboardName = 'dashboard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: homeName,
    component: Home,
    beforeEnter: () => {
      if (store.state.user) {
        return { name: dashboardName }
      }
    }
  },
  {
    path: '/dashboard',
    name: dashboardName,
    component: Dashboard,
    beforeEnter: () => {
      if (!store.state.user) {
        return { name: homeName }
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
