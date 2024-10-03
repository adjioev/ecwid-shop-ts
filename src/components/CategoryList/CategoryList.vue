<script setup lang="ts">
import {PropType} from "vue";
import {Category} from "@/types/Category.ts";

defineProps({
  categories: {
    type: Array as PropType<Category[]>,
    required: true,
  },
});
</script>

<template>
  <div>
    <a v-for="category in categories" :key="category.id" :href="`/categories/${category.id}`" class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">{{ category.name }}</a>
  </div>
</template>

<style scoped>
</style>