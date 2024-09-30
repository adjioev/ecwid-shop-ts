<script setup lang="ts">

defineProps({
  currencySign: {
    type: String,
    required: true,
  },
  subTotal: {
    type: Number,
    required: true,
  },
  shipping: {
    type: String,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'on-checkout'): void
}>()

const handleCheckout = () => {
  emit('on-checkout')
}
</script>

<template>
  <section aria-labelledby="summary-heading" class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
    <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

    <dl class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <dt class="text-sm text-gray-600">Subtotal</dt>
        <dd class="text-sm font-medium text-gray-900">{{currencySign}} {{ subTotal }}</dd>
      </div>
      <div class="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt class="flex items-center text-sm text-gray-600">
          <span>Shipping estimate</span>
        </dt>
        <dd class="text-sm font-medium text-gray-900">{{currencySign}} {{shipping}}</dd>
      </div>
      <div class="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt class="flex text-sm text-gray-600">
          <span>Tax estimate</span>
        </dt>
        <dd class="text-sm font-medium text-gray-900">{{ currencySign}} {{tax}}</dd>
      </div>
      <div class="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt class="text-base font-medium text-gray-900">Order total</dt>
        <dd class="text-base font-medium text-gray-900">{{ currencySign}} {{ total }}</dd>
      </div>
    </dl>

    <div class="mt-6">
      <button @click="handleCheckout" type="submit" class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Checkout</button>
    </div>
  </section>
</template>

<style scoped>
</style>