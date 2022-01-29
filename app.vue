<template>
  <div data-theme="bekah">
    <Navbar />
    <section class="app-content">
      <NuxtPage />
    </section>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import "./css/tailwind.css";
import "@/components/Navbar.vue";
import "@/components/Footer.vue";
</script>

<style lang="postcss" scoped>
.app-content {
  padding-top: 64px;
}
</style>
