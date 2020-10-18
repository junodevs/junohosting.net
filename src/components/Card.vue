<template>
  <div class="max-w-sm rounded border overflow-hidden shadow-lg">
    <p class="font-bold text-lg py-2">{{ title }}</p>
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
