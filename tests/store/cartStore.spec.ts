import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useCartStore } from '@/stores/cartStore';
import { CartItem } from '@/types/CartItem.ts';

describe('Cart Store', () => {
    let store: ReturnType<typeof useCartStore>;

    beforeEach(() => {
        setActivePinia(createPinia());  // activate a fresh Pinia instance before each test
        store = useCartStore();

        // Mock localStorage
        vi.stubGlobal('localStorage', {
            getItem: vi.fn(),
            setItem: vi.fn(),
            removeItem: vi.fn(),
            clear: vi.fn(),
        });
    });

    it('adds an item to the cart', () => {
        const newItem: CartItem = { id: '1', name: 'Item 1', price: 10, quantity: 1 };
        store.addToCart(newItem);
        expect(store.items.length).toBe(1);
        expect(store.items[0]).toEqual(newItem);
    });

    it('removes an item from the cart', () => {
        const item: CartItem = { id: '1', name: 'Item 1', price: 10, quantity: 1 };
        store.addToCart(item);
        store.removeFromCart(item.id);
        expect(store.items.length).toBe(0);
    });

    it('calculates cart total', () => {
        const item1: CartItem = { id: '1', name: 'Item 1', price: 10, quantity: 1 };
        const item2: CartItem = { id: '2', name: 'Item 2', price: 20, quantity: 2 };
        store.addToCart(item1);
        store.addToCart(item2);
        expect(store.cartTotal).toBe(50);
    });

    it('calculates tax estimate', () => {
        const item: CartItem = { id: '1', name: 'Item 1', price: 100, quantity: 1 };
        store.addToCart(item);
        expect(store.taxEstimate).toBe(20); // Assuming TAX_RATE = 0.20
    });

    it('clears the cart on checkout', () => {
        const item: CartItem = { id: '1', name: 'Item 1', price: 10, quantity: 1 };
        store.addToCart(item);
        store.checkout();
        expect(store.items.length).toBe(0);
    });
});
