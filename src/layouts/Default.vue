<script setup lang="ts">
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import FooterComponent from "@/components/Footer/FooterComponent.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent class="sticky top-0 z-1000" />
    <main class="w-full flex-grow mx-auto">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

