<script setup lang="ts">
import Product from "@/components/Product/Product.vue";
</script>

<template>
  <div id="app">
<!--    <nav>-->
<!--      <router-link to="/products">Products</router-link>-->
<!--      <router-link to="/product">Product</router-link>-->
<!--    </nav>-->
    <!-- This is where the routed components will be rendered -->
    <router-view></router-view>
  </div>
<!--  <Product />-->
</template>

<style scoped>
</style>
