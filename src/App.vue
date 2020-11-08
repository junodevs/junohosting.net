<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
})
</script>
