import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchCategories } from "@/api/useEcwidApi.ts";

export const useCategoryStore = defineStore('category', () => {
    const categories = ref([]);

    const getCategoryNameById = (id: string) => {
        const category = categories.value.find((category: any) => category.id.toString()  === id);
        return category ? category.name : '';
    };

    const loadCategories = async () => {
        try {
            const data = await fetchCategories();
            // TODO: add TS interface
            categories.value = data.items;
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        }
    };

    return { categories, loadCategories, getCategoryNameById };
}, {
    persist: {
        storage: sessionStorage,
    },
})
