<template>
  <section>
    <div class="grid grid-rows-2 grid-cols-2 sm:grid-cols-4 sm:grid-rows-1 gap-2 mb-4">
      <div v-for="plan in plans" :key="plan.tier">
        <Card :title="'Tier ' + plan.tier">
          <div class="px-6 ml-2">
            <ul class="text-gray-700">
              <li v-if="plan.cores == 1">{{ plan.cores }} vCPU</li>
              <li v-else>{{ plan.cores }} vCPUs</li>
              <li>{{ plan.ram }}GB of RAM</li>
              <li>{{ plan.storage }}GB of Storage</li>
              <li>Costs ${{ plan.price }} per month</li>
            </ul>
          </div>
          <div class="px-6 pt-4 pb-2">
            <PurchaseButton :to="'/buy?p=' + plan.tier" />
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '@/components/Card.vue'
import PurchaseButton from '@/components/PurchaseButton.vue'

@Component({
  components: {
    Card,
    PurchaseButton
  }
})
export default class Plans extends Vue {
  get plans () {
    return [
      { tier: 1, cores: 1, ram: 2, storage: 30, price: 5 },
      { tier: 2, cores: 2, ram: 4, storage: 50, price: 10 },
      { tier: 3, cores: 4, ram: 8, storage: 75, price: 12 },
      { tier: 4, cores: 4, ram: 16, storage: 100, price: 15 }
    ]
  }
}
</script>

<style lang="postcss" scoped>
ul {
  text-align: left;
  list-style: initial;
}

.mr-3:last-child {
  margin-right: 0px;
}
</style>
