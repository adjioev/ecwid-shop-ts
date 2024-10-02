<script setup lang="ts">
import { computed } from 'vue';
import BreadcrumbsComponent from "@/components/Breadcrumbs/BreadcrumbsComponent.vue";
import ProductGrid from "@/components/ProductGrid/ProductGrid.vue";
import {useRoute} from "vue-router";
import { useCategoryStore } from '@/stores/categoryStore';

const route = useRoute();
const categoryId = Number(route.params.id);
const categoryStore = useCategoryStore();

const categoryName = computed(() => {
  return categoryStore.getCategoryNameById(categoryId) || '';
});

const pages = computed(() => [
  { name: categoryName.value, href: '#', current: true },
]);
</script>

<template>
  <BreadcrumbsComponent :pages="pages"/>
  <ProductGrid :categoryId="categoryId" />
</template>

<style scoped>
</style>