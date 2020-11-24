<template>
  <main>
    <h1 class="mb-2 mt-0">
      About Juno Hosting
    </h1>

    <section id="about">
      <p>
        Juno hosting is a boutique shared server hosting by
        <a
          class="link"
          href="https://junodevs.tech"
        > Juno Devs</a>. We're a small team dedicated to providing a top-notch
        experience at an affordable price. With Juno Hosting, you can expect
        incredible reliability and lightning fast support.
      </p>
      <p>
        We never oversell servers and we maintain sustainably low pricing by
        eliminating the large overhead costs of typical small scale hosting
        companies. All servers are currently located in the San Francisco Bay
        Area, California, utilizing Intel® Xeon® E5-2450. Servers run enterprise
        hard drives with RAID redundancy in the case of hard drive failure,
        equipped with DDR3 RAM & dual power supplies.
      </p>

      <h2>Our Commitments</h2>

      <ul id="commitments">
        <li>
          We never oversell nodes
        </li>
        <li>
          We ethically source our power and internet resources to reduce our
          carbon footprint and emissions
        </li>
        <li>
          We are deliberate and selective in our hardware purchasing process to
          reduce potentional E-Waste when hardware is retired
        </li>
        <li>
          We encourage and welcome diversity in our onboarding of new employees
          amongst customers
        </li>
      </ul>
    </section>

    <section id="team-members">
      <h1 class="text-center">
        The Team
      </h1>
    </section>

    <section id="branding">
      <h1 class="mb-0">
        Branding
      </h1>

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

#commitments {
  list-style: inside;
  @apply ml-3;
}

#colors {
  overflow: auto;
}

.subtitle {
  @apply text-lg;
}
</style>
