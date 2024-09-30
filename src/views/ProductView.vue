<script setup lang="ts">
import Product from "@/components/Product/Product.vue";
import { useRoute } from 'vue-router';
import BreadcrumbsComponent from "@/components/Breadcrumbs/BreadcrumbsComponent.vue";

const route = useRoute();
const productId = route.params.id as string;
</script>

<template>
  <BreadcrumbsComponent />
  <Product :id="productId" />
</template>

<style scoped>
</style>