<script setup lang="ts">
import {ref} from "vue";
import {useCategoryStore} from "@/stores/categoryStore.ts";
import LoadingComponent from "@/components/Misc/LoadingComponent.vue";
import ProductGrid from "@/components/ProductGrid/ProductGrid.vue";
import CategoryList from "@/components/CategoryList/CategoryList.vue";

const loading = ref(true);

const handleLoadingStart = () => {
  loading.value = true;
};

const handleLoadingStop = () => {
  loading.value = false;
};
</script>

<template>
  <LoadingComponent v-if="loading" />
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