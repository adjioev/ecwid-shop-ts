<template>
    <div class="pb-16 pt-6 sm:pb-24">
      <h2 id="products-heading" class="sr-only">Products</h2>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <router-link
            v-for="product in products"
            :key="product.id"
            :to="{ name: 'ProductDetail', params: { id: product.id } }"
            class="group"
        >
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 relative z-10 group-hover:z-10">
            <img
                :src="product.imageUrl"
                :alt="product.imageAlt"
                class="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3 class="flex-1">{{ product.name }}</h3>
            <p class="ml-4">{{ product.defaultDisplayedPriceFormatted }}</p>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {Product} from "@/types/ProductInterfaces.ts";

defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true,
  },
});
</script>