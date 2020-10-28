<template>
  <section id="about" class="sm:max-w-3xl mx-auto">
    <h1 class="text-center font-bold m-3 text-3xl">About Juno Hosting</h1>
    <article>
      <p>
        Juno Hosting is a modern boutique server hosting company founded
        and ran by <a class="link" href="https://junodevs.tech">Juno</a>. We're a small
        team of 4 dedicated to delivering a superior experience for an
        affordable price.
      </p>
      <p class="mt-3">
        Choosing Juno, you can expect incredible reliability and quick support.
        We never oversell our servers, and ethically source our hardware and power.
        We maintain sustainably low pricing by eliminating the large
        overhead costs of typical small scale hosting companies.
        We currently have one location in the San Francisco Bay Area with a
        PowerEdge R420. Interested in trying our services? Looking for a custom
        solution? Feel free to contact us.
      </p>
    </article>
    <h2 class="font-bold text-2xl my-3">Branding</h2>
    <div>
      <h3 class="font-bold text-xl my-3">Colors</h3>
      <div id="colors" class="flex">
        <div id="color-container" class="w-1/6 mr-4" v-for="color in colors" :key="color">
          <div class="color h-64 rounded" :id="'color-' + color"></div>
          <p class="text-center mt-2 mb-3">#{{ color }}</p>
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

#colors {
  overflow: auto;
}
</style>
