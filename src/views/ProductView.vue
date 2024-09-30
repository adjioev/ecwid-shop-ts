<script setup lang="ts">
import Product from "@/components/Product/Product.vue";
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.id as string;
</script>

<template>
  <Product :id="productId" />
</template>

<style scoped>
</style>