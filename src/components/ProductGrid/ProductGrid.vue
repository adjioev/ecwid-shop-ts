<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';
import {fetchProducts, fetchCategoryProducts} from '@/api/useEcwidApi.ts';
import ProductGridComponent from "./ProductGridComponent.vue";
import {Product} from "@/types/ProductInterfaces.ts";

const loading = ref(false);
const productsData = ref<Product[] | null>(null);
const error = ref<string | null>(null);

const props = defineProps({
  categoryId: {
    type: String,
    required: false,
  },
});

// hooks for loading and data update
const emits = defineEmits(['update-product-info', 'start-loading', 'stop-loading']);

const fetchData = async () => {
  const categoryId = Number(props.categoryId);
  try {
    loading.value = true;
    emits('start-loading');
    productsData.value = categoryId
        ? await fetchCategoryProducts(categoryId)
        : await fetchProducts();
    emits('update-product-info', productsData.value);
  } catch (err) {
    error.value = (err as Error).message || 'Failed to fetch product';
    console.error(err);
  } finally {
    loading.value = false;
    emits('stop-loading');
  }
};
onMounted(fetchData);
watch(() => props.categoryId, fetchData);
</script>

<template>
  <ProductGridComponent  v-if="productsData" :products="productsData" />
  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>
  <div v-else class="flex items-start justify-center min-h-screen">
    <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mt-20" ></div>
  </div>
</template>

<style scoped>

</style>