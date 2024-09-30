<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';

const categoryStore = useCategoryStore();
categoryStore.loadCategories();
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
