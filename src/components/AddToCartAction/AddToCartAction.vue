<template>
  <button
      type="button"
      @click="handleButtonClick"
      :disabled="isLoading"
      :class="[
      'mt-8 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2',
      isAdded
        ? 'bg-black hover:bg-gray-800 focus:ring-black'
        : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
    ]"
  >
    <template v-if="isLoading">
      <ArrowPathIcon class="h-5 w-5 mr-3 animate-spin text-white" />
      Processing...
    </template>

    <template v-else-if="isAdded">
      Go to checkout
      <ArrowRightIcon class="h-5 w-5 ml-3 text-white" />
    </template>

    <template v-else>
      Add to cart
    </template>
  </button>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import  { ArrowPathIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';

export default {
  components: {
    ArrowPathIcon,
    ArrowRightIcon,
  },
  setup() {
    const isLoading = ref(false);
    const isAdded = ref(false);
    const router = useRouter();

    const handleButtonClick = () => {
      if (isAdded.value) {
        // Navigate to the cart page
        router.push('/cart');
      } else {
        addItemToCart();
      }
    };

    const addItemToCart = () => {
      isLoading.value = true;

      // TODO: Logic for busket check goes here, faking a delay for now
      setTimeout(() => {
        isLoading.value = false;
        isAdded.value = true;
      }, 2000);
    };

    return {
      isLoading,
      isAdded,
      handleButtonClick,
    };
  },
};
</script>