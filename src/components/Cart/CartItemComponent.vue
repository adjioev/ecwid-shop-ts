<script setup lang="ts">
import { PropType } from 'vue';
import {CheckIcon, ClockIcon, XMarkIcon} from "@heroicons/vue/20/solid";
import {CartItem } from "@/types/CartItem.ts";

 defineProps({
  product: {
    type: Object as PropType<CartItem>,
    required: true,
  },
  idx: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'remove-from-cart', itemId: string): void
}>()


const removeItem = (itemId: string) => {
  emit('remove-from-cart', itemId)
}
</script>

<template>
  <div class="flex-shrink-0">
    <router-link
        :key="product.id"
        :to="{ name: 'ProductDetail', params: { id: product.id } }"
    >
      <img :src="product.url" alt="Missing Image" class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48" />
    </router-link>
  </div>

  <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
    <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
      <div>
        <div class="flex justify-between">
          <h3 class="text-sm">
            <a href="#" class="font-medium text-gray-700 hover:text-gray-800">{{ product.name }}</a>
          </h3>
        </div>
        <div class="mt-1 flex text-sm">
          <p v-if="product.size" class="ml-4 border-l border-gray-200 pl-4 text-gray-500">{{ product.size }}</p>
        </div>
        <p class="mt-1 text-sm font-medium text-gray-900">Quantity: {{ product.quantity }}</p>
        <p class="mt-1 text-sm font-medium text-gray-900">€ {{ product.price }}</p>
      </div>

      <div class="mt-4 sm:mt-0 sm:pr-9">
        <label :for="`quantity-${idx}`" class="sr-only">Quantity, {{ product.name }}</label>
        <div class="absolute right-0 top-0">
          <button @click="removeItem(product.id)" type="button" class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
            <span class="sr-only">Remove</span>
            <XMarkIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <p class="mt-4 flex space-x-2 text-sm text-gray-700">
      <CheckIcon v-if="product.inStock" class="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
      <ClockIcon v-else class="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
      <span>{{ product.inStock ? 'In stock' : `Ships in ${product.leadTime}` }}</span>
    </p>
  </div>
</template>

<style scoped>

</style>