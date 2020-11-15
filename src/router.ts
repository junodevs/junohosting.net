import Home from './pages/Home.vue'
import About from './pages/About.vue'
import { createWebHistory, createRouter } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/legal/terms', redirect: '' },
    { path: '/legal/privacy', redirect: '' }
  ]
})
