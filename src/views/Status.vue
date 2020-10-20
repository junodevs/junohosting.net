<template>
  <div>
    <h1 class="font-bold text-3xl mb-2">Status Page</h1>
    <p class="mb-4">
      This page allows the user to determine the status of Juno Hosting's
      services.
    </p>

    <section id="services">
      <ul>
        <li v-for="service in services" :key="service" class="services-entry" :class="service.status">
            <span class="font-semibold text-lg">{{ service.service }}</span>
            <span class="float-right status">
              {{ capitalize(service.status) }}
            </span>
        </li>
      </ul>
    </section>

    <section id="server-usage" class="grid grid-cols-3 gap-2 grid-rows-2 sm:grid-rows-1">
      <Card title="Memory Status">
        <code>
          <p class="font-medium text-center mt-1">804.76mb</p>
        </code>
      </Card>
      <Card title="Network Usage">
        <code>
          <p class="font-medium text-center mt-1">73.87 pkts/s</p>
        </code>
      </Card>
      <Card title="CPU Usage">
        <code>
          <p class="font-medium text-center mt-1">14.6%</p>
        </code>
      </Card>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '@/components/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class Status extends Vue {
  private services = [
    { service: 'Website', status: 'online', ping: 86 },
    { service: 'VPS Services', status: 'offline', ping: 176 },
    { service: 'Networking', status: 'offline', ping: 49 },
    { service: 'Wiki', status: 'online', ping: 49 }
  ]

  capitalize (s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>

<style lang="postcss" scoped>
.services-entry {
  border: 1.5px solid #e2e8f0;
  @apply p-3 mb-3 rounded;
}

.online .status {
  @apply text-green-500;
}

.offline .status {
  @apply text-red-500;
}
</style>
