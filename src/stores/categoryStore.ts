import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchCategories } from "@/api/useEcwidApi.ts";
import {Category} from "@/types/Category.ts";

export const useCategoryStore = defineStore('category', () => {
    const categories = ref<Category[]>([]);

    const getCategoryNameById = (id: number) => {
        const category = categories.value.find((category: Category) => category.id  === id);
        return category ? category.name : '';
    };

    const loadCategories = async () => {
        try {
            const data = await fetchCategories();
            // TODO: add TS interface
            if (categories.value.length > 0) { return }
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
