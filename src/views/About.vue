<template>
  <section id="about">
    <h1 class="text-center font-bold m-3 text-3xl">About Juno Hosting</h1>
    <p>
      Juno Hosting is a modern boutique shared server hosting company
      founded and ran by <a class="link" href="https://junodevs.tech">Juno</a>.

      We're a small team of 4 dedicated to delivering the best possible experiences
      with your server, that means great reliability, quick support, and good prices.
    </p>
    <h2 class="font-bold text-2xl my-3">Branding</h2>
    <div>
      <h3 class="font-bold text-xl my-3">Colors</h3>
      <div id="colors" class="flex">
        <div id="color-container" class="w-1/6 mr-4" v-for="color in colors" :key="color">
          <div class="color h-64 rounded" :id="'color-' + color"></div>
          <p class="text-center mt-2">#{{ color }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {
  private colors = [
    'ff4bc9',
    '56e0ff',
    'a19ee7',
    '5fdd9d',
    'f8f8f8',
    '5d737e',
    '161925'
  ]
}
</script>

<style lang="postcss" scoped>
.color-container:last-child {
  margin-right: 0px;
}

#color-ff4bc9 { background-color: #ff4bc9; }
#color-56e0ff { background-color: #56e0ff; }
#color-a19ee7 { background-color: #a19ee7; }
#color-5fdd9d { background-color: #5fdd9d; }
#color-f8f8f8 { background-color: #f8f8f8; }
#color-5d737e { background-color: #5d737e; }
#color-161925 { background-color: #161925; }
</style>
