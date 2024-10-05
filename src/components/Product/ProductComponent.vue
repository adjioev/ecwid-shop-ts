<template>
  <div class="pb-16 pt-6 sm:pb-24">
    <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
      <div class="lg:col-span-5 lg:col-start-8">
        <div class="flex flex-col gap-4">
          <h1 class="text-xl font-medium text-gray-900">
            {{ productData.name }}
          </h1>
          <p class="text-xl font-medium text-gray-900">
            {{ productData.defaultDisplayedPriceFormatted }}
          </p>
        </div>
      </div>

      <!-- Image gallery -->
      <ProductImagesComponent :images="productData.media.images"/>

      <div class="mt-8 lg:col-span-5">
        <form>
          <ProductSizeComponent :sizes="productSizes"/>
          <AddToCartAction :cartItem="cartItem"/>
        </form>

        <!-- Product details -->
        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900"> Description </h2>
          <div
              class="prose prose-sm mt-4 text-gray-500"
              v-html="productData.description"
          />
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {computed, PropType} from "vue";
import AddToCartAction from "@/components/AddToCartAction/AddToCartAction.vue";
import {Product} from '@/types/ProductInterfaces';
import ProductImagesComponent from "@/components/Product/ProductImagesComponent.vue";
import ProductSizeComponent from "@/components/Product/ProductSizeComponent.vue";

const props = defineProps({
  productData: {
    type: Object as PropType<Product>,
    required: true,
  },
});

const cartItem = computed(() => {
  return {
    id: props.productData.id,
    name: props.productData.name,
    url: props.productData.thumbnailUrl,
    price: props.productData.price,
    inStock: props.productData.inStock,
    quantity: 1
  }
})

const productSizes = computed(() => {
  const sizeOption = props.productData.options?.find((option) => option.type === "SIZE");
  return sizeOption ? sizeOption.choices.map(size => {
    return {
      name: size.text,
      inStock: true
    }
  }) : [];
})

</script>
