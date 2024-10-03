<script setup lang="ts">
import { PropType } from "vue";
import { Category } from "@/types/Category.ts";

defineProps({
  categories: {
    type: Array as PropType<Category[]>,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <a
        v-for="category in categories"
        :key="category.id"
        :href="`/categories/${category.id}`"
        class="flex items-center justify-center w-32 h-32 bg-white rounded-lg shadow-md text-gray-700 hover:bg-gray-100 transition duration-200 ease-in-out"
    >
      {{ category.name }}
    </a>
  </div>
</template>

<style scoped>
</style>