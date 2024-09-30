import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchCategories } from "@/api/useEcwidApi.ts";

export const useCategoryStore = defineStore('store', () => {
    const categories = ref([]);

    const loadCategories = async () => {
        try {
            const data = await fetchCategories();
            // TODO: add TS interface
            categories.value = data.items;
            console.log('Categories loaded:', categories.value);
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        }
    };

    return { categories, loadCategories };
});