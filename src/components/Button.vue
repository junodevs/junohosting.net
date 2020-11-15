<template>
  <router-link :to="to">
    <span>{{ name }}</span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    name: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
span {
  @apply
    inline-block
    bg-gray-200
    rounded
    px-3
    py-1
    text-sm
    font-semibold
    text-gray-700
    mb-2;
}

span:hover {
  @apply bg-gray-300;
}
</style>
