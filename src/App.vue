<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer
  }
})
</script>
