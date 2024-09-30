<script setup lang="ts">
import Product from "@/components/Product/Product.vue";
import { useRoute } from 'vue-router';
import BreadcrumbsComponent from "@/components/Breadcrumbs/BreadcrumbsComponent.vue";

const route = useRoute();
const productId = route.params.id as string;

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]
</script>

<template>
  <BreadcrumbsComponent :pages="pages"/>
  <Product :id="productId" />
</template>

<style scoped>
</style>