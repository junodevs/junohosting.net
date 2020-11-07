import Home from './pages/Home.vue'
import { createWebHistory, createRouter } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home }
  ]
})
