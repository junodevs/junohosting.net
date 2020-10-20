<template>
  <div class="card max-w-sm rounded border overflow-hidden p-2">
    <p class="font-bold text-center text-lg">{{ title }}</p>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Card extends Vue {
  @Prop({ required: true }) private title!: string;
}
</script>

<style lang="postcss" scoped>
.card {
  border: 1.5px solid #e2e8f0;
}
</style>
