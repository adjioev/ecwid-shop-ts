<script setup lang="ts">
defineProps({
  images: Object,
});
</script>

<template>
  <div v-if="images" class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0" >
    <h2 class="sr-only">Images</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8" >
      <img
          v-for="image in images"
          :key="image.id"
          :src="image.imageOriginalUrl"
          :alt="image.imageAlt"
          :class="[
              image.isMain
                  ? 'lg:col-span-2 lg:row-span-2'
                  : 'hidden lg:block',
              'rounded-lg',
          ]"
      />
    </div>
  </div>

</template>

<style scoped>

</style>