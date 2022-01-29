<template>
  <div data-theme="bekah">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import "./css/tailwind.css";
import "@/components/Navbar.vue";
import "@/components/Footer.vue";
</script>
