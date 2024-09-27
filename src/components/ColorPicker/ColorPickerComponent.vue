<script setup lang="ts">
import {RadioGroup, RadioGroupOption} from "@headlessui/vue";
import {ref} from "vue";

const props = defineProps({
  colors: {
    type: Array,
    required: true,
  },
})

const selectedColor = ref(props.colors[0]);
</script>

<template>
  <div>
    <h2 class="text-sm font-medium text-gray-900"> Color </h2>

    <fieldset aria-label="Choose a color" class="mt-2" >
      <RadioGroup
          v-model="selectedColor"
          class="flex items-center space-x-3"
      >
        <RadioGroupOption
            as="template"
            v-for="color in colors"
            :key="color.name"
            :value="color"
            :aria-label="color.name"
            v-slot="{ active, checked }"
        >
          <div
              :class="[
                color.selectedColor,
                active && checked ? 'ring ring-offset-1' : '',
                !active && checked ? 'ring-2' : '',
                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
            ]"
          >
          <span
              aria-hidden="true"
              :class="[
                  color.bgColor,
                  'h-8 w-8 rounded-full border border-black border-opacity-10',
              ]"
          />
          </div>
        </RadioGroupOption>
      </RadioGroup>
    </fieldset>
  </div>
</template>

<style scoped>

</style>