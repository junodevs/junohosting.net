<template>
  <main>
    <section
      id="hero"
      class="container m-auto"
    >
      <div class="lg:flex lg:p-0 p-7 justify-between items-center">
        <div class="lg:p-0 p-7">
          <h1 class="text-4xl font-bold leading-tight mb-5 mt-0">
            Shared server hosting for all.
          </h1>
          <p class="text-xl">
            We're a small team dedicated to providing a top-notch experience at
            an affordable price. With Juno Hosting, you can expect incredible
            reliability and lightning fast support.
          </p>
          <div class="py-5">
            <a
              id="plans-button"
              href="/#plans"
            >See the Plans</a>
            <a
              id="discord-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/asfmaXr"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="features">
      <div>
        <h1>Best-in-class Pricing</h1>
        <p>
          Juno Hosting circumvents common pitfalls of large scale competitors.
          Our in-house billing system and panel allow us to control our
          ecosystem and craft the experience we want to see in the hosting
          market.
        </p>
      </div>
      <div>
        <h1>Rapid Support</h1>
        <p>
          Thanks to our small size, Juno Hosting delivers hasty support to all
          customers at no additional cost. Representatives are experienced and
          capable to resolve your query in minutes, not days.
        </p>
      </div>
    </section>
    <section id="plans">
      <h1>Plans</h1>
      <p>
        Juno Hosting offers four distinct tiers of VPS' plans each designed to
        suit your best interests. All systems have a soft data transfer limit of
        500GB. If you're in need of a custom solution please feel free to
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:hi@junohosting.net"
        >
          contact us.
        </a>
      </p>
      <Plans />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Plans from '../components/Plans.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Plans
  }
})
</script>

<style lang="postcss" scoped>
#plans {
  @apply mt-3;
}

#plans h1 {
  @apply mb-0;
}

#plans p {
  @apply mb-3;
}

#features {
  @apply grid grid-cols-2 mt-3;
}

#features div {
  @apply border-t-4 border-indigo-500 mr-8;
}

#features div:last-child {
  @apply mr-0;
}

#features div h1 {
  @apply font-bold text-2xl mt-2 mb-1;
}

#discord-button {
  @apply
    text-black
    rounded-full
    py-2 px-5
    text-lg
    font-semibold
    bg-gray-400
    inline-block
    border-2
    border-gray-400;
}

#discord-button:hover {
  @apply bg-white text-black;
}

#plans-button {
  @apply
    text-white
    rounded-full
    py-2 px-5
    text-lg
    font-semibold
    bg-indigo-500
    inline-block
    border
    border-indigo-500
    mr-3;
}
</style>
