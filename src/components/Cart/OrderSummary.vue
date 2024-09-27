<script setup lang="ts">
import OrderSummaryComponent from "@/components/Cart/OrderSummaryComponent.vue";
import {useCartStore} from "@/stores/cart.ts";
import {useModalStore} from "@/stores/modalStore.ts";

const modalStore = useModalStore();
const cartStore = useCartStore();

const handleCheckout = () => {
  cartStore.checkout();
  modalStore.openModal();
}

</script>

<template>
<OrderSummaryComponent
    @on-checkout="handleCheckout"
    currencySign="€"
    :subTotal="cartStore.cartTotal"
    :shipping="cartStore.shippingEstimate"
    :tax="cartStore.taxEstimate"
    :total="cartStore.totalWithTaxAndShipping"
/>
</template>

<style scoped>

</style>