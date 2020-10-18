<template>
  <nav id="nav-container" class="grid grid-cols-5 gap-2 mb-5">
    <div class="col-span-1">
      <span class="font-bold text-lg">
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
          <router-link to="/panel">
            Web Panel
          </router-link>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/asfmaXr">
            Support
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {}
</script>

<style lang="postcss" scoped>
div {
  margin-bottom: 5px;
}

ul li a {
  @apply mr-3 inline-block border border-white rounded text-blue-500 py-1 px-3;
}

a:hover {
  @apply border-gray-200 bg-gray-200;
}
</style>
