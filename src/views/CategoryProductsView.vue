<script setup lang="ts">
import BreadcrumbsComponent from "@/components/Breadcrumbs/BreadcrumbsComponent.vue";
import ProductGrid from "@/components/ProductGrid/ProductGrid.vue";
import {useRoute} from "vue-router";
import { useCategoryStore } from '@/stores/categoryStore';

const route = useRoute();
const categoryId = route.params.id as string;
const categoryName = useCategoryStore().getCategoryNameById(categoryId);


const pages = [
  { name: `${categoryName}`, href: '#', current: true },
]
</script>

<template>
  <BreadcrumbsComponent :pages="pages"/>
  <ProductGrid :categoryId="categoryId" />
</template>

<style scoped>
</style>