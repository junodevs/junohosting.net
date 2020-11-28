import { defineAsyncComponent } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: defineAsyncComponent(() => import('./pages/Home.vue'))
    },
    {
      path: '/about',
      component: defineAsyncComponent(() => import('./pages/About.vue'))
    },
    {
      path: '/terms',
      component: defineAsyncComponent(() => import('./pages/TermsOfService.vue'))
    },
    {
      path: '/privacy',
      component: defineAsyncComponent(() => import('./pages/About.vue'))
    },
    {
      path: '/panel',
      component: defineAsyncComponent(() => import('./pages/Panel.vue'))
    }
  ]
})
