<template>
  <main>
    <h1>About Juno Hosting</h1>

    <p>
      Juno hosting is a modern boutique shared server hosting founded and ran by
      <a
        class="link"
        href="https://junodevs.tech"
      > Juno Devs</a>. We're a small
      team of 4 dedicated to delivering a superior experience with an affordable
      price tag.
    </p>
    <p>
      Choosing Juno, you can expect incredible reliability and quick support. We
      never oversell servers, and we ethically source our hardware and power.
      We maintain sustainably low pricing by eliminating the large overhead
      costs of typical small scale hosting companies. We currently have one
      location in the San Francisco Bay Area with a sole DELL PowerEdge R420.
    </p>

    <section id="branding">
      <h2>Branding</h2>

      <section id="colors">
        <h3>
          Colors
        </h3>

        <div class="flex">
          <div
            v-for="color in colors"
            :key="color"
            class="w-1/6 mr-4 color"
          >
            <div
              :id="'color-' + color"
              class="color h-64 rounded"
            />
            <p class="text-center mt-2 mb-3">
              #{{ color }}
            </p>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About',
  data: () => ({
    colors: [
      'ff4bc9',
      '56e0ff',
      'a19ee7',
      '5fdd9d',
      'f8f8f8',
      '5d737e',
      '161925'
    ]
  })
})
</script>

<style lang="postcss" scoped>
.color:last-child {
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

p {
  @apply text-lg;
}
</style>
