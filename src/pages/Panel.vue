<template>
  <main>
    <section
      id="control-panel"
      class="grid grid-cols-4 gap-8 mb-1"
    >
      <div>
        <span id="small-title">
          Actions
        </span>
        <ul id="sidebar">
          <li>
            <button>Shutdown VPS</button>
          </li>
          <li>
            <button>Restart VPS</button>
          </li>
          <li>
            <button>Console (VNC)</button>
          </li>
        </ul>
      </div>
      <div class="col-span-3">
        <section
          id="specs"
          class="grid grid-cols-4 gap-1"
        >
          <div><cpu-icon class="inline-block" /> 4 vCPU</div>
          <div><layers-icon class="inline-block" /> 8 GB RAM</div>
          <div><hard-drive-icon class="inline-block" /> 120 GB Disk</div>
          <div><dollar-sign-icon class="inline-block" /> $15/mo Price</div>
        </section>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { CpuIcon, HardDriveIcon, DollarSignIcon, LayersIcon } from '@zhuowenli/vue-feather-icons'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    CpuIcon,
    HardDriveIcon,
    DollarSignIcon,
    LayersIcon
  }
})
</script>

<style lang="postcss" scoped>
#specs {
  @apply
    rounded
    bg-gray-300
    py-2 px-2;
}

#specs * {
  @apply
    font-mono;
}

#small-title {
  @apply
    block
    text-center
    py-1 px-3
    font-medium
    text-sm
    text-gray-600
    font-mono
    tracking-wide
    uppercase;
}

ul#sidebar li * {
  @apply
    mr-3
    block
    w-full
    rounded
    text-blue-500
    py-1 px-3
    text-left;
}

ul#sidebar li *:hover, ul#sidebar li a:focus {
  @apply bg-gray-300;
}

</style>
