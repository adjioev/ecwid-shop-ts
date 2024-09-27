<script setup lang="ts">
import { useRouter } from "vue-router";
import Modal from "@/components/Modal/Modal.vue";
import CartComponent from "@/components/Cart/CartComponent.vue";
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
import {useModalStore} from "@/stores/modalStore.ts";

const router = useRouter();
const cartStore = useCartStore();
const modalStore = useModalStore();

const cartItems = computed(() => cartStore.items);

const handleItemRemove = (itemId: string) => {
  cartStore.removeFromCart(itemId);
}
const handleModalClose = () => {
  modalStore.closeModal();
  router.push({ name: 'Home' });
}

</script>

<template>
<Modal>
  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
    <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
  </div>
  <div class="mt-3 text-center sm:mt-5">
    <div  class="text-base font-semibold leading-6 text-gray-900">Payment successful</div>
    <div class="mt-2">
      <p class="text-sm text-gray-500">We notify you via email when items are shipped to your address.</p>
    </div>
  </div>
  <div class="mt-5 sm:mt-6">
    <button type="button" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="handleModalClose">Go back to shopping</button>
  </div>
</Modal>
<CartComponent :items="cartItems" @remove-from-cart="handleItemRemove" />
</template>

<style scoped>
</style>