import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import '@/assets/tailwind.pcss'
import '@/assets/global.pcss'
import router from './router'
import store from './store'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  import('vue-axe')
    .then(({ default: VueAxe }) => {
      Vue.use(VueAxe)
    })
    .catch(err => { throw new Error(err) })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
