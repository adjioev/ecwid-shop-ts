<script setup lang="ts">
import OrderSummaryComponent from "@/components/Cart/OrderSummaryComponent.vue";
import {useCartStore} from "@/stores/cart.ts";

const cartStore = useCartStore();
</script>

<template>
<OrderSummaryComponent
    currencySign="€"
    :subTotal="cartStore.cartTotal"
    :shipping="cartStore.shippingEstimate"
    :tax="cartStore.taxEstimate"
    :total="cartStore.totalWithTaxAndShipping"
/>
</template>

<style scoped>

</style>