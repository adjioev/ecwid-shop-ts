<template>
  <button
      type="button"
      @click="handleButtonClick"
      :disabled="isLoading"
      :class="[
      'mt-8 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2',
      isAdded
        ? 'bg-black hover:bg-gray-800 focus:ring-black'
        : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
    ]"
  >
    <template v-if="isLoading">
      <ArrowPathIcon class="h-5 w-5 mr-3 animate-spin text-white" />
      Processing...
    </template>

    <template v-else-if="isAdded">
      Go to checkout
      <ArrowRightIcon class="h-5 w-5 ml-3 text-white" />
    </template>

    <template v-else>
      Add to cart
    </template>
  </button>
</template>

<script setup lang="ts">
import {PropType, ref} from 'vue';
import { useRouter } from 'vue-router';
import { ArrowPathIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';
import { useCartStore } from '@/stores/cartStore';
import { CartItem } from '@/types/CartItem.ts'

const props = defineProps({
  cartItem: {
    type: Object as PropType<CartItem>,
    required: true,
  }
});

const isLoading = ref(false);
const isAdded = ref(false);
const router = useRouter();
const cartStore = useCartStore();

const handleButtonClick = () => {
  if (isAdded.value) {
    router.push('/cart');
  } else {
    addItemToCart();
  }
};

const addItemToCart = () => {
  isLoading.value = true;
  // TODO: Logic for basket check goes here, faking a delay for now
  // That should include a bucket check in read world
  setTimeout(() => {
    cartStore.addToCart(props.cartItem);
    isLoading.value = false;
    isAdded.value = true;
  }, 1000);
};
</script>