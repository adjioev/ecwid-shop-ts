<script setup lang="ts">
import {ref} from "vue";
import LoadingComponent from "@/components/Misc/LoadingComponent.vue";
import ProductGrid from "@/components/ProductGrid/ProductGrid.vue";
import Newsletter from "@/components/Newsletter/Newsletter.vue";
import HeroComponent from "@/components/Hero/HeroComponent.vue";
import ContentContainer from "@/components/Containers/ContentContainer.vue";

const loading = ref(true);

const handleLoadingStart = () => {
  loading.value = true;
};

const handleLoadingStop = () => {
  loading.value = false;
};
</script>

<template>
  <HeroComponent />
  <LoadingComponent v-if="loading" />
  <div v-show="!loading">
    <ContentContainer>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-4">Featured Products</h1>
      <ProductGrid :limit=3 @start-loading="handleLoadingStart" @stop-loading="handleLoadingStop" />
    </ContentContainer>
  </div>
  <Newsletter />
</template>

<style scoped>

</style>