<template>
  <section
    id="plans"
    class="grid grid-rows-2 grid-cols-2 gap-2 my-2 md:grid-cols-4 md:grid-rows-1"
  >
    <div
      v-for="plan in plans"
      :key="plan.tier"
    >
      <Card
        :title="'Tier ' + plan.tier"
        class="shadow-lg"
        :badge="plan.price"
      >
        <div class="px-6 ml-2">
          <ul class="text-gray-700">
            <li v-if="plan.cores == 1">
              {{ plan.cores }} vCPU
            </li>
            <li v-else>
              {{ plan.cores }} vCPUs
            </li>
            <li v-if="plan.mb">
              {{ plan.ram }}MB of RAM
            </li>
            <li v-else>
              {{ plan.ram }}GB of RAM
            </li>
            <li>{{ plan.storage }}GB of Storage</li>
            <li>Costs ${{ plan.price }}/mo</li>
          </ul>
        </div>
        <div class="px-6 pt-4 justify-center flex">
          <Button
            :name="`Purchase`"
            :to="'/buy?p=' + plan.tier"
          />
        </div>
      </Card>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './Card.vue'
import Button from './Button.vue'

export default defineComponent({
  name: 'Plans',
  components: {
    Card,
    Button
  },
  data: () => ({
    plans: [
      { tier: 1, cores: 1, ram: 512, storage: 15, price: '2.50', mb: true },
      { tier: 2, cores: 1, ram: 2, storage: 45, price: '10.00' },
      { tier: 3, cores: 2, ram: 4, storage: 80, price: '12.00' },
      { tier: 4, cores: 4, ram: 16, storage: 120, price: '15.00' }
    ]
  })
})
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
