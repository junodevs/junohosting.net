<template>
  <div id="home">
    <section id="title-card" class="flex mt-3 mb-5">
      <div class="w-2/2 sm:w-1/2">
          <h1 class="title text-center font-bold text-2xl">
            Juno Hosting
          </h1>
          <p class="mb-5 text-left max-w-xl">
            Juno Hosting is a modern boutique shared server hosting company
            founded and ran by <a target="_blank" class="link" rel="noopener noreferrer" href="https://junodevs.tech">Juno</a>.

            We're a small team of 4 dedicated to delivering the best possible experiences
            with your server, that means great reliability, quick support, and good prices.
          </p>
        </div>
      <div class="pattern sm:ml-2 sm:w-1/2"></div>
    </section>
    <section id="support-card" class="flex mb-5">
      <div class="pattern sm:mr-2 sm:w-1/2"></div>
      <div class="w-2/2 sm:w-1/2">
          <h1 class="title text-center font-bold text-2xl">
            Quick Support
          </h1>
          <p class="mb-5 text-center max-w-xl">
            With our active community and experienced support staff on
            <a target="_blank" class="link" rel="noopener noreferrer" href="https://discord.gg/asfmaXr">Discord</a>
            we're ready to provide the best possible support to you at anytime.
          </p>
        </div>
    </section>
    <section id="plans">
      <h2 class="text-center font-bold text-2xl mb-1">Plans</h2>
      <p class="mb-5 mx-auto text-center max-w-lg">
        We offer 4 distinct tiers of VPS'. Each plan a 500GB
        monthly transfer limit, 300mb/s of bandwith, and a choice
        between the Ubuntu 18.04/20.04, CentOS 7/8, or Debian 9/10
        operating system's.
      </p>
      <Plans />
    </section>
  </div>
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

.title {
  text-transform: uppercase;
  font-family: "Permanent Marker", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: #a19ee7;
}

#title-card .pattern {
  background-color: #a19ee7;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8f8f8' fill-opacity='0.58'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  @apply rounded;
}

#support-card .pattern {
  background-color: #f8f8f8;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a19ee7' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  @apply rounded;
}
</style>
