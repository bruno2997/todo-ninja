import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Projetos from './views/Projetos.vue'
import Time from './views/Time.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: Projetos
    },
    {
      path: '/time',
      name: 'time',
      component: Time
    },
  ]
})
