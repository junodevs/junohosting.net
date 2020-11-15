<template>
  <nav class="grid grid-cols-5 gap-2 mb-1">
    <div class="col-span-1">
      <span
        id="title"
        class="hidden sm:inline-block"
      >
        Juno Hosting
      </span>
    </div>
    <div class="col-span-4">
      <ul class="flex float-right">
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gamma.junohosting.net"
          >
            Web Panel
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/asfmaXr"
          >
            Discord
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
  data: () => ({
    open: false
  })
})
</script>

<style lang="postcss" scoped>
nav {
  @apply
    rounded
    bg-gray-200
    py-2 px-2;
}

ul li * {
  @apply
    mr-3
    inline-block
    rounded
    text-blue-500
    py-1 px-3;
}

ul li *:hover, ul li a:focus {
  @apply bg-gray-300;
}

#title {
  font-family: 'Permanent Marker';
  @apply
    ml-3
    font-bold
    text-lg;
}
</style>
