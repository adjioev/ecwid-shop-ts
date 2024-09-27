<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchProductById } from '@/api/useEcwidApi.ts';
import ProductComponent from "@/components/Product/ProductComponent.vue";
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const productData = ref(null);
const error = ref(null);


const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const handleAddToCart = (product: CartItem) => {
  console.log("Adding to cart", product);
  cartStore.addToCart(product);
}

onMounted(async () => {
  try {
    productData.value = await fetchProductById(props.id);
  } catch (err) {
    error.value = err.message || 'Failed to fetch product';
    console.error(err);
  }
});
</script>

<template>
  <div v-if="productData">
      <ProductComponent :productData="productData"  @add-to-cart="handleAddToCart" />
  </div>
  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped>

</style>