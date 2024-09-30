<template>
    <div class="pb-16 pt-6 sm:pb-24">
        <div
            class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8"
        >
          <div class="lg:col-span-5 lg:col-start-8">
            <div class="flex justify-between">
              <h1 class="text-xl font-medium text-gray-900">
                {{ productData.name }}
              </h1>
              <p class="text-xl font-medium text-gray-900">
                {{ productData.defaultDisplayedPriceFormatted }}
              </p>
            </div>
          </div>

          <!-- Image gallery -->
          <div
              class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0"
          >
            <h2 class="sr-only">Images</h2>

            <div
                class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8"
            >
              <img
                  v-for="image in productData.media.images"
                  :key="image.id"
                  :src="image.imageOriginalUrl"
                  :alt="image.imageAlt"
                  :class="[
                                    image.isMain
                                        ? 'lg:col-span-2 lg:row-span-2'
                                        : 'hidden lg:block',
                                    'rounded-lg',
                                ]"
              />
            </div>
          </div>

          <div class="mt-8 lg:col-span-5">
            <form>
              <!-- Size picker -->
              <div class="mt-8">
                <div class="flex items-center justify-between">
                  <h2
                      class="text-sm font-medium text-gray-900"
                  >
                    Size
                  </h2>
                  <a
                      href="#"
                      class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >See sizing chart</a
                  >
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
                        v-for="size in product.sizes"
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

              <button
                  type="button"
                  @click="addItemToCart"
                  class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </form>

            <!-- Product details -->
            <div class="mt-10">
              <h2 class="text-sm font-medium text-gray-900">
                Description
              </h2>

              <div
                  class="prose prose-sm mt-4 text-gray-500"
                  v-html="productData.description"
              />
            </div>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {PropType, ref} from "vue";
import {RadioGroup, RadioGroupOption} from "@headlessui/vue";
import { Product } from '@/types/ProductInterfaces';
import {CartItem} from "@/types/CartItem.ts";

const props = defineProps({
  productData: {
    type: Object as PropType<Product>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'add-to-cart', product: CartItem): void
}>()

const addItemToCart = () => {
  const product: CartItem = {
    id: props.productData.id,
    name: props.productData.name,
    url: props.productData.thumbnailUrl,
    price: props.productData.price,
    inStock: props.productData.inStock,
    quantity: 1
  };

  emit('add-to-cart', product)
}

const product = {
  sizes: [
    {name: "XXS", inStock: true},
    {name: "XS", inStock: true},
    {name: "S", inStock: true},
    {name: "M", inStock: true},
    {name: "L", inStock: true},
    {name: "XL", inStock: false},
  ]
};

const selectedSize = ref(product.sizes[2]);
</script>
