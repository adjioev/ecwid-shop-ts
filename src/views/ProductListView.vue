<script setup lang="ts">
import ProductGrid from "@/components/ProductGrid/ProductGrid.vue";
import CategoryList from "@/components/CategoryList/CategoryList.vue";
import {useCategoryStore} from "@/stores/categoryStore.ts";
import {ref} from "vue";

const loading = ref(true);

const handleLoadingStart = () => {
  loading.value = true;
};

const handleLoadingStop = () => {
  loading.value = false;
};
</script>

<template>
  <div v-if="loading" class="flex items-center justify-center">
    <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mt-20" ></div>
  </div>
  <div v-show="!loading">
    <div class="pb-16">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-4">Categories</h1>
      <CategoryList :categories="useCategoryStore().categories" />
    </div>
    <div>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-4">Products</h1>
      <ProductGrid @start-loading="handleLoadingStart" @stop-loading="handleLoadingStop" />
    </div>
  </div>
</template>

<style scoped>

</style>