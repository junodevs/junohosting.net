<template>
  <footer>
    <section class="grid grid-cols-5">
      <div class="col-span-2">
        <h3 id="title">
          Juno Hosting
        </h3>
      </div>
      <div>
        <h3>About</h3>
        <ul>
          <li>
            <router-link
              class="link"
              to="/about"
            >
              About Us
            </router-link>
          </li>
          <li>
            <router-link
              class="link"
              to="/legal/terms"
            >
              Terms of Service
            </router-link>
          </li>
          <li>
            <router-link
              class="link"
              to="/legal/privacy"
            >
              Privacy Policy
            </router-link>
          </li>
          <li>
            <router-link
              class="link"
              to="/about#branding"
            >
              Brand Guidelines
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Platform</h3>
        <ul>
          <li>
            <router-link
              class="link"
              to="/#plans"
            >
              VPS Pricing
            </router-link>
          </li>
          <li>
            <a
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://vps.junohosting.net"
            >
              Web Panel
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Support</h3>
        <ul>
          <li>
            <a
              class="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/asfmaXr"
            >
              Community Discord
            </a>
          </li>
          <li>Helpdesk &amp; Customer Support</li>
        </ul>
      </div>
    </section>
    <section>
      &COPY; 2020 Juno Devs
    </section>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer'
})
</script>

<style lang="postcss" scoped>
#title {
  font-family: 'Permanent Marker';
}

footer {
  @apply
    rounded
    bg-gray-200
    py-2 px-4;
}
</style>
