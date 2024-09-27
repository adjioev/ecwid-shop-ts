<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 id="products-heading" class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <router-link
            v-for="product in products.items"
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
            <h3>{{ product.name }}</h3>
            <p>{{ product.defaultDisplayedPriceFormatted }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  products: {
    type: Object,
    required: true,
  },
});
</script>