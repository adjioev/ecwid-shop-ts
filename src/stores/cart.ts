import { defineStore } from 'pinia'
import { CartItem } from '@/types/CartItem.ts'

//TODO: those are fake numbers, just fpr a demo
const SHIPPING_PRICE = 5.00;
const TAX_RATE = 0.20;

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[]
    }),
    actions: {
        addToCart(item: CartItem) {
            const existingItem = this.items.find((i: CartItem) => i.id === item.id)
            if (existingItem) {
                existingItem.quantity += item.quantity
            } else {
                this.items.push(item)
            }
        },
        removeFromCart(itemId: string) {
            this.items = this.items.filter(item => item.id !== itemId)
        },
        clearCart() {
            this.items = []
        }
    },
    getters: {
        cartTotal(): number {
            return parseFloat(
                this.items.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0).toFixed(2)
            );
        },
        cartItemCount(): number {
            return this.items.reduce((count: number, item: CartItem) => count + item.quantity, 0)
        },
        taxEstimate(): number {
            return parseFloat((this.cartTotal * TAX_RATE).toFixed(2));
        },
        shippingEstimate(): string {
            return SHIPPING_PRICE.toFixed(2);
        },
        totalWithTaxAndShipping(): number {
            return parseFloat((this.cartTotal + this.taxEstimate + SHIPPING_PRICE).toFixed(2));
        }
    },
    persist: {
        key: 'cart-items',
        storage: localStorage
    }
})