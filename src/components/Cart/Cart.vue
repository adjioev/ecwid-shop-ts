<script setup lang="ts">
import CartComponent from "@/components/Cart/CartComponent.vue";
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.items);

const handleItemRemove = (itemId: string) => {
  cartStore.removeFromCart(itemId);
}
</script>

<template>
<CartComponent :items="cartItems" @remove-from-cart="handleItemRemove" />
</template>

<style scoped>
</style>