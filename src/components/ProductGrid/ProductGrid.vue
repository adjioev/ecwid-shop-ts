<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchProducts } from '@/api/useEcwidApi.ts';
import ProductGridComponent from "./ProductGridComponent.vue";


const productsData = ref(null);
const error = ref(null);

onMounted(async () => {
  try {
    productsData.value = await fetchProducts();
  } catch (err) {
    error.value = err.message || 'Failed to fetch product';
    console.error(err);
  }
});
</script>

<template>
  <div v-if="productsData">
    <ProductGridComponent :products="productsData" />
  </div>
  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>
  <div v-else>
  </div>
</template>

<style scoped>

</style>