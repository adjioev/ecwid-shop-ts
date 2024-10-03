<script setup lang="ts">
import ProductGrid from "@/components/ProductGrid/ProductGrid.vue";
import CategoryList from "@/components/CategoryList/CategoryList.vue";
import {useCategoryStore} from "@/stores/categoryStore.ts";
</script>

<template>
  <div class="pb-16">
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-4">Categories</h1>
    <CategoryList :categories="useCategoryStore().categories" />
  </div>
  <div>
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-4">Products</h1>
    <ProductGrid />
  </div>
</template>

<style scoped>

</style>