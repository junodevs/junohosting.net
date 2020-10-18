<template>
  <footer class="grid grid-cols-7 gap-2 mt-3">
    <div class="col-span-3">
      <span class="font-semibold">
        Copyright &COPY; 2020 Juno Hosting
      </span>
    </div>
    <div class="col-span-4">
      <ul class="flex float-right">
        <li>
          <router-link to="/tos">
            Terms of Service
          </router-link>
        </li>
        <li>
          <router-link to="/privacy">
            Privacy Policy
          </router-link>
        </li>
        <li>
          <router-link to="/status">
            Status
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style lang="postcss" scoped>
div {
  margin-bottom: 5px;
}

ul li a {
  @apply mr-3 inline-block border border-white rounded text-blue-500 py-1 px-3;
}

a:hover {
  border: none;
  @apply border-gray-200 bg-gray-200;
}
</style>
