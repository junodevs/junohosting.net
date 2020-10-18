<template>
  <div id="app" class="container mx-auto px-6 py-4">
    <Navbar />
    <hr>
    <router-view class="mt-5 mb-5" role="main" />
    <hr>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: { Navbar, Footer }
})
export default class App extends Vue {}
</script>
