<script setup lang="ts">
import {ShoppingBagIcon} from "@heroicons/vue/24/outline";

defineProps({
  count: Number
});
</script>

<template>
  <router-link to="/cart">
      <span href="#" class="group -m-2 flex items-center p-2">
        <ShoppingBagIcon class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
        <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{{ count }}</span>
        <span class="sr-only">items in cart, view bag</span>
      </span>
  </router-link>
</template>

<style scoped>

</style>