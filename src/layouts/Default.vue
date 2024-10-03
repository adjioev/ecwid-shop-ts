<script setup lang="ts">
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import FooterComponent from "@/components/Footer/FooterComponent.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent class="sticky top-0 z-50"/>
    <main class="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
      <router-view/>
    </main>
    <FooterComponent/>
  </div>
</template>

