<script setup lang="ts">
import {RadioGroup, RadioGroupOption} from "@headlessui/vue";
import {PropType, ref} from "vue";
import {Size} from "@/types/ProductInterfaces.ts";

const props = defineProps({
  sizes: {
    type: Array as PropType<Size[]>,
    required: true,
  },
});
const selectedSize = ref(props.sizes[0]);
</script>

<template>
  <div class="mt-8">
    <div class="flex items-center justify-between">
      <h2 class="text-sm font-medium text-gray-900" >
        Size
      </h2>
    </div>

    <fieldset
        aria-label="Choose a size"
        class="mt-2"
    >
      <RadioGroup
          v-model="selectedSize"
          class="grid grid-cols-3 gap-3 sm:grid-cols-6"
      >
        <RadioGroupOption
            as="template"
            v-for="size in sizes"
            :key="size.name"
            :value="size"
            :disabled="!size.inStock"
            v-slot="{ active, checked }"
        >
          <div
              :class="[
                size.inStock
                    ? 'cursor-pointer focus:outline-none'
                    : 'cursor-not-allowed opacity-25',
                active
                    ? 'ring-2 ring-indigo-500 ring-offset-2'
                    : '',
                checked
                    ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                'flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1',
            ]"
          >
            {{ size.name }}
          </div>
        </RadioGroupOption>
      </RadioGroup>
    </fieldset>
  </div>
</template>

<style scoped>
</style>