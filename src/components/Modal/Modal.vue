<template>
  <div v-if="isVisible" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50" @click="closeModal">
    <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative" @click.stop>
      <slot></slot>
      <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useModalStore } from '@/stores/modalStore';

const modalStore = useModalStore();
const isVisible = computed(() => modalStore.isVisible);

const closeModal = () => {
  modalStore.closeModal();
};
</script>