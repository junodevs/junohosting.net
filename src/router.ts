import Home from './pages/Home.vue'
import About from './pages/About.vue'
import PrivacyPolicy from './pages/PrivacyPolicy.vue'
import TermsOfService from './pages/TermsOfService.vue'
import WebPanel from './pages/Panel.vue'
import { createWebHistory, createRouter } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/terms', component: TermsOfService },
    { path: '/privacy', component: PrivacyPolicy },
    { path: '/panel', component: WebPanel }
  ]
})
