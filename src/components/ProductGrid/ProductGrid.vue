<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {fetchProducts, fetchCategoryProducts} from '@/api/useEcwidApi.ts';
import ProductGridComponent from "./ProductGridComponent.vue";


const productsData = ref(null);
const error = ref<string | null>(null);

const props = defineProps({
  categoryId: {
    type: Number,
    required: false,
  },
});

onMounted(async () => {
  try {
    productsData.value =  props.categoryId ? await fetchCategoryProducts(props.categoryId) :await fetchProducts();
  } catch (err) {
    error.value = (err as Error).message || 'Failed to fetch product';
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
  <div v-else class="flex items-start justify-center min-h-screen">
    <div
        class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mt-20"
    ></div>
  </div>
</template>

<style scoped>

</style>