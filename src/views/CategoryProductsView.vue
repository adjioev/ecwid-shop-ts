<script setup lang="ts">
import {computed, ref} from 'vue';
import BreadcrumbsComponent from "@/components/Breadcrumbs/BreadcrumbsComponent.vue";
import ProductGrid from "@/components/ProductGrid/ProductGrid.vue";
import { useCategoryStore } from '@/stores/categoryStore';
import LoadingComponent from "@/components/Misc/LoadingComponent.vue";

const categoryStore = useCategoryStore();

const props = defineProps<{
  id: string | undefined;
}>();

const loading = ref(true);

const handleLoadingStart = () => {
  loading.value = true;
};
const handleLoadingStop = () => {
  loading.value = false;
};

const categoryName = computed(() => {
  const categoryId = Number(props.id);
  return categoryStore.getCategoryNameById(categoryId) || '';
});

const pages = computed(() => [
  { name: categoryName.value, href: '#', current: true },
]);
</script>

<template>
  <LoadingComponent v-if="loading" />
  <div v-show="!loading">
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-8">{{ categoryName }}</h1>
    <BreadcrumbsComponent :pages="pages"/>
    <ProductGrid :categoryId="props.id"  @start-loading="handleLoadingStart" @stop-loading="handleLoadingStop" />
  </div>
</template>

<style scoped>
</style>


