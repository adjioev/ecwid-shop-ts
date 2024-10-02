<script setup lang="ts">
import {ref} from "vue";
import {useCategoryStore} from "@/stores/categoryStore.ts";
import { useRoute } from 'vue-router';
import Product from "@/components/Product/Product.vue";
import BreadcrumbsComponent from "@/components/Breadcrumbs/BreadcrumbsComponent.vue";
import {Breadcrumb} from "@/types/Breadcrumb.ts";

const route = useRoute();
const productId = Number(route.params.id);
const pages = ref<Breadcrumb[]>([]);

const updateProductInfo = (productInfo: any) => {
const categoryName = useCategoryStore().getCategoryNameById(productInfo.defaultCategoryId);
pages.value = [
  {
    name: categoryName,
    href: `/categories/${productInfo.defaultCategoryId }`,
    current: false,
  },
  {
    name: productInfo.name,
    href: `/products/${productInfo.id}`,
    current: true,
  },
];
}
</script>

<template>
  <BreadcrumbsComponent :pages="pages" />
  <Product :id="productId" @update-product-info="updateProductInfo" />
</template>

<style scoped>
</style>