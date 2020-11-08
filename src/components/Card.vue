<template>
  <div class="card max-w-sm rounded border overflow-hidden p-2">
    <p class="font-bold text-center text-lg mb-1">
      {{ title }}
    </p>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="postcss" scoped>
.card {
  border: 1.5px solid #e2e8f0;
}
</style>
