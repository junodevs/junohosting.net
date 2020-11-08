<template>
  <main>
    <section
      id="hero"
      class="mt-5 container m-auto"
    >
      <div class="lg:flex lg:p-0 p-7 justify-between items-center">
        <div class="lg:p-0 p-7">
          <h1 class="text-4xl font-bold leading-tight mb-5">
            Modern shared server hosting for everyone.
          </h1>
          <p class="text-xl">
            We're a small team of 4 dedicated to delivering a superior
            experience with an affordable price tag. Choosing Juno, you can
            expect incredible reliability and quick support.
          </p>
          <div class="py-5">
            <a
              href="#plans"
              class="text-white rounded-full py-2 px-5 text-lg font-semibold bg-indigo-500 inline-block border border-indigo-500 mr-3"
            >See the Plans</a>
            <router-link
              id="discord-button"
              to="/discord"
            >
              Join Our Discord
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section id="features">
      <div>
        <h1>Best in-class pricing</h1>
        <p>
          Juno Hosting circumvents many of the pitfalls our competitors face,
          therefore we're able to provide the best pricing in our class.
        </p>
      </div>
      <div>
        <h1>Quick Support</h1>
        <p>
          Thanks to our small size Juno Hosting is able to deliever some of the
          fastest support in the industry even with a small team.
        </p>
      </div>
    </section>
    <section id="plans">
      <h1>Plans</h1>
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
</style>
