<script setup lang="ts">
import BreadcrumbsComponent from "@/components/Breadcrumbs/BreadcrumbsComponent.vue";
import ProductGrid from "@/components/ProductGrid/ProductGrid.vue";
import {useRoute} from "vue-router";

const route = useRoute();
const categoryId = route.params.id as string;
const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]
</script>

<template>
  <BreadcrumbsComponent :pages="pages"/>
  <ProductGrid :categoryId="categoryId" />
</template>

<style scoped>
</style>