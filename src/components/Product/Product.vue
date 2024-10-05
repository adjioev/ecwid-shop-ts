<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchProductById } from '@/api/useEcwidApi.ts';
import ProductComponent from "@/components/Product/ProductComponent.vue";
import {Product} from "@/types/ProductInterfaces.ts";
const productData = ref<Product | null>(null);
const error = ref<string | null>(null);

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const emits = defineEmits(['update-product-info']);

onMounted(async () => {
  try {
    productData.value = await fetchProductById(props.id);
    emits('update-product-info',  productData.value);
  } catch (err) {
    error.value = (err as Error).message || 'Failed to fetch product';
    console.error(err);
  }
});
</script>

<template>
  <div v-if="productData">
      <ProductComponent :productData="productData"  />
  </div>
  <div v-else-if="error" class="flex items-center justify-center min-h-[calc(100vh-44rem)] text-center">
    <h1 class="text-4xl">Sorry, sometething went wrong! Looks like we can't find this product...</h1>
  </div>
  <div v-else>
  </div>
</template>

<style scoped>

</style>