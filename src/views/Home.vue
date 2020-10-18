<template>
  <section id="home">
    <div class="flex mt-3 mb-5">
      <div id="title-blurb" class="w-2/2 sm:w-1/2">
          <h1 id="title" class="text-center font-bold text-2xl">
            Juno Hosting
          </h1>
          <p class="mb-5 text-left max-w-xl">
            Juno Hosting is a modern boutique shared server hosting company
            founded and ran by <a class="link" href="https://junodevs.tech">Juno</a>.

            We're a small team of 4 dedicated to delivering the best possible experiences
            with your server, that means great reliability, quick support, and good prices.
          </p>
        </div>
      <div id="pattern" class="sm:ml-2 sm:w-1/2"></div>
    </div>
    <h2 class="text-center font-bold text-2xl mb-1">Plans</h2>
    <p class="mb-5 mx-auto text-center max-w-lg">
      We offer 4 distinct tiers of VPS'. Each plan a 500GB
      monthly transfer limit, 300mb/s of bandwith, and a choice
      between the Ubuntu 18.04/20.04, CentOS 7/8, or Debian 9/10
      operating system's.
    </p>
    <Plans />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Plans from '@/components/Plans.vue'

@Component({
  components: { Plans }
})
export default class Home extends Vue {
}
</script>

<style lang="pcss" scoped>
#home {
  text-align: center;
}

img {
  width: 100%;
  height: 200px;
}

#title {
  text-transform: uppercase;
  font-family: "Permanent Marker", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: #a19ee7;
}

#pattern {
  background-color: #a19ee7;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8f8f8' fill-opacity='0.58'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  @apply rounded;
}
</style>
