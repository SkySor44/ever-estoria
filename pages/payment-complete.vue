<template>
  <div v-if="!loading">Payment Complete for: ${{ amount }}</div>
</template>

<script setup>
const loading = useState("loading", () => true);
const amount = useState("amount", () => "0.00");

definePageMeta({
  pageTransition: false,
  layoutTransition: false,
});

onMounted(() => {
  amount.value = (localStorage.getItem("amount") / 100).toFixed(2) || "0.00";
  loading.value = false;
  localStorage.removeItem("amount");
});
</script>
