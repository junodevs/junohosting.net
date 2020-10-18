<template>
  <span>
    <router-link :to="to">
      Purchase
    </router-link>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PurchaseButton extends Vue {
  @Prop() private to!: string;
}
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
