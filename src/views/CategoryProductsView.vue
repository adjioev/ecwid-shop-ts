<script setup lang="ts">
import { computed } from 'vue';
import BreadcrumbsComponent from "@/components/Breadcrumbs/BreadcrumbsComponent.vue";
import ProductGrid from "@/components/ProductGrid/ProductGrid.vue";
import { useCategoryStore } from '@/stores/categoryStore';

const categoryStore = useCategoryStore();

const props = defineProps<{
  id: string | number;
}>();


const categoryName = computed(() => {
  const categoryId = Number(props.id);
  return categoryStore.getCategoryNameById(categoryId) || '';
});

const pages = computed(() => [
  { name: categoryName.value, href: '#', current: true },
]);
</script>

<template>
  <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-8">{{ categoryName }}</h1>
  <BreadcrumbsComponent :pages="pages"/>
  <ProductGrid :categoryId="props.id" />
</template>

<style scoped>
</style>


