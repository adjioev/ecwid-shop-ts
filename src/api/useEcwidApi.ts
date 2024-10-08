// Access environment variables from .env file

import {CategoryResponse} from "@/types/Category.ts";
import {Product, ProductResponse} from "@/types/ProductInterfaces.ts";

const STORE_ID = import.meta.env.VITE_STORE_ID;
const TOKEN = import.meta.env.VITE_API_TOKEN;
const BASE_URL = `${import.meta.env.VITE_BASE_URL}${STORE_ID}/`;

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
};

// Helper function to handle API requests
const apiRequest = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers,
        });
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        return data as T;
    } catch (error) {
        console.error("API request failed:", error);
        throw error;
    }
};

// Fetch all products
// TODO: demo version, its must support pagination
export const fetchProducts = async (): Promise<ProductResponse> => {
    return apiRequest<ProductResponse>('products');
};

// Fetch product by ID
export const fetchProductById = async (productId: number): Promise<Product> => {
    return apiRequest<Product>(`products/${productId}`);
};

// Fetch all categories
export const fetchCategories = async (): Promise<CategoryResponse> => {
    return apiRequest<CategoryResponse>('categories');
};

// fetch all category items
export const fetchCategoryProducts = async (categoryId: number): Promise<ProductResponse> => {
    return apiRequest<ProductResponse>('products?category=' + categoryId);
};
