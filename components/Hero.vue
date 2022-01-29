<template>
  <div class="hero min-h-screen" :style="`background-image: url(${url})`">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">English Text</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  url: {
    type: String,
    default: "https://picsum.photos/id/1005/1600/1400",
  },
});
</script>
