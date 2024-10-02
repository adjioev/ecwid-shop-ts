<template>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
      <form v-if="items.length > 0" class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" class="lg:col-span-7">
          <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>
          <ul role="list" class="divide-y divide-gray-200 border-b border-t border-gray-200">
            <li v-for="(product, productIdx) in items" :key="product.id" class="flex py-6 sm:py-10">
              <CartItemComponent :product="product" :idx="productIdx" @remove-from-cart="removeItemFromCart" />
            </li>
          </ul>
        </section>
        <OrderSummary />
      </form>
      <div v-else class="mt-12">
        <p class="text-lg text-gray-900">Your cart is empty</p>
      </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import CartItemComponent from "@/components/Cart/CartItemComponent.vue";
import OrderSummary from "@/components/Cart/OrderSummary.vue";
import {CartItem} from "@/types/CartItem.ts";

const emit = defineEmits<{
  (event: 'remove-from-cart', itemId: string): void;
}>();

defineProps({
  items: {
    type: Array as PropType<CartItem[]>,
    required: true,
  },
});

const removeItemFromCart = (itemId: string) => {
  emit('remove-from-cart', itemId)
}
</script>