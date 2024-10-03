<template>
  <header class="bg-white">
    <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
    >
      <router-link :to="{ name: 'Home' }" class="-m-1.5 p-1.5">
        <span class="sr-only">LaSha Inc.</span>
        <img class="h-8 w-auto" :src="logo" alt="Logo" />
      </router-link>
      <div class="flex gap-x-4 lg:hidden">
        <CartIconComponent :count="cartItemCount" />
        <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <div v-for="item in navigation" :key="item.name">
          <router-link
              v-if="!item.isExternal"
              :to="item.to"
              class="text-sm font-semibold leading-6 text-gray-900"
          >
            {{ item.name }}
          </router-link>
          <a
              v-else
              :href="item.to"
              class="text-sm font-semibold leading-6 text-gray-900"
          >
            {{ item.name }}
          </a>
        </div>
        <CartIconComponent :count="cartItemCount" />
      </div>
    </nav>
    <Dialog
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10"></div>
      <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <router-link :to="{ name: 'Home' }" class="-m-1.5 p-1.5">
            <span class="sr-only">LaSha Inc.</span>
            <img class="h-8 w-auto" :src="logo" alt="Logo" />
          </router-link>
          <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <div v-for="item in navigation" :key="item.name">
                <router-link
                    v-if="!item.isExternal"
                    :to="item.to"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {{ item.name }}
                </router-link>
                <a
                    v-else
                    :href="item.to"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { useCartStore } from '@/stores/cartStore';
import CartIconComponent from '@/components/Header/CartIconComponent.vue';
import {useCategoryStore} from "@/stores/categoryStore";

const cartStore = useCartStore();
const cartItemCount = computed(() => cartStore.cartItemCount);
const logo = new URL('@/assets/lasha-logo.png', import.meta.url).href;

const categoryStore  = useCategoryStore();
const navigation  = computed(() => {
   const cat = categoryStore.categories;
   const mappedCategories = cat ? cat.map(category => ({
      name: category.name,
      to: `/categories/${category.id}`,
      isExternal: false,
    })) : [];

    return [
        { name: 'Our Products', to: '/', isExternal: false },
        ...mappedCategories,
        { name: 'About', to: '/about', isExternal: false },
    ];
});

const mobileMenuOpen = ref(false);
</script>